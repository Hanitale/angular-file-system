import { AppModule } from '../../app.module';


class ContentComponent{

    private folder: any;
    private showChildren: boolean;
    private fsService: any;

    constructor(private $rootScope: ng.IScope, fsService:any) {
        this.showChildren = true;
        this.showContent();
        this.folder = null;
        this.$rootScope = $rootScope;
        this.fsService = fsService;
    }
    showContent(){
        this.$rootScope.$on('showContent',(event,folder)=>{
        this.folder = folder;
    })
    }

    showContextMenu($event: any, child:any) {
        this.$rootScope.$broadcast('showContextMenu', { event: $event, id: child.id, type: child.children ? 'folder' : 'file' });
    }
}

AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ['$rootScope', ContentComponent],
    bindings: {
        folder: '<'
    }
})

