import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPropertyNocService } from 'app/modules/citizens/property/application/noc/add-new/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewPropertyNocResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _NewPropertyNocService: NewPropertyNocService)
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
        return this._NewPropertyNocService.getData();
    }
}
