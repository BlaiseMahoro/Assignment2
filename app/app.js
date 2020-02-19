const application = require("tns-core-modules/application");
const fs = require("tns-core-modules/file-system");

let appFolder = knownFolders.currentApp();
let cfgFile = appFolder.getFile("inf.tx");
console.log("content of File",cfgFile.readTextSync());

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
