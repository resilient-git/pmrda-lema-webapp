import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ViewPropertyHeirshipActionModule } from './action.module';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
}) 
export class ViewPropertyHeirshipActionService
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
    
    postData(data:any,docData:any,heirship_action_id): Observable<any> {
        data['actionData'] = docData;
        data['heirship_action_id'] = heirship_action_id;
        /*
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'multipart/form-data')
        .set('Cache-Control', 'no-cache'); 
        let options = {
            headers: httpHeaders
       }; */
        //let url = this.apiEndPoint + 'citizens/save-heirship-action';
        let url = this.apiEndPoint + 'citizens/add-new-heirship-action';
        return this._httpClient.post(url, data);
    }

    submitAction(data:any,docData:any,heirship_action_id): Observable<any> {
        data['actionData'] = docData;
        data['heirship_action_id'] = heirship_action_id;
        let url = this.apiEndPoint + 'citizens/tpa-submit-action';
        return this._httpClient.post(url, data);
    }

    approveDyCommissioner(data:any): Observable<any> {
        let url = this.apiEndPoint + 'dy-commissioner/verify-deed-certificate';
        return this._httpClient.post(url, data);
    }
    rejectDyCommissioner(data:any): Observable<any> {
        let url = this.apiEndPoint + 'dy-commissioner/reject-application';
        return this._httpClient.post(url, data);
    }
}
