import { app, shell, BrowserWindow } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow() {
  // 创建浏览器窗口。
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    // 打开外部链接。
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // 根据 electron-vite cli 进行渲染器的 HMR。
  // 在开发模式下加载远程 URL，生产模式下加载本地 HTML 文件。
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// 当 Electron 初始化完成并准备好创建浏览器窗口时，将调用此方法。
app.whenReady().then(() => {
  // 为 Windows 设置应用程序用户模型 ID。
  electronApp.setAppUserModelId('com.electron')

  // 在开发环境下，默认打开或关闭 DevTools（开发者工具）使用 F12 键，
  // 并在生产环境下忽略 CommandOrControl + R 快捷键。
  // 详见 https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // 在 macOS 上，当点击 Dock 图标并且没有其他窗口打开时，常见的做法是重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 当所有窗口都关闭时退出应用，但在 macOS 上通常应用程序和菜单栏会一直保持活动状态，
// 直到用户显式使用 Cmd + Q 退出应用程序。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 在这个文件中，您可以包含应用程序的其他主进程代码，
// 也可以将它们放在单独的文件中并在这里引入。
