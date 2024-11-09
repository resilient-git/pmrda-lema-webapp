import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { users as usersData } from 'app/mock-api/common/users/data';

@Injectable({
    providedIn: 'root'
})
export class UsersMockApi
{
    private _users: any = usersData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        
        this.getUserData();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    
     getUserData() {
        this._fuseMockApiService.onGet('api/common/users')
        .reply(() => [200, cloneDeep(JSON.parse(localStorage.getItem('currentUsers')))]);
       }



       
       
}
