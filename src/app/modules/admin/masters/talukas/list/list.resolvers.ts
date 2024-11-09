import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TalukasListService } from 'app/modules/admin/masters/talukas/list/list.service';

@Injectable({
    providedIn: 'root'
})
export class TalukasListResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _listService: TalukasListService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._listService.getData();
    }
}
