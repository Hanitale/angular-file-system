"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../../app.module");
var fs_service_1 = require("../../../app/services/fs.service");
fs_service_1.FsService;
var FilesystemComponent = (function () {
    function FilesystemComponent(fsService) {
        this.current = null;
        this.root = fsService.getRoot();
    }
    FilesystemComponent.prototype.activate = function (item) {
        this.current = item;
        console.log("current item is: ", item);
    };
    return FilesystemComponent;
}());
app_module_1.AppModule.component('filesystem', {
    templateUrl: 'app/components/filesystem/filesystem.template.html',
    controller: FilesystemComponent,
    bindings: {},
});
//# sourceMappingURL=filesystem.component.js.map