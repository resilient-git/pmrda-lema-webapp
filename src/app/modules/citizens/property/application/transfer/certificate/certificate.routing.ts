import { Route } from '@angular/router';
import { CertificatePropertyTransferComponent } from 'app/modules/citizens/property/application/transfer/certificate/certificate.component';
import { CertificatePropertyTransferResolver } from 'app/modules/citizens/property/application/transfer/certificate/certificate.resolvers';

export const CertificatePropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: CertificatePropertyTransferComponent,
        resolve  : {
            data: CertificatePropertyTransferResolver
        }
    }
];
