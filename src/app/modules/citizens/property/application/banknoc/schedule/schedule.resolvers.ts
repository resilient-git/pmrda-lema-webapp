import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ScheduleBankNocTransferService } from './schedule.service';

@Injectable({
    providedIn: 'root'
})
export class ScheduleBankNocTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _ScheduleBankNocTransferService: ScheduleBankNocTransferService)
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
        return this._ScheduleBankNocTransferService.getData();
    }
}
