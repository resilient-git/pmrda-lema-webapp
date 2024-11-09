import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNocTransferApplicationService } from 'app/modules/tahsildar/property/application/banknoc/verification/details/application/application.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNocTransferApplicationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNocTransferApplicationService: ViewBankNocTransferApplicationService)
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
        return this._viewBankNocTransferApplicationService.getData();
    }
}
