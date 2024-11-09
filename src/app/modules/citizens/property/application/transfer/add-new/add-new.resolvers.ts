import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPropertyTransferDetailsService } from 'app/modules/citizens/property/application/transfer/add-new/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewPropertyTransferDetailsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _NewPropertyTransferDetailsService: NewPropertyTransferDetailsService)
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
        return this._NewPropertyTransferDetailsService.getData();
    }
}
