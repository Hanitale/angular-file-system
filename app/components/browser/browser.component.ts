import { AppModule } from '../../app.module';


class BrowserComponent {

    private folder: any;
    private showChildren: boolean;
    private fsService: any;

    constructor(private $rootScope: ng.IScope, fsService:any) {
        this.fsService = fsService;
        this.showChildren = false;
        this.$rootScope = $rootScope;
    }

    toggleChildren() {
        this.showChildren = !this.showChildren;
        this.$rootScope.$broadcast('showContent', this.folder.children);
    }

    showContextMenu($event: any) {
       this.$rootScope.$broadcast('showContextMenu', { event: $event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
    }
}

AppModule.component('browser', {
    templateUrl: 'app/components/browser/browser.template.html',
    controller: ['$rootScope', BrowserComponent],
    bindings: {
        folder: '<'
    }
})

