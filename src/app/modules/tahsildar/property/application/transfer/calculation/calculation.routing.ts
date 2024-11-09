import { Route } from "@angular/router";
import { TahsildarCalculationComponent } from 'app/modules/tahsildar/property/application/transfer/calculation/calculation.component';
import { CalculationResolver } from 'app/modules/tahsildar/property/application/transfer/calculation/calculation.resolvers';


export const CalculationRoutes: Route[] = [
    {
        path     : '',
        component: TahsildarCalculationComponent,
        resolve  : {
            data: CalculationResolver
        }
    }
];