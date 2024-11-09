import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailService } from 'app/modules/desk1/settings/email/email.service';

@Injectable({
    providedIn: 'root'
})
export class EmailResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _emailService: EmailService)
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
        return this._emailService.getData();
    }
}
