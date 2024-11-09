import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyNominationService } from 'app/modules/citizens/property/application/nomination/list/list.service';

@Injectable({
    providedIn: 'root'
})
export class ListPropertyNominationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _ListPropertyNominationService: ListPropertyNominationService)
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
        return this._ListPropertyNominationService.getData();
    }
}
