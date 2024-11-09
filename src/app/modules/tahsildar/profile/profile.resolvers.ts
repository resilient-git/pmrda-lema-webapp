import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from 'app/modules/tahsildar/profile/profile.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _profileService: ProfileService)
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
        return this._profileService.getData();
    }
}
