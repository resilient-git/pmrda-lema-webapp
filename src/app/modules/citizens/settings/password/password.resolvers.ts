import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PasswordService } from 'app/modules/citizens/settings/password/password.service';

@Injectable({
    providedIn: 'root'
})
export class PasswordResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _passwordService: PasswordService)
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
        return this._passwordService.getData();
    }
}
