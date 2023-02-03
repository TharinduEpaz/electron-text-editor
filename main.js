const { app, BrowserWindow } = require('electron');
const { path } = require('express/lib/application');


require ('electron-reloader')(module);
//electron reloader is the package used to realod the window automatically
// npm install electron-reloader -D

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width:900,
        height: 700,
        titleBarStyle: 'hidden', //remove the default title bar
        webPreferences:{
            preload:path.join
        }
    });
    // mainWindow.webContents.openDevTools(); //this will open the dev tools when the app is launched
    mainWindow.loadFile('index.html');
};


app.whenReady().then(createWindow)