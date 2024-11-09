import { Route } from "@angular/router";
import { CalculationComponent } from 'app/modules/tahsildar/property/application/transfer/calculation/calculation.component';
import { CalculationResolver } from 'app/modules/tahsildar/property/application/transfer/calculation/calculation.resolvers';


export const CalculationRoutes: Route[] = [
    {
        path     : '',
        component: CalculationComponent,
        resolve  : {
            data: CalculationResolver
        }
    }
];