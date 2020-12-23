import { app } from 'electron'
import * as path from 'path'
import { BrowserWindow } from 'atom'
import './modules/menu/context-menu'

function createWindow () {
    // Create the browser window.
    let win = BrowserWindow.create({
        width: 800,
        height: 600
    });

    if (process.env.APP_DEV) {
        win.loadURL('http://localhost:8080');
        try {
            require('electron-reloader')(module, {
                debug: true, 
                watchRenderer: false
            });
        } catch (_) {}
    } else {
        win.loadURL(path.join(__dirname, '..', 'renderer', `index.html`));
    }
}

app.on('ready', createWindow);