import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from "@angular/router";
import { FeesService } from "app/modules/dy-commissioner/payment/fees/initiate/fees.service";
import { Subject } from "rxjs";
import { environment } from 'environments/environment';

@Component({
    selector       : 'fees',
    templateUrl    : './fees.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeesComponent implements OnInit, OnDestroy
{

    feesForm: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    code:Number=0;

    constructor(
        private _feesService: FeesService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute
    )
    {
    }
   
    ngOnInit(): void     
    {
        this.code = this._activatedRoute.params['_value'].code;
        this.feesForm = this._formBuilder.group({
           
            name : ['', [Validators.required]],
            phoneNumber : ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email,
                        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            cardNumber   : ['', [Validators.required]],
            expairyDate : ['', Validators.required],
            cardCVC: ['', Validators.required],
            agreements: ['', Validators.required],
        })
    }

    proceedToPay():void{
        document.location.href = environment.safexpayEndPoint+'transaction/payments.php?app_id='+this.code;
    }

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

     keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
   
}