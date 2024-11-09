import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteService } from 'app/modules/admin/properties/delete/delete.service';

@Injectable({
    providedIn: 'root'
})
export class DeleteResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _deleteService: DeleteService)
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
        return this._deleteService.getData();
    }
}
