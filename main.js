const {BrowserWindow, app} = require('electron')
const {resolve} = require('path')

let win
app.on('ready', function() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL(`http://localhost:8089`)
})
