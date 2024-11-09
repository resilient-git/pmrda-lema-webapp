import { Route } from "@angular/router";
import { CertificateComponent } from 'app/modules/joint-commissioner/property/application/heirship/certificate/certificate.component';
import { CertificateResolver } from 'app/modules/joint-commissioner/property/application/heirship/certificate/certificate.resolvers';


export const CertificateRoutes: Route[] = [
    {
        path     : '',
        component: CertificateComponent,
        resolve  : {
            data: CertificateResolver
        }
    }
];