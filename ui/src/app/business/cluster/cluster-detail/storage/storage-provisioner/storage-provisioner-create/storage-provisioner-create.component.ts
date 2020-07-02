import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CreateStorageProvisionerRequest} from '../storage-provisioner';

@Component({
    selector: 'app-storage-provisioner-create',
    templateUrl: './storage-provisioner-create.component.html',
    styleUrls: ['./storage-provisioner-create.component.css']
})
export class StorageProvisionerCreateComponent implements OnInit {

    constructor() {
    }

    opened = false;
    item = new CreateStorageProvisionerRequest();
    @Output() selected = new EventEmitter<CreateStorageProvisionerRequest>();

    ngOnInit(): void {
    }

    open() {
        this.opened = true;
    }

    onCancel() {
        this.opened = false;
    }

    onSubmit() {
        this.opened = false;
        this.selected.emit(this.item);
    }


}
