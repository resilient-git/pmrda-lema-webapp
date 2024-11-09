import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyHeirshipApplicationService } from 'app/modules/financial-controller/property/application/heirship/certificate/details/application/application.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyHeirshipApplicationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyHeirshipApplicationService: ViewPropertyHeirshipApplicationService)
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
        return this._viewPropertyHeirshipApplicationService.getData();
    }
}