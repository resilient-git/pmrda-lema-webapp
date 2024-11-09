import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CitizensBankNocNewTransferModule } from './add-new.module';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
}) 
export class NewBankNocTransferDetailsService
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
    
    submitApplication(data:CitizensBankNocNewTransferModule,docData:any,banknoc_application_id): Observable<any> {
        data['documentData'] = docData;
        data['banknoc_application_id'] = banknoc_application_id;
       
        let url = this.apiEndPoint + 'citizens/add-new-banknoc-application';
        return this._httpClient.post(url, data);
    }
}
