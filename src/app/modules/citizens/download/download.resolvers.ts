import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DownloadService } from 'app/modules/citizens/download/download.service';

@Injectable({
    providedIn: 'root'
})
export class DownloadResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _downloadService: DownloadService)
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
        return this._downloadService.getData();
    }
}
