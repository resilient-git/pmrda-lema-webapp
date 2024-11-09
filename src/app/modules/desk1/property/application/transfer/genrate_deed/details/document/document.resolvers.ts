import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyTransferDocumentService } from 'app/modules/desk1/property/application/transfer/genrate_deed/details/document/document.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyTransferDocumentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyTransferDocumentService: ViewPropertyTransferDocumentService)
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
        return this._viewPropertyTransferDocumentService.getData();
    }
}
