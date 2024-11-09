import { Route } from "@angular/router";
import { CertificateComponent } from 'app/modules/desk5/property/application/transfer/certificate/certificate.component';
import { CertificateResolver } from 'app/modules/desk5/property/application/transfer/certificate/certificate.resolvers';


export const CertificateRoutes: Route[] = [
    {
        path     : '',
        component: CertificateComponent,
        resolve  : {
            data: CertificateResolver
        }
    }
];