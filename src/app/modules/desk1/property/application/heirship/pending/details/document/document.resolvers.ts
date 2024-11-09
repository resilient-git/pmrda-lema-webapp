import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewHeirshipTransferDocumentService } from './document.service';

@Injectable({
    providedIn: 'root'
})
export class ViewHeirshipTransferDocumentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewHeirshipTransferDocumentService: ViewHeirshipTransferDocumentService)
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
        return this._viewHeirshipTransferDocumentService.getData();
    }
}
