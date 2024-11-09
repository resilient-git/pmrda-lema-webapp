import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseAlertType } from "@fuse/components/alert";
import { BehaviorSubject, Subject } from "rxjs";
import { CitizensSchedulePropertyTransferModule } from "./schedule.module";
import { SchedulePropertyTransferService } from "./schedule.service";

@Component({
    selector: 'schedule-property',
    templateUrl: './schedule.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SchedulePropertyTransferComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    booked_slot:string;
    booked_date:string;
    date_of_oppintment:string;
    application_id: number;
    bookData: [] = [];
    bookData$ = new BehaviorSubject<any>(this.bookData);

    /**
     * Constructor
     */
    constructor(
        private _schedulePropertyTransferService: SchedulePropertyTransferService,
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
        
        this._schedulePropertyTransferService.getbookingData(this.application_id)
            .subscribe(() => {
                if (this._schedulePropertyTransferService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._schedulePropertyTransferService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.bookData$.next(this._schedulePropertyTransferService.data$.source['_value'].data);
                    // console.log(this.bookData);
                }
            })

        //   this.user_id = JSON.parse(localStorage.getItem('currentUser')).id; 

    }
    bookConfirm(slot,dday,ddate){
        this.booked_slot = slot;
        this.booked_date = ddate;
        if(slot == 1){
            this.date_of_oppintment=dday+', '+ddate+' at 11am - 1pm';
        }else{
            this.date_of_oppintment=dday+', '+ddate+' at 3pm - 5pm';
        }
    }
    bookNow() {
        let user_id = JSON.parse(localStorage.getItem('currentUser')).id;

        //this._router.navigateByUrl('/citizens/booking-done');
        this._schedulePropertyTransferService.bookSlots({transfer_application_id: this.application_id, booked_date: this.booked_date, booked_slot: this.booked_slot,user_id:user_id}).subscribe((response) => {
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