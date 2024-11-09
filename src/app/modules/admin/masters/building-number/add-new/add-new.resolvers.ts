import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddNewService } from 'app/modules/admin/masters/building-number/add-new/add-new.service';

@Injectable({
    providedIn: 'root'
})
export class AddNewResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _addnewService: AddNewService)
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
        return this._addnewService.getData();
    }
}
