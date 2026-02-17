const express = require('express');
const app = express();
const path = require('path');
const os = require('os');

// Port to listen on (default 3000)
const port = 3000;

// Function to get local IP address
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '0.0.0.0';
}

// Serve static files from current directory
app.use(express.static(__dirname));

// Route for root specific file (index.html is default but explicit is good)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(port, () => {
  const localIP = getLocalIP();
  console.log('\n==================================================');
  console.log(`🚀 Servidor rodando com sucesso!`);
  console.log(`--------------------------------------------------`);
  console.log(`🌍 Acesso Local:   http://localhost:${port}`);
  console.log(`📡 Acesso na Rede: http://${localIP}:${port}`);
  console.log('==================================================\n');
});
