import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPropertyTransferService } from 'app/modules/citizens/property/application/transfer/add-new-old/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class NewPropertyTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _NewPropertyTransferService: NewPropertyTransferService)
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
        return this._NewPropertyTransferService.getData();
    }
}
