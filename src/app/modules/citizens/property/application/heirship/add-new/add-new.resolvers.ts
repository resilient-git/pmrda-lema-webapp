import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewHeirshipTransferDetailsService } from 'app/modules/citizens/property/application/heirship/add-new/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewHeirshipTransferDetailsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _NewHeirshipTransferDetailsService: NewHeirshipTransferDetailsService)
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
        return this._NewHeirshipTransferDetailsService.getData();
    }
}
