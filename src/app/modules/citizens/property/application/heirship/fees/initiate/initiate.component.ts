import { ChangeDetectionStrategy, ViewChild, Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from "@angular/router";
import { InitiateService } from "app/modules/citizens/property/application/heirship/fees/initiate/initiate.service";
import { Subject } from "rxjs";
import { environment } from 'environments/environment';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
    selector       : 'initiate',
    templateUrl    : './initiate.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitiateComponent implements OnInit, OnDestroy
{

    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;

    initiateForm: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    code:Number=0;

    feeCode:Number=102;
    addHeirCode:Number=301;
    removeHeirCode:Number=302;

    
    feeAmount:Number=0;
    addHeirAmount:Number=0;
    removeHeirAmount:Number=0;
    totalAmount:Number=0;

    amount:number=0;
    baseURL:string='';
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    constructor(
        private _initiateService: InitiateService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute
    )
    {
    }
   
    ngOnInit(): void     
    {
        this.baseURL = environment.baseURL;

        this.code = this._activatedRoute.params['_value'].code;
    /*
    feeAmount:Number=0;
    addHeirAmount:Number=0;
    removeHeirAmount:Number=0;*/
        this._initiateService.getAmount(this.code,this.feeCode,this.addHeirCode,this.removeHeirCode)
        .subscribe(() => {
            if (this._initiateService.data$.source['_value'].status != 200) {
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._initiateService.data$.source['_value'].response
                };

                // Show the alert
                this.showAlert = true;
            } else {
                //this.amount = this._initiateService.data$.source['_value'].data.amount;
                let data = this._initiateService.data$.source['_value'].data;
                //console.log(data);
                this.feeAmount = data[102];
                this.addHeirAmount = data[301];
                this.removeHeirAmount = data[302];
                this.totalAmount = data['total'];

                let el: HTMLElement = this.myDiv.nativeElement;
                el.click();
                
            }
        });

        this.initiateForm = this._formBuilder.group({
           
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

    dummyBinding(){
        //console.log("bachaoooooooooooooooooooooo")
    }
    proceedToPay():void{
        
        let data = {'app_id': this.code,    
                    'amount': this.totalAmount
        };
        let raw_info = btoa(JSON.stringify(data));
        //this.form.ngSubmit.emit();
        //this.initiateForm.formName.submit();
        //document.location.href = environment.safexpayEndPoint+'transaction/payments.php?app_id='+this.code;
        document.location.href =this.baseURL+'ccav/ht_fee_requester.php?raw_info='+raw_info;
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