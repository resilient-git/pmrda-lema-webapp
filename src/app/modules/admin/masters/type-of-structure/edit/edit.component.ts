import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'app/modules/admin/masters/type-of-structure/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';
import { MastersService } from '../../masters.service';


@Component({
    selector       : 'edit',
    templateUrl    : './edit.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy
{
    structureForm: FormGroup;
    // structureData : any;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _editService: EditService,
        private _mastersService: MastersService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _activatedRoute : ActivatedRoute
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.structureForm = this._formBuilder.group({ 
            code:[],
            name_mr:['', Validators.required],
            name_en:['', Validators.required],
            
        }) 
        
        const code = this._activatedRoute.params['_value'].code; 
        this._editService.getStructureData(code)
            .subscribe(() => {
                if (this._editService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._editService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.structureForm.setValue(this._editService.data$.source['_value'].data);
                }
            })

                 
        
    }

    /**
     * On destroy
     */
    
     ngOnDestroy(): void
    {
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
    saveAsDraft(): void
    {

    }
    
    /**
     * Send the message
     */
     send(): void {
        if (this.structureForm.invalid) {
            return;
        }

        // Disable the form
        this.structureForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.structureForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.structureForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.talukaForm.value);

        // Sign up
        this._editService.postData(this.structureForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.structureForm.enable();

                    // Reset the form
                    this.structureForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {


                    this._router.navigateByUrl('/admin/type-of-structures/list');
                }
            },
                (response) => { }

            );
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
