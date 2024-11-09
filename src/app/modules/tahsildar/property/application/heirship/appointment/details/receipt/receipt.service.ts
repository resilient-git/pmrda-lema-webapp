import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ViewPropertyHeirshipReceiptModule } from './receipt.module';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
}) 
export class ViewPropertyHeirshipReceiptService
{
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private apiEndPoint:string="";

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
        this.apiEndPoint = environment.apiEndPoint;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any>
    {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any>
    {
        return this._httpClient.get('api/dashboards/project').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    
    postData(data:any,docData:any,heirship_receipt_id): Observable<any> {
        data['receiptData'] = docData;
        data['heirship_receipt_id'] = heirship_receipt_id;
        /*
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'multipart/form-data')
        .set('Cache-Control', 'no-cache'); 
        let options = {
            headers: httpHeaders
       }; */
        //let url = this.apiEndPoint + 'citizens/save-heirship-receipt';
        let url = this.apiEndPoint + 'citizens/add-new-heirship-receipt';
        return this._httpClient.post(url, data);
    }

    submitReceipt(data:any,docData:any,heirship_receipt_id): Observable<any> {
        data['receiptData'] = docData;
        data['heirship_receipt_id'] = heirship_receipt_id;
        let url = this.apiEndPoint + 'citizens/tpa-submit-receipt';
        return this._httpClient.post(url, data);
    }
}
