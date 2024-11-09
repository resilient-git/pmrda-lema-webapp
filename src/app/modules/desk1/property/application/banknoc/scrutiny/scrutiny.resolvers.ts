import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ScrutinyBankNocService } from 'app/modules/desk1/property/application/banknoc/scrutiny/scrutiny.service';

@Injectable({
    providedIn: 'root'
})
export class ScrutinyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _scrutinyBankNocService: ScrutinyBankNocService)
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
        return this._scrutinyBankNocService.getData();
    }
}
