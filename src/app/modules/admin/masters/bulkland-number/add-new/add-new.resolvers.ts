import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddNewService } from 'app/modules/admin/masters/bulkland-number/add-new/add-new.service';
import { MastersService } from '../../masters.service';

@Injectable({
    providedIn: 'root'
})
export class AddNewResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _addnewService: AddNewService,
        private _mastersService: MastersService,)
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
        return this._mastersService.getTalukaData();
    }
}
