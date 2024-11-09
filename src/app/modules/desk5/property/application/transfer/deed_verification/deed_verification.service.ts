import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root'
}) 
export class DeedVerificationService
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
        return;
    }

    getDeedVerificationDesk5(): Observable<any>
    {
        let url = this.apiEndPoint + 'desk5/transfer-applications/deed-verify-pending';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                console.log(response)
                this._data.next(response);
            })
        );
    }

    getDeedVerificationDesk51(code): Observable<any>
    {
        
        let url = this.apiEndPoint + 'properties/list';
       // let url = this.apiEndPoint + 'desk5/transfer-applications/'+code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
                
            })
        )
    }

    approveDesk5(data:any): Observable<any> {
        let url = this.apiEndPoint + 'desk5/approve-application';
        return this._httpClient.post(url, data);
    }
    rejectDesk5(data:any): Observable<any> {
        let url = this.apiEndPoint + 'desk5/reject-application';
        return this._httpClient.post(url, data);
    }
   
    
}