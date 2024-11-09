import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RejectedBankNocService } from 'app/modules/desk1/property/application/banknoc/rejected/rejected.service';

@Injectable({
    providedIn: 'root'
})
export class RejectedResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _rejectedBankNocService: RejectedBankNocService)
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
        return this._rejectedBankNocService.getData();
    }
}
