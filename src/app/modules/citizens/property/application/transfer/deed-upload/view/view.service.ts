import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root'
}) 
export class ViewService
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
  

    getTransferApplicationDeedDraft(app_id): Observable<any>
    {
        let url = this.apiEndPoint + 'transfer-application/get-deed-draft/'+app_id;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    deedUplod(formData:any,docData): Observable<any> {
        formData['documentData'] = docData;
        let url = this.apiEndPoint + 'citizens/uplod-certified-deed';
        return this._httpClient.post(url, formData);
    }
}