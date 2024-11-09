import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyTransferService } from 'app/modules/citizens/property/application/transfer/list-old/list.service';
import { CertificatePropertyTransferService } from 'app/modules/citizens/property/application/transfer/certificate/certificate.service';

@Injectable({
    providedIn: 'root'
})
export class CertificatePropertyTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _CertificatePropertyTransferService: CertificatePropertyTransferService)
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
        return this._CertificatePropertyTransferService.getData();
    }
}
