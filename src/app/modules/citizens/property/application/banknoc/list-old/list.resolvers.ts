import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListBankNocTransferService } from './list.service';

@Injectable({
    providedIn: 'root'
})
export class ListBankNocTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _ListBankNocTransferService: ListBankNocTransferService)
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
        return this._ListBankNocTransferService.getData();
    }
}
