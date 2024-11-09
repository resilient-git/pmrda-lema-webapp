import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root'
}) 
export class FileCloseService
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

    getFileCloseDesk1(): Observable<any>
    {
        let url = this.apiEndPoint + 'desk1/banknoc-applications/application-close-pending';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                console.log(response)
                this._data.next(response);
            })
        );
    }

    getFileCloseDesk11(code): Observable<any>
    {
        
        let url = this.apiEndPoint + 'properties/list';
       // let url = this.apiEndPoint + 'desk1/transfer-applications/'+code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
                
            })
        )
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