import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewBankNocTransferDetailsService } from './add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewBankNocTransferDetailsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _NewBankNocTransferDetailsService: NewBankNocTransferDetailsService)
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
        return this._NewBankNocTransferDetailsService.getData();
    }
}
