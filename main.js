"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app_module_1 = require("./app/app.module");
require("./app/components/filesystem/filesystem.component");
require("./app/components/browser/browser.component");
require("./app/components/content/content.component");
require("./app/components/contextmenu/contextmenu.component");
require("./app/directives/rightclick.directive");
angular.bootstrap(document, [app_module_1.AppModule.name]);
//# sourceMappingURL=main.js.map