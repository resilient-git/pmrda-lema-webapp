import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CertificateService } from 'app/modules/joint-commissioner/property/application/transfer/certificate/certificate.service';

@Injectable({
    providedIn: 'root'
})
export class CertificateResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _certificateService: CertificateService)
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
        return this._certificateService.getData();
    }
}
