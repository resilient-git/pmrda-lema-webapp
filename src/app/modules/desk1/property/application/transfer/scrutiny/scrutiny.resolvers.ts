import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ScrutinyService } from 'app/modules/desk1/property/application/transfer/scrutiny/scrutiny.service';

@Injectable({
    providedIn: 'root'
})
export class ScrutinyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _scrutinyService: ScrutinyService)
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
        return this._scrutinyService.getData();
    }
}
