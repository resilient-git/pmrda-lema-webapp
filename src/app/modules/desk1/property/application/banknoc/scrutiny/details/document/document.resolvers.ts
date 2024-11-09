import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNoCDocumentService } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/document/document.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNoCDocumentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNoCDocumentService: ViewBankNoCDocumentService)
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
        return this._viewBankNoCDocumentService.getData();
    }
}
