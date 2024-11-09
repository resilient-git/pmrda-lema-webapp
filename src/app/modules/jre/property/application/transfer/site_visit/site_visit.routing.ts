import { Route } from "@angular/router";
import { SiteVisitComponent } from 'app/modules/jre/property/application/transfer/site_visit/site_visit.component';
import { SiteVisitResolver } from 'app/modules/jre/property/application/transfer/site_visit/site_visit.resolvers';


export const SiteVisitRoutes: Route[] = [
    {
        path     : '',
        component: SiteVisitComponent,
        resolve  : {
            data: SiteVisitResolver
        }
    }
];