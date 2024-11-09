import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CitizensHeirshipNewTransferModule } from './add-new.module';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
}) 
export class NewHeirshipTransferDetailsService
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
    
    postData(data:CitizensHeirshipNewTransferModule,docData:any): Observable<any> {
        data['documentData'] = docData;
        /*
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'multipart/form-data')
        .set('Cache-Control', 'no-cache'); 
        let options = {
            headers: httpHeaders
       }; */
        let url = this.apiEndPoint + 'citizens/save-heirship-application';
        return this._httpClient.post(url, data);
    }

    submitApplication(data:any,docData:any,heirship_application_id): Observable<any> {
        data['documentData'] = docData;
        data['heirship_application_id'] = heirship_application_id;
        console.log(data);
        let url = this.apiEndPoint + 'citizens/hpa-submit-application';
        return this._httpClient.post(url, data);
    }

}
