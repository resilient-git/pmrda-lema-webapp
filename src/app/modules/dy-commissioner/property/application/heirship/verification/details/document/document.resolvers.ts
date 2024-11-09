import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyHeirshipDocumentService } from 'app/modules/dy-commissioner/property/application/heirship/verification/details/document/document.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyHeirshipDocumentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyHeirshipDocumentService: ViewPropertyHeirshipDocumentService)
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
        return this._viewPropertyHeirshipDocumentService.getData();
    }
}
