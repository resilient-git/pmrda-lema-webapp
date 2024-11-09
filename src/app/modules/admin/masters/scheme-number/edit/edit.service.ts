import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MastersSchemeNumberListModule } from '../list/list.module';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
}) 
export class EditService
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

    getSchemes(code): Observable<any>
    {
        let url = this.apiEndPoint + 'schemes/by-code/'+code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    postData(data: MastersSchemeNumberListModule): Observable<any> {
        let url = this.apiEndPoint + 'schemes/update';
        return this._httpClient.post(url, data);
    }
}