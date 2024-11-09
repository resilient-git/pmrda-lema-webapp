import { Route } from "@angular/router";
import { CertificateComponent } from 'app/modules/jre/property/application/transfer/certificate/certificate.component';
import { CertificateResolver } from 'app/modules/jre/property/application/transfer/certificate/certificate.resolvers';


export const CertificateRoutes: Route[] = [
    {
        path     : '',
        component: CertificateComponent,
        resolve  : {
            data: CertificateResolver
        }
    }
];