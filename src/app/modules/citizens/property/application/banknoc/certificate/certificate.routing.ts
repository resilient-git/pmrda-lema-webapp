import { Route } from '@angular/router';
import { CertificatePropertyTransferComponent } from './certificate.component';
import { CertificatePropertyTransferResolver } from './certificate.resolvers';

export const CertificatePropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: CertificatePropertyTransferComponent,
        resolve  : {
            data: CertificatePropertyTransferResolver
        }
    }
];
