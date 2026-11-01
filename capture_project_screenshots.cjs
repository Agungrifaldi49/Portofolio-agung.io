const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function getJson(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

const targets = [
    {
        name: 'E-Voting OSIS',
        url: 'http://localhost/E-vooting%20OSIS/public/',
        fallbackUrl: 'http://localhost/E-vooting%20OSIS/',
        output: path.join(__dirname, 'storage', 'app', 'public', 'projects', 'evoting_osis_index.png'),
        relPath: 'projects/evoting_osis_index.png',
        slug: 'e-voting-osis'
    },
    {
        name: 'Elearning',
        url: 'http://localhost/Elearning_Mhc/',
        output: path.join(__dirname, 'storage', 'app', 'public', 'projects', 'elearning_index.png'),
        relPath: 'projects/elearning_index.png',
        slug: 'elearning'
    },
    {
        name: 'Whatsapp Gateway',
        url: 'file:///C:/xampp/htdocs/whatsapp_gateway/public/landing.html',
        fallbackUrl: 'file:///C:/xampp/htdocs/whatsapp_gateway/public/index.html',
        output: path.join(__dirname, 'storage', 'app', 'public', 'projects', 'whatsapp_gateway_index.png'),
        relPath: 'projects/whatsapp_gateway_index.png',
        slug: 'whatsapp-gateway'
    },
    {
        name: 'Sim Mhs',
        url: 'http://localhost/E-Mhc/',
        output: path.join(__dirname, 'storage', 'app', 'public', 'projects', 'sim_mhs_index.png'),
        relPath: 'projects/sim_mhs_index.png',
        slug: 'sim-mhs'
    }
];

async function capture() {
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    const remotePort = 9228;
    const userDataDir = path.join(__dirname, 'storage', 'edge_temp_capture');

    if (!fs.existsSync(userDataDir)) {
        fs.mkdirSync(userDataDir, { recursive: true });
    }

    const projectsDir = path.join(__dirname, 'storage', 'app', 'public', 'projects');
    if (!fs.existsSync(projectsDir)) {
        fs.mkdirSync(projectsDir, { recursive: true });
    }

    console.log("Launching headless Edge on port " + remotePort + "...");
    const edge = spawn(edgePath, [
        `--remote-debugging-port=${remotePort}`,
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        `--user-data-dir=${userDataDir}`,
        '--window-size=1280,800',
        'about:blank'
    ]);

    await new Promise(r => setTimeout(r, 2500));

    try {
        const pages = await getJson(`http://127.0.0.1:${remotePort}/json`);
        const page = pages.find(p => p.type === 'page');
        if (!page) throw new Error("No page target found");

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        let id = 1;
        const pending = new Map();

        ws.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            if (data.id && pending.has(data.id)) {
                const { resolve, reject } = pending.get(data.id);
                pending.delete(data.id);
                if (data.error) reject(data.error);
                else resolve(data.result);
            }
        });

        function send(method, params = {}) {
            return new Promise((resolve, reject) => {
                const reqId = id++;
                pending.set(reqId, { resolve, reject });
                ws.send(JSON.stringify({ id: reqId, method, params }));
            });
        }

        await new Promise(r => ws.addEventListener('open', r, { once: true }));
        await send('Page.enable');
        await send('Emulation.setDeviceMetricsOverride', {
            width: 1280,
            height: 800,
            deviceScaleFactor: 1,
            mobile: false
        });

        for (const item of targets) {
            console.log(`Navigating to ${item.name}: ${item.url}`);
            try {
                await send('Page.navigate', { url: item.url });
                await new Promise(r => setTimeout(r, 2000));
            } catch (err) {
                if (item.fallbackUrl) {
                    console.log(`Trying fallback for ${item.name}: ${item.fallbackUrl}`);
                    await send('Page.navigate', { url: item.fallbackUrl });
                    await new Promise(r => setTimeout(r, 2000));
                }
            }

            console.log(`Capturing screenshot for ${item.name}...`);
            const screenshot = await send('Page.captureScreenshot', { format: 'png' });
            fs.writeFileSync(item.output, Buffer.from(screenshot.data, 'base64'));
            console.log(`Saved screenshot: ${item.output}`);
        }

        ws.close();
    } finally {
        edge.kill();
        setTimeout(() => {
            try {
                fs.rmSync(userDataDir, { recursive: true, force: true });
            } catch (e) {}
        }, 1000);
    }
}

capture().then(() => {
    console.log("All screenshots captured successfully!");
    process.exit(0);
}).catch(err => {
    console.error("Capture failed:", err);
    process.exit(1);
});

