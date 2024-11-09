import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectBankNocService } from './select.service';

@Injectable({
    providedIn: 'root'
})
export class SelectBankNocResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _newBankNocService: SelectBankNocService)
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
        return this._newBankNocService.getData();
    }
}
