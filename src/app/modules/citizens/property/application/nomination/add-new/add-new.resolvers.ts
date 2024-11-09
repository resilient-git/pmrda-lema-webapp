import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPropertyNominationService } from 'app/modules/citizens/property/application/nomination/add-new/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewPropertyNominationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _NewPropertyNominationService: NewPropertyNominationService)
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
        return this._NewPropertyNominationService.getData();
    }
}
