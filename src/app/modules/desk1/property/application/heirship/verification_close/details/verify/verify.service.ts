import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ViewPropertyHeirshipVerifyConfirmModule } from './verify.module';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
}) 
export class ViewPropertyHeirshipVerifyService
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
    
    postData(data:any,docData:any,heirship_verify_id): Observable<any> {
        data['verifyData'] = docData;
        data['heirship_verify_id'] = heirship_verify_id;
        /*
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'multipart/form-data')
        .set('Cache-Control', 'no-cache'); 
        let options = {
            headers: httpHeaders
       }; */
        //let url = this.apiEndPoint + 'citizens/save-heirship-verify';
        let url = this.apiEndPoint + 'citizens/add-new-heirship-verify';
        return this._httpClient.post(url, data);
    }

    submitVerify(data:any,docData:any,heirship_verify_id): Observable<any> {
        data['verifyData'] = docData;
        data['heirship_verify_id'] = heirship_verify_id;
        let url = this.apiEndPoint + 'citizens/tpa-submit-verify';
        return this._httpClient.post(url, data);
    }

    approveDesk1(data:any): Observable<any> {
        let url = this.apiEndPoint + 'desk1/approve-application';
        return this._httpClient.post(url, data);
    }
    rejectDesk1(data:any): Observable<any> {
        let url = this.apiEndPoint + 'desk1/reject-application';
        return this._httpClient.post(url, data);
    }
}
