import { Menu, App, MenuItemConstructorOptions, ipcMain, session } from "electron";

export interface IMainMenuConstructor {
    app: App;
}

export class MainMenu extends Menu {
    constructor() {
        super();
    }
    static constructMenu(ctor: IMainMenuConstructor) {
        let templateMenu: MenuItemConstructorOptions[] = [
            {
                label: "File",
                submenu: [
                    {
                        label: "Reload",
                        role: "reload"
                    },
                    // {
                    //     label: "Hard reload",
                    //     async click() {
                    //         await session.defaultSession.clearStorageData();
                    //     }
                    // },
                    {
                        label: "Save",
                        accelerator: process.platform === "darwin" ? "Command+S" : "Ctrl+S",
                        click() {
                            //ctor.uploadRequest();
                        }
                    },
                    {
                        label: "Quit",
                        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
                        click() {
                            ctor.app.quit();
                        }
                    },
                    {
                        label: "Settings",
                        click() {
                            
                        }
                    }
                ]
            },
            {
                label: "Edit",
                submenu: [
                    {
                        role: "undo"
                    },
                    {
                        role: "redo"
                    },
                    {
                        role: "cut"
                    },
                    {
                        role: "copy"
                    },
                    {
                        role: "paste"
                    }
                    ,
                    {
                        label: "Settings",
                        click() {

                        }
                    }
                ]
            },
            {
                label: "Report",
                submenu: [
                    {
                        label: "Show Report",
                        click() {
                            //ctor.campaignWindowLaunch('new');
                        }
                    }
                ]
            },
            {
                label: "Data",
                submenu: [
                    {
                        label: "Clean Temporary",
                        click() {
                            //ctor.listBuildWindow();
                        }
                    },
                    {
                        label: "Clean Database",
                        click() {
                            //ctor.emailLookup();
                        }
                    }
                ]
            },
            {
                label: "Tools",
                submenu: [
                    {
                        label: "List Build",
                        submenu: [
                            {
                                label: "LinkedIn List Builder",
                                sublabel: "From Sales Navigator Lead Search and Account Search",
                                click() {
                                    
                                }
                            },
                            {
                                label: "Xing List Builder",
                                sublabel: "From Xing Lead Search",
                                click() {
                                    //ctor.emailLookup();
                                }
                            }
                        ]
                        
                    },
                    {
                        label: "Email Finder",
                        submenu: [
                            {
                                label: "Email Finder",
                                sublabel: "Find email addresses and verify them",
                                click() {
                                    
                                }
                            }
                        ]
                    },
                    {
                        label: "Analytcs",
                        submenu: [
                            {
                                label: "Batch Email Analytcs",
                                sublabel: "Select a batch and collect email performance analytics",
                                click() {
                                    
                                }
                            }
                        ]
                    }
                ]
            }
        ];
        if (process.platform === "darwin") {
            templateMenu.unshift();
        }

        if (process.env.NODE_ENV !== "production") {
            templateMenu.push({
                label: "View",
                submenu: [
                    {
                        role: "reload"
                    },
                    {
                        role: "forcereload"
                    },
                    {
                        label: "Toggle Developer Tools",
                        accelerator: process.platform === "darwin" ? "Command+A" : "Ctrl+Shift+I",
                        click(_item: any | undefined, focusedWindow: any) {
                            focusedWindow.toggleDevTools();
                        }
                    }
                ]
            } as any);
        }

        let mainMenu = this.buildFromTemplate(templateMenu);
        this.setApplicationMenu(mainMenu);
    }
}