import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MastersVillagesListModule } from '../list/list.module';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
}) 
export class AddNewService
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
        let url = this.apiEndPoint + 'talukas/list';
         return this._httpClient.get(url).pipe(
             tap((response: any) => {
                 this._data.next(response);
             })
         );
     }

     postData(data: MastersVillagesListModule): Observable<any> {
        let url = this.apiEndPoint + 'villages/add';
        return this._httpClient.post(url, data);
    }
}
