const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    resizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'assets', 'chronometer.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenu(null);
  mainWindow.setAlwaysOnTop(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC: 切换窗口置顶
ipcMain.on('toggle-always-on-top', (event, isOnTop) => {
  if (mainWindow) {
    mainWindow.setAlwaysOnTop(isOnTop, 'screen-saver');
    mainWindow.setVisibleOnAllWorkspaces(isOnTop);
  }
});

// IPC: 发送 Windows 系统原生通知
ipcMain.on('show-notification', (event, { title, body }) => {
  if (Notification.isSupported()) {
    new Notification({ title, body }).show();
  }
});
