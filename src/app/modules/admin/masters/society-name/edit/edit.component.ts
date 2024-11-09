import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'app/modules/admin/masters/society-name/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector       : 'edit',
    templateUrl    : './edit.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy
{
    societyForm: FormGroup;
    scheme_structure_code: any;
   
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
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute
        
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
        this.societyForm = this._formBuilder.group({
           
                taluka_name_mr:[],taluka_name_en:[],taluka_code:[],
                village_code:[],village_name_mr:[],village_name_en:[],
                code:[],
                scheme_number:[],scheme_code:[],
                gpsc_number:[],
                gpsc_code:[],
                structure_code:[],
                structure_type_name_en:[],
                structure_type_name_mr:[],
                name_en:['',Validators.required],
                name_mr:['',Validators.required]
            })
        
        const code = this._activatedRoute.params['_value'].code;
        this._editService.getSociety(code)
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
                    console.log(this.societyForm);
                    this.societyForm.setValue(this._editService.data$.source['_value'].data);
                    console.log(this.societyForm);
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
   
    //  saveAndClose(): void
    // {
        
    //     this.saveAsDraft();

        
    //     this.matDialogRef.close();
    // }
    //  discard(): void
    // {
    //     this.matDialogRef.close();
    // }

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
        if (this.societyForm.invalid) {
            return;
        }

        // Disable the form
        this.societyForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.societyForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.societyForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.villageForm.value);

        // Sign up
        this._editService.postData(this.societyForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.societyForm.enable();

                    // Reset the form
                    this.societyForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/societies/list');
                }
            },
                (response) => { }

            );
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
