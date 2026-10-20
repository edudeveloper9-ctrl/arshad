import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const SW_CONTENT = `self.options = {
    "domain": "3nbf4.com",
    "zoneId": 12081903
}
self.lary = ""
importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw')
`;

function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      // Direct raw handler for Monetag service worker verification
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/sw_3ff38b41.js' || url === '/sw.js') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          res.setHeader('Service-Worker-Allowed', '/');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.end(SW_CONTENT);
          return;
        }
        next();
      });

      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              console.log('📬 [Contact Form Submission Received]:', data);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                message: 'Your inquiry has been successfully transmitted to Mudivedu Arshadd.',
                timestamp: new Date().toISOString()
              }));
            } catch (err) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), contactApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

