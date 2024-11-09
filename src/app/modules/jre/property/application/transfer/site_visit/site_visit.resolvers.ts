import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SiteVisitService } from 'app/modules/jre/property/application/transfer/site_visit/site_visit.service';

@Injectable({
    providedIn: 'root'
})
export class SiteVisitResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _site_visitService: SiteVisitService)
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
        return this._site_visitService.getData();
    }
}
