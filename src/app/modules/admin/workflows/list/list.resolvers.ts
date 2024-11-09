import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkflowsListService } from 'app/modules/admin/workflows/list/list.service';

@Injectable({
    providedIn: 'root'
})
export class WorkFlowsListResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _listService: WorkflowsListService)
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
        return this._listService.getData();
    }
}
