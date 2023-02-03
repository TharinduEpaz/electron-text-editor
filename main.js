const { app, BrowserWindow } = require('electron');


require ('electron-reloader')(module);
//electron reloader is the package used to realod the window automatically
// npm install electron-reloader -D

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width:900,
        height: 700,
        titleBarStyle: 'hidden', //remove the default title bar
    });
    mainWindow.webContents.openDevTools(); //this will open the dev tools when the app is launched
    mainWindow.loadFile('index.html');
};


app.whenReady().then(createWindow)