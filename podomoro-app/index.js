const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            contextIsolation: false
        },
        icon: __dirname + '/assets/tomato.png',
        autoHideMenuBar: true,
    }) 
  
    win.loadFile('index.html')
}
  
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
  
  