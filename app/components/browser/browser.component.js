"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../../app.module");
var BrowserComponent = (function () {
    function BrowserComponent($rootScope, fsService) {
        this.$rootScope = $rootScope;
        this.fsService = fsService;
        this.showChildren = false;
        this.$rootScope = $rootScope;
    }
    BrowserComponent.prototype.toggleChildren = function () {
        this.showChildren = !this.showChildren;
        this.$rootScope.$broadcast('showContent', this.folder.children);
    };
    BrowserComponent.prototype.showContextMenu = function ($event) {
        this.$rootScope.$broadcast('showContextMenu', { event: $event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
    };
    return BrowserComponent;
}());
app_module_1.AppModule.component('browser', {
    templateUrl: 'app/components/browser/browser.template.html',
    controller: ['$rootScope', BrowserComponent],
    bindings: {
        folder: '<'
    }
});
//# sourceMappingURL=browser.component.js.map