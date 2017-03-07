"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../../app.module");
var ContextMenuComponent = (function () {
    function ContextMenuComponent($scope) {
        var _this = this;
        this.$scope = $scope;
        $scope.$on('showContextMenu', function (event, obj) {
            _this.type = obj.type;
            _this.id = obj.id;
            _this.posX = obj.event.clientX;
            _this.posY = obj.event.clientY;
        });
    }
    ContextMenuComponent.prototype.hideMe = function (event) {
        if (event.target.classList.contains('context-bg')) {
            this.id = null;
        }
    };
    ContextMenuComponent.prototype.createFolder = function (event, id) {
        console.log('i am a create folder function');
        console.log('item id is : ' + id);
    };
    ContextMenuComponent.prototype.createFile = function (event, id) {
        console.log('i am a create file function');
        console.log('item id is : ' + id);
    };
    ContextMenuComponent.prototype.rename = function (event, id) {
        console.log('i am a rename item function');
        console.log('item id is : ' + id);
    };
    ContextMenuComponent.prototype.delete = function (event, id) {
        console.log('i am a delete item function');
        console.log('item id is : ' + id);
    };
    ContextMenuComponent.prototype.open = function (event, id) {
        console.log('i am an open file function');
        console.log('item id is : ' + id);
    };
    return ContextMenuComponent;
}());
app_module_1.AppModule.component('contextMenu', {
    templateUrl: 'app/components/contextmenu/contextmenu.template.html',
    controller: ['$scope', ContextMenuComponent]
});
//# sourceMappingURL=contextmenu.component.js.map