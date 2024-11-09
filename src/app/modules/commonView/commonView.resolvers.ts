import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { commonViewService} from './commonView.service';

@Injectable({
    providedIn: 'root'
})
export class commonViewResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _commonViewService: commonViewService)
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
        return this._commonViewService.getData();
    }
}
