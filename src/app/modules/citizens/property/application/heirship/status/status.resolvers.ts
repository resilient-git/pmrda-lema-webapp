import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TransferStatusService } from 'app/modules/citizens/property/application/heirship/status/status.service';

@Injectable({
    providedIn: 'root'
})
export class TransferStatusResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _transferStatusService: TransferStatusService)
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
        return this._transferStatusService.getData();
    }
}
