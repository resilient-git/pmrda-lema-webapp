import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PropertiesListModule } from '../list/list.module';
import { MastersService } from '../../masters/masters.service';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
}) 
export class NewPropertyService
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

    postData(data: PropertiesListModule): Observable<any> {
        data.award_date =  this._masterService.custDateFormat(data.award_date);
        data.award_land_possession_date=  this._masterService.custDateFormat(data.award_land_possession_date);
        data.leasedeed_registration_date =  this._masterService.custDateFormat(data.leasedeed_registration_date);
        data.building_permission_date =  this._masterService.custDateFormat(data.building_permission_date);
        data.completion_date =  this._masterService.custDateFormat(data.completion_date);
        console.log(data);
        let url = this.apiEndPoint + 'properties/add';
        return this._httpClient.post(url, data);
    }

}
