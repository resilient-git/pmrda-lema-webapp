import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root'
}) 
export class RejectedBankNocService
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

    getRejectedDesk1(): Observable<any>
    {
        let url = this.apiEndPoint + 'desk1/transfer-rejected';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                console.log(response)
                this._data.next(response);
            })
        );
    }

    getRejectedDesk111(code): Observable<any>
    {
        
        let url = this.apiEndPoint + 'properties/list';
       // let url = this.apiEndPoint + 'desk1/transfer-applications/'+code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        )
    }
   
    
}
