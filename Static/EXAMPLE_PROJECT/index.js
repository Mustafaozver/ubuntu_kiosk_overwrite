((ATA)=>{
	process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = "true";
	
	const Electron = ATA.Require("electron");
	
	Electron.app.whenReady().then(()=>{
		const path = ATA.Path.join(ATA.CWD, "./view/index.html");
		const preload = ATA.Path.join(ATA.CWD, "./view/preload.js");
		
		const Top = new Electron.BrowserWindow();
		
		const Win = new Electron.BrowserWindow({
			parent: Top,
			width: 600,
			height: 400,
			webPreferences: {
				nodeIntegration: true,
				nodeIntegrationInWorker: true,
				nodeIntegrationInSubFrames: true,
				preload,
				contextIsolation: false,
				enableRemoteModule: true,
			},
		});
		
		Top.hide();
		//Win.hide();
		Win.show();
		
		Win.loadFile(path);
		//Win.loadURL("http://localhost:1683/");
		
		Win.webContents.openDevTools(true);
		//Win.maximize();
		
		Win.setAlwaysOnTop(true);
		Win.setFullScreen(true);
		//Win.setProgressBar(50);
		//Win.setOpacity(50);
		Win.setIcon(ATA.Path.join(ATA.CWD, "./view/favicon.ico"));
		Win.setMenuBarVisibility(true);
		Win.setMovable(true);
		Win.setClosable(true);
		Win.setResizable(true);
		Win.setKiosk(true);
		//Win.setMenu();
		
		/*Electron.globalShortcut.register("Control+Shift+I", ()=>{
			return false;
		});*/
		
		Electron.globalShortcut.register("ESC", ()=>{
			process.exit(0);
		});
	});
})(require("ata.js")());