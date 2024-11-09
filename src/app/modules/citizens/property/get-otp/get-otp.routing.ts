import { Route } from '@angular/router';
import { GetOtpComponent } from 'app/modules/citizens/property/get-otp/get-otp.component';
import { GetOtpResolver } from 'app/modules/citizens/property/get-otp/get-otp.resolvers';


export const GetOtpRoutes: Route[] = [
    {
        path     : '',
        component:  GetOtpComponent,
        resolve  : {
            data:  GetOtpResolver
        }
    }
];
