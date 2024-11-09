import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPropertyService } from 'app/modules/citizens/property/add-new/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewPropertyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _newPropertyService: NewPropertyService)
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
        return this._newPropertyService.getData();
    }
}
