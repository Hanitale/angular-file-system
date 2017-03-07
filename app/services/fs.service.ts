import { AppModule } from '../app.module';

export class FsService {
    root: any;
    current:any;

    constructor() {

        this.root = {
            id: 1, name: 'root', children: [
                {
                    id: 2, name: 'sub1', children: [
                        { id: 4, name: 'sub3', children: [] },
                        { id: 5, name: 'file1', content: 'text' },
                    ]
                },
                { id: 3, name: 'sub2', children: [] },
                { id: 6, name:'angular', content:'one is also important'}
            ]
        }
    }

    getRoot() {
        return this.root;
    }
}

AppModule.service('fsService', FsService);

