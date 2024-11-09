import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseAlertType } from "@fuse/components/alert";
import { BehaviorSubject, Subject } from "rxjs";
import { CitizensScheduleHeirshipTransferModule } from "./schedule.module";
import { ScheduleHeirshipTransferService } from "./schedule.service";

@Component({
    selector: 'schedule-heirship',
    templateUrl: './schedule.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScheduleHeirshipTransferComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    user_heirship_code: string;

    booked_slot:string;
    booked_date:string;
    date_of_oppintment:string;
    application_id: number;
    bookData: [] = [];
    bookData$ = new BehaviorSubject<any>(this.bookData);


    // user_heirship_code:number
    /**
     * Constructor
     */
    constructor(
        private _scheduleHeirshipTransferService: ScheduleHeirshipTransferService,
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
        this.user_heirship_code = this._activatedRoute.params['_value'].code;
        
        this._scheduleHeirshipTransferService.getbookingData(this.user_heirship_code)
            .subscribe(() => {
                if (this._scheduleHeirshipTransferService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._scheduleHeirshipTransferService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.bookData$.next(this._scheduleHeirshipTransferService.data$.source['_value'].data);
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
        this._scheduleHeirshipTransferService.bookSlots({heirship_application_id: this.user_heirship_code, booked_date: this.booked_date, booked_slot: this.booked_slot,user_id:user_id}).subscribe((response) => {
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
               this._router.navigateByUrl('/citizens/heirship-booking-done/'+this.date_of_oppintment);
             }
           });

    }

    bookNow1(code) {
        this._router.navigateByUrl('/citizens/booking-done');
         /*this._scheduleHeirshipTransferService.bookSlots({user_heirship_code: this.user_heirship_code, app_date: this.app_date,app_day:this.app_day, app_booked:this.app_booked }).subscribe((response) => {
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
               this._router.navigateByUrl('/citizens/booking-done');
             }
           });*/

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