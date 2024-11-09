import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyService}from 'app/modules/citizens/property/list-old/list.service';

@Injectable({
    providedIn: 'root'
})
export class ListPropertyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _listPropertyService: ListPropertyService)
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
        return this._listPropertyService.getData();
    }
}
