import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TypeOfStructureListService } from 'app/modules/admin/masters/type-of-structure/list/list.service';

@Injectable({
    providedIn: 'root'
})
export class TypeOfStructureListResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _typeOfStructureService: TypeOfStructureListService)
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
        return this._typeOfStructureService.getData();
    }
}
