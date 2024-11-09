import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseAlertType } from "@fuse/components/alert";
import { BehaviorSubject, Subject } from "rxjs";
import { CitizensDeedVerifyPropertyTransferModule } from "./deed-verify.module";
import { DeedVerifyPropertyTransferService } from "./deed-verify.service";

@Component({
    selector: 'deed_verify-property',
    templateUrl: './deed-verify.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeedVerifyPropertyTransferComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    booked_date:string;
    date_of_oppintment:string;
    application_id: number;
    bookData: [] = [];
    bookData$ = new BehaviorSubject<any>(this.bookData);

    /**
     * Constructor
     */
    constructor(
        private _deed_verifyPropertyTransferService: DeedVerifyPropertyTransferService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.application_id = this._activatedRoute.params['_value'].code;
        
        this._deed_verifyPropertyTransferService.getbookingData(this.application_id)
            .subscribe(() => {
                if (this._deed_verifyPropertyTransferService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._deed_verifyPropertyTransferService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.bookData$.next(this._deed_verifyPropertyTransferService.data$.source['_value'].data);
                    // console.log(this.bookData);
                }
            })

        //   this.user_id = JSON.parse(localStorage.getItem('currentUser')).id; 

    }
    bookConfirm(code,dday,ddate){
        this.booked_date = code;
        this.date_of_oppintment=dday+', '+ddate;
    }
    bookNow() {
        let user_id = JSON.parse(localStorage.getItem('currentUser')).id;

        //this._router.navigateByUrl('/citizens/booking-done');
        this._deed_verifyPropertyTransferService.bookSlots({transfer_application_id: this.application_id, booked_date: this.booked_date,user_id:user_id}).subscribe((response) => {
             console.log(response);
            if (response.status != 200) {
               // Set the alert
               this.alert = {
                 type: 'error',
                 message: response.response
               };

               // Show the alert
               this.showAlert = true;
             } else {
               //this._router.navigateByUrl('/citizens/booking-done');
               this._router.navigateByUrl('/citizens/tpa-booking-done/'+this.date_of_oppintment);
             }
           });

    }
    /**
    * On destroy
    */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}