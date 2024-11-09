import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectHeirshipService } from 'app/modules/citizens/property/application/heirship/select/select.service';

@Injectable({
    providedIn: 'root'
})
export class SelectHeirshipResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _newHeirshipService: SelectHeirshipService)
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
        return this._newHeirshipService.getData();
    }
}
