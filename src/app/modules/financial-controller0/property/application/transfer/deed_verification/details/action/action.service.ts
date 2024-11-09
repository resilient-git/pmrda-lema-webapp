import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ViewPropertyTransferActionModule } from './action.module';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
}) 
export class ViewPropertyTransferActionService
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
    
    postData(data:any,docData:any,transfer_action_id): Observable<any> {
        data['actionData'] = docData;
        data['transfer_action_id'] = transfer_action_id;
        /*
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'multipart/form-data')
        .set('Cache-Control', 'no-cache'); 
        let options = {
            headers: httpHeaders
       }; */
        //let url = this.apiEndPoint + 'citizens/save-transfer-action';
        let url = this.apiEndPoint + 'citizens/add-new-transfer-action';
        return this._httpClient.post(url, data);
    }

    submitAction(data:any,docData:any,transfer_action_id): Observable<any> {
        data['actionData'] = docData;
        data['transfer_action_id'] = transfer_action_id;
        let url = this.apiEndPoint + 'citizens/tpa-submit-action';
        return this._httpClient.post(url, data);
    }

    approveFinancialController(data:any): Observable<any> {
        let url = this.apiEndPoint + 'financial-controller/approve-deed';
        return this._httpClient.post(url, data);
    }
    rejectFinancialController(data:any): Observable<any> {
        let url = this.apiEndPoint + 'financial-controller/reject-application';
        return this._httpClient.post(url, data);
    }
}
