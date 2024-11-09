import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MastersBulkLandNumberAddNewModule } from './add-new.module';
import { MastersService } from '../../masters.service';
import { MastersBulkLandNumberListModule } from '../list/list.module';
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
    constructor(private _httpClient: HttpClient,private _masterService: MastersService)
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
     postData(data: MastersBulkLandNumberListModule): Observable<any> {
       
        if(data.date_of_award)
            data.date_of_award =  this._masterService.custDateFormat(data.date_of_award);
        if(data.date_of_possession)
            data.date_of_possession =  this._masterService.custDateFormat(data.date_of_possession);
        //console.log(data);
        let url = this.apiEndPoint + 'gpsc/add';
        return this._httpClient.post(url, data);
    }

}
