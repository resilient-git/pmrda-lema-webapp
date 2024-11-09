import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyTransferService } from 'app/modules/citizens/property/application/transfer/list-old/list.service';
import { DeedVerifyPropertyTransferService } from 'app/modules/citizens/property/application/transfer/deed-verify/deed-verify.service';

@Injectable({
    providedIn: 'root'
})
export class DeedVerifyPropertyTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _DeedVerifyPropertyTransferService: DeedVerifyPropertyTransferService)
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
        return this._DeedVerifyPropertyTransferService.getData();
    }
}
