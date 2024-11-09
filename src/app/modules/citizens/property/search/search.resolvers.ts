import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchPropertyService } from 'app/modules/citizens/property/search/search.service';

@Injectable({
    providedIn: 'root'
})
export class SearchPropertyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _searchPropertyService: SearchPropertyService)
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
        return this._searchPropertyService.getData();
    }
}
