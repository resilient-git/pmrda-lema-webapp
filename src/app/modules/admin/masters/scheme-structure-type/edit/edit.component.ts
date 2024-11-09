import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from './edit.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MastersService } from '../../masters.service';


@Component({
    selector: 'edit',
    templateUrl: './edit.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy {
    ssForm: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    schemesData: any;
    structureData: any;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _editService: EditService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService: MastersService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.ssForm = this._formBuilder.group({
            scheme_code: ['', Validators.required],
            structure_type: ['', Validators.required]
        })

        this.structureData = [];
        this._masterService.getSchemesStructureData(1)
        .subscribe(() => {
            if (this._masterService.data$.source['_value'].status != 200) {
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._masterService.data$.source['_value'].response
                };

                // Show the alert
                this.showAlert = true;
            } else {
                this.structureData = this._masterService.data$.source['_value'].data;
            }
        }) 

        this.getSchemesList;
    }


    getSchemesList():void{
        this.schemesData = [];
        this._masterService.getSchemesData(1)
        .subscribe(() => {
            if (this._masterService.data$.source['_value'].status != 200) {
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._masterService.data$.source['_value'].response
                };

                // Show the alert
                this.showAlert = true;
            } else {
                this.schemesData = this._masterService.data$.source['_value'].data;
            }
        }) 
    }

    /**
     * On destroy
     */

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */



    /**
     * Save the message as a draft
     */
    saveAsDraft(): void {

    }

    /**
     * Send the message
     */
    send(): void {

    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------


}
