const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    maxWidth: 800,
    maxHeight: 600,
    icon: path.join(__dirname, 'icon.png'), // optional
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  
  win.loadFile('index.html');
    win.webContents.openDevTools(); // ADD THIS LINE
}

app.whenReady().then(()=>{
    createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});