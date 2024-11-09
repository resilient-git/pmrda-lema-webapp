import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FileCloseService } from 'app/modules/desk1/property/application/transfer/file_close/file_close.service';

@Injectable({
    providedIn: 'root'
})
export class FileCloseResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _file_closeService: FileCloseService)
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
        return this._file_closeService.getData();
    }
}
