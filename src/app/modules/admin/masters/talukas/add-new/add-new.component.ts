import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/masters/talukas/add-new/add-new.service';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector: 'add-new',
    templateUrl: './add-new.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy {
    talukaForm: FormGroup;
    // selectedProject: string = 'RLab Crop. Backend App';
    showAlert: boolean = false;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _addnewService: AddNewService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        // public matDialogRef: MatDialogRef<AddNewComponent>,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.talukaForm = this._formBuilder.group({
            code: ['', Validators.required],
            name_mr: ['', Validators.required],
            name_en: ['', Validators.required]
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
        if (this.talukaForm.invalid) {
            return;
        }

        // Disable the form
        this.talukaForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.talukaForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        // console.log(this.talukaForm.value);

        // Sign up
        this._addnewService.postData(this.talukaForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.talukaForm.enable();

                    // Reset the form
                    this.talukaForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/talukas/list');
                }
            },
                (response) => { }

            );
    }
}


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------


