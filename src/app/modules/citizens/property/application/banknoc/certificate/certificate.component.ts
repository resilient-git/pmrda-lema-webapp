import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation,ChangeDetectorRef,  HostBinding, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseAlertType } from "@fuse/components/alert";
import { BehaviorSubject, Subject } from "rxjs";
import { CitizensCertificatePropertyTransferModule } from "./certificate.module";
import { CertificatePropertyTransferService } from "./certificate.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
@Component({
    selector: 'certificate-property',
    templateUrl: './certificate.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CertificatePropertyTransferComponent implements OnInit, OnDestroy {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<CitizensCertificatePropertyTransferModule>;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    displayedColumns: string[] = ['uprn','owner_details', 'created_at',
    'status_text'];
    dataSource: MatTableDataSource<CitizensCertificatePropertyTransferModule> = new MatTableDataSource([]);

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    booked_date:string;
    date_of_oppintment:string;
    application_id: number;

    /**
     * Constructor
     */
    constructor(
        private _certificatePropertyTransferService: CertificatePropertyTransferService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
      applyFilter1(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    /**
     * On init
     */
    ngOnInit(): void {
        let user_id = JSON.parse(localStorage.getItem('currentUser')).id;
        
        this._certificatePropertyTransferService.getCertificates(user_id)
            .subscribe(() => {
                if (this._certificatePropertyTransferService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._certificatePropertyTransferService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.dataSource.data = this._certificatePropertyTransferService.data$.source['_value'].data;
                     
                }
            })

        //   this.user_id = JSON.parse(localStorage.getItem('currentUser')).id; 

    }
    bookConfirm(code,dday,ddate){
        this.booked_date = code;
        this.date_of_oppintment=dday+', '+ddate;
    }
    bookNow() {
        let user_id = JSON.parse(localStorage.getItem('currentUser')).id;

        //this._router.navigateByUrl('/citizens/booking-done');
        this._certificatePropertyTransferService.bookSlots({transfer_application_id: this.application_id, booked_date: this.booked_date,user_id:user_id}).subscribe((response) => {
             console.log(response);
            if (response.status != 200) {
               // Set the alert
               this.alert = {
                 type: 'error',
                 message: response.response
               };

               // Show the alert
               this.showAlert = true;
             } else {
               //this._router.navigateByUrl('/citizens/booking-done');
               this._router.navigateByUrl('/citizens/tpa-booking-done/'+this.date_of_oppintment);
             }
           });

    }
    /**
    * On destroy
    */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}