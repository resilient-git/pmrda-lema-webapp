import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { BookingDoneHeirshipTransferService } from 'app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.service';
import { Subject } from "rxjs";

@Component({
    selector       : 'booking-done-heirship',
    templateUrl    : './booking-done.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookingDoneHeirshipTransferComponent implements OnInit, OnDestroy
{

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
     constructor(
        private _BookingDoneHeirshipTransferService: BookingDoneHeirshipTransferService,
        private _router: Router
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






}