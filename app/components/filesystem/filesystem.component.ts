import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service'; FsService;

class FilesystemComponent {
    current:any;
    root: any;
    constructor(fsService: FsService) {
        this.current = null;
        this.root = fsService.getRoot()
    }

    activate(item:any) {
        this.current = item;
        console.log("current item is: ", item);
    }
}

AppModule.component('filesystem', {
    templateUrl: 'app/components/filesystem/filesystem.template.html',
    controller:  FilesystemComponent,
    bindings: {},
});

