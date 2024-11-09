import { ChangeDetectionStrategy, Component, OnDestroy, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from "@angular/router";
import { InitiateService } from "app/modules/citizens/property/application/transfer/deed-data-entry/initiate/initiate.service";
import { Subject } from "rxjs";
import { environment } from 'environments/environment';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
    selector       : 'initiate',
    templateUrl    : './initiate.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitiateComponent implements  OnInit, OnDestroy
{
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
    initiateForm: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    code:Number=0;
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
       // this.ptcode = this._activatedRoute.params['_value'].ptcode;
        

        this._initiateService.getAmount(this.code)
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
                this.amount = this._initiateService.data$.source['_value'].transfer_fee;
                console.log(this.amount);
                let el: HTMLElement = this.myDiv.nativeElement;
                el.click();
                
            }
        });

        this.initiateForm = this._formBuilder.group({
            agreements: ['', Validators.required],
            amount1:[this.amount]
        });



        
        
    }

    dummyBinding(){
        //console.log("bachaoooooooooooooooooooooo")
    }
    proceedToPay():void{
        
        let data = {'app_id': this.code,    
                    'amount': this.amount
        };
        let raw_info = btoa(JSON.stringify(data));
        //this.form.ngSubmit.emit();
        //this.initiateForm.formName.submit();
        //document.location.href = environment.safexpayEndPoint+'transaction/payments.php?app_id='+this.code;
        document.location.href =this.baseURL+'ccav/tp_deed_data_entry_requester.php?raw_info='+raw_info;
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