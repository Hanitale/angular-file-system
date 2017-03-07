"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../../app/app.module");
app_module_1.AppModule.directive('ngRightClick', [function () {
        return {
            restrict: 'A',
            scope: {
                ngRightClick: '&'
            },
            link: function (scope, element, attrs) {
                element[0].addEventListener('contextmenu', function (e) {
                    scope.ngRightClick({ $event: e });
                    scope.$apply();
                    e.preventDefault();
                });
            }
        };
    }]);
//# sourceMappingURL=rightclick.directive.js.map