import { AppModule } from '../../app.module';

class ContextMenuComponent {
    private type: string;
    private id: number;
    private posX: number;
    private posY: number;

    constructor(private $scope: ng.IScope) {
        $scope.$on('showContextMenu', (event, obj) => {
            this.type = obj.type;
            this.id = obj.id;
            this.posX = obj.event.clientX;
            this.posY = obj.event.clientY;
        });
    }

    hideMe(event: any) {
        if (event.target.classList.contains('context-bg')) {
             this.id = null;
        }

    }

    createFolder(event:any, id:number){
        console.log('i am a create folder function');
        console.log('item id is : '+ id);
    }

    createFile(event:any, id:number){
        console.log('i am a create file function');
        console.log('item id is : '+ id);
    }
    rename(event:any, id:number){
        console.log('i am a rename item function');
        console.log('item id is : '+ id);
    }
    delete(event:any, id:number){
        console.log('i am a delete item function');
        console.log('item id is : '+ id);
    }
    open(event:any, id:number){
        console.log('i am an open file function');
        console.log('item id is : '+ id);
    }
}

AppModule.component('contextMenu', {
    templateUrl: 'app/components/contextmenu/contextmenu.template.html',
    controller: ['$scope', ContextMenuComponent]
});