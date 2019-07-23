const {app, BrowserWindow, Menu, Tray} = require('electron');
const path = require('path');

let mainWindow;

//Menu.setApplicationMenu();

function createWindow () {

  const appIcon = new Tray('./icon/favicon.ico');

  mainWindow = new BrowserWindow({
    width: 1300,
    height: 760,
    frame: true,
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    },
    icon: './icon/favicon.ico'
  });


  mainWindow.setFullScreen(false);
  mainWindow.loadFile('index.html');

  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', ()=>{
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});