import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { CommonViewComponent } from './commonView.component';
import { CommonViewRoutes } from './commonView.routing';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        CommonViewComponent
    ],
    imports     : [
        RouterModule.forChild(CommonViewRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTableModule,
        // MatTableDataSource
    ],
    schemas:[NO_ERRORS_SCHEMA]
})
export class CommonViewRoutesModule
{   
    id:string;
    first_name:string;
    middle_name:string;
    last_name:string;
    email:string;
    mobile:string;
}
