import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectPropertyService } from 'app/modules/citizens/property/application/transfer/select/select.service';

@Injectable({
    providedIn: 'root'
})
export class SelectPropertyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _newPropertyService: SelectPropertyService)
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
