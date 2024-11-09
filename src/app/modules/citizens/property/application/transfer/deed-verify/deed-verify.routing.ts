import { Route } from '@angular/router';
import { DeedVerifyPropertyTransferComponent } from 'app/modules/citizens/property/application/transfer/deed-verify/deed-verify.component';
import { DeedVerifyPropertyTransferResolver } from 'app/modules/citizens/property/application/transfer/deed-verify/deed-verify.resolvers';

export const DeedVerifyPropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: DeedVerifyPropertyTransferComponent,
        resolve  : {
            data: DeedVerifyPropertyTransferResolver
        }
    }
];
