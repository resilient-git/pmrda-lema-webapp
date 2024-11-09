import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyNocService } from 'app/modules/citizens/property/application/noc/list/list.service';

@Injectable({
    providedIn: 'root'
})
export class ListPropertyNocResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _ListPropertyNocService: ListPropertyNocService)
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
        return this._ListPropertyNocService.getData();
    }
}
