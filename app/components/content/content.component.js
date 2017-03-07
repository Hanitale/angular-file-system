"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../../app.module");
var ContentComponent = (function () {
    function ContentComponent($rootScope, fsService) {
        this.$rootScope = $rootScope;
        this.showChildren = true;
        this.showContent();
        this.folder = null;
        this.$rootScope = $rootScope;
        this.fsService = fsService;
    }
    ContentComponent.prototype.showContent = function () {
        var _this = this;
        this.$rootScope.$on('showContent', function (event, folder) {
            _this.folder = folder;
        });
    };
    ContentComponent.prototype.showContextMenu = function ($event, child) {
        this.$rootScope.$broadcast('showContextMenu', { event: $event, id: child.id, type: child.children ? 'folder' : 'file' });
    };
    return ContentComponent;
}());
app_module_1.AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ['$rootScope', ContentComponent],
    bindings: {
        folder: '<'
    }
});
//# sourceMappingURL=content.component.js.map