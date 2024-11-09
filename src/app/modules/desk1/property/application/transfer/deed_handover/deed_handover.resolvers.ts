import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DeedHandoverService } from 'app/modules/desk1/property/application/transfer/deed_handover/deed_handover.service';

@Injectable({
    providedIn: 'root'
})
export class DeedHandoverResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _deed_handoverService: DeedHandoverService)
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
        return this._deed_handoverService.getData();
    }
}
