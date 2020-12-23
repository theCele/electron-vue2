import { BrowserWindow } from 'atom'
import * as contextMenu from 'electron-context-menu'

contextMenu({
    showInspectElement: true,
    showSearchWithGoogle: false,
    append: (defaultActions, params, browserWindow) => {
      let clickurl = params.linkURL ? params.linkURL : params.pageURL;
      return [
        {
          label: 'Open in new window',
          click: (a, b, c) => {
            let w = BrowserWindow.create({
              width: 800,
              height: 600
            });
            w.loadURL(clickurl);
          }
        }
      ]
    }
});