import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import { AddPropertyOwnerModule } from './add-new.module';
import { MastersService } from '../../masters/masters.service';
import { PropertiesOwnerListModule } from '../list/list.module';
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
    constructor(private _httpClient: HttpClient, private _masterService:MastersService)
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
    

    getPropertieOwner(code): Observable<any>
    {
        let url = this.apiEndPoint + 'property-owners/list' +code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        )
    }

    postData(data:PropertiesOwnerListModule): Observable<any> {
        data.transfer_date =  this._masterService.custDateFormat(data.transfer_date);
        let url = this.apiEndPoint + 'properties/add-owner';
        return this._httpClient.post(url, data);
    }

}
