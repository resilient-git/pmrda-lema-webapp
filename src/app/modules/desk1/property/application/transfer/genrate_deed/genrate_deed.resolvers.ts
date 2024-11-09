import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DeedGenrateService } from 'app/modules/desk1/property/application/transfer/genrate_deed/genrate_deed.service';

@Injectable({
    providedIn: 'root'
})
export class DeedGenrateResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _genrate_deedService: DeedGenrateService)
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
        return this._genrate_deedService.getData();
    }
}
