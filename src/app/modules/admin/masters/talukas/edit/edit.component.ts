import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'app/modules/admin/masters/talukas/edit/edit.service';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector: 'edit',
    templateUrl: './edit.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy {
    talukaForm: FormGroup;

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
        private _activatedRoute : ActivatedRoute
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
            name_en: ['', Validators.required],
        })

        const code = this._activatedRoute.params['_value'].code; 
        this._editService.getTalukaData(code)
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
                    this.talukaForm.setValue(this._editService.data$.source['_value'].data);
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

    
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */


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
        this.talukaForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.talukaForm.value);

        // Sign up
        this._editService.postData(this.talukaForm.value)
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
                    //this._router.navigateByUrl('/talukas/list');
                    this._router.navigateByUrl('/admin/talukas/list');
                }
            },
                (response) => { }

            );
    }
}
