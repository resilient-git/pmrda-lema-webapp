import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BookingDonePropertyTransferService } from 'app/modules/citizens/property/application/transfer/schedule/booking-done/booking-done.service';
import { Subject } from "rxjs";

@Component({
    selector       : 'booking-done-property',
    templateUrl    : './booking-done.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookingDonePropertyTransferComponent implements OnInit, OnDestroy
{

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    bdate:string='';
    /**
     * Constructor
     */
     constructor(
        private _BookingDonePropertyTransferService: BookingDonePropertyTransferService,
        private _router: Router,
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
        
        this.bdate = this._activatedRoute.params['_value'].bdate;
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