import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ListService } from 'app/modules/admin/properties/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { EditPropertyComponent } from "app/modules/admin/properties/edit/edit.component";
import { ViewPropertyComponent } from "app/modules/admin/properties/view/view.component";
import { DeleteComponent } from "app/modules/admin/properties/delete/delete.component";
import { MatAccordion, MatExpansionPanel } from "@angular/material/expansion";
import { MastersService } from "../../masters/masters.service";
import { FuseAlertType } from "@fuse/components/alert";
import { PropertiesListModule } from "./list.module";
import { FuseConfirmationService } from "@fuse/services/confirmation";
import { EditService } from '../../masters/bulkland-number/edit/edit.service';


@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {

    displayedColumns: string[] = ['property_area',
        'award_number',
        'original_plot_holder', 'shop_premium', 'ready_reckoner_square_meter_rate',
        'building_permission_number', 'completion_certificate_number',
        'actions'];//'taluka_code','taluka','village_code','village','gpsc_code', 'scheme_code','structure_type','society_name',

    talukaData: any;
    villageData: any;
    gpscData: any;
    schemesData: any;
    schemeStructureData: any;
    societyData: any;
    buildingData: any;
    sadnikaData: any;
    isData: boolean = false;
    isData$ = new BehaviorSubject<boolean>(this.isData);
    plotData = new BehaviorSubject<any>([]);
    selectedGpsc:any;
    isSadnikaSelected:any;
    
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    dataSource: MatTableDataSource<PropertiesListModule> = new MatTableDataSource([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<PropertiesListModule>;

    @ViewChild(MatAccordion) accordion: MatAccordion;
    @ViewChild('first') first: MatExpansionPanel;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    horizontalStepperForm: FormGroup;
    searchByOwnerForm:FormGroup;

    url = [];
    dialogRef: any;

    /**
     * Constructor
     */
    constructor(
        private _listService: ListService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _matDialog: MatDialog,
        private _masterService: MastersService,
        private _fuseConfirmationService: FuseConfirmationService,
        private _editGPSCService: EditService
    ) {

    }

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
    
        this.horizontalStepperForm = this._formBuilder.group({
            taluka_code: ['', Validators.required],
            village_code: ['', Validators.required],
            gpsc_code: ['', Validators.required],
            scheme_code: ['', Validators.required],
            structure_code: ['', Validators.required],
            society_code: ['', Validators.required],
            building_code: ['', Validators.required],
            sadnika_code: ['', Validators.required],

            // property_area: ['', Validators.required],
            // special_land_acquition_officer_number: ['', Validators.required],
            // award_number: ['', Validators.required],
            // award_date:['',Validators.required],
            // award_land_possession_date: ['', Validators.required],
            // leasedeed_registration_number_haveli_number: ['', Validators.required],
            // leasedeed_registration_date: ['', Validators.required],
            // original_plot_holder: ['', Validators.required],
            // shop_premium: ['', Validators.required],
            // ready_reckoner_square_meter_rate: ['', Validators.required],
            // building_permission_number: ['', Validators.required],
            // building_permission_date: ['', Validators.required],
            // completion_certificate_number: ['', Validators.required],
            // completion_date: ['', Validators.required],

        });
        this.searchByOwnerForm= this._formBuilder.group({
            owner: ['', Validators.required]
        })
        this._masterService.getTalukaData()
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.talukaData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getVillageList(code): void {
        this.villageData = [];
        this._masterService.getVillageData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.villageData = this._masterService.data$.source['_value'].data;
                }
            })

    }


    getGPSCList(code): void {
        this.gpscData = [];
        this._masterService.getAllGPSCData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.gpscData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getSchemesList(code): void {
        this.plotData.next(null);
        this._editGPSCService.getBulkland(code)
            .subscribe(() => {
                if (this._editGPSCService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._editGPSCService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this._editGPSCService.data$.source['_value'].data['source_name'] = this._masterService.sourceData[this._editGPSCService.data$.source['_value'].data['source_code']];
                    this._editGPSCService.data$.source['_value'].data['aminity_name'] = this._masterService.sourceData[this._editGPSCService.data$.source['_value'].data['aminity_code']];
                    this.plotData.next(this._editGPSCService.data$.source['_value'].data);
                }
            })
            
            this.schemesData = [];
        this._masterService.getSchemesData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.schemesData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getSchemesStructureList(code): void {
        this.schemeStructureData = [];
        this._masterService.getSchemesStructureData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.schemeStructureData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getSocietyList(code): void {
        this.societyData = [];
        console.log(this.horizontalStepperForm.value.scheme_code);

        this._masterService.getSocietyData(code, this.horizontalStepperForm.value['scheme_code'])
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.societyData = this._masterService.data$.source['_value'].data;
                }
            })
    }


    getBuildingList(code): void {
        this.buildingData = [];
        this._masterService.getBuildingData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.buildingData = this._masterService.data$.source['_value'].data;
                }
            })
    }


    getSadnikaList(code): void {
        this.sadnikaData = [];
        this._masterService.getSadnikasData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.sadnikaData = this._masterService.data$.source['_value'].data;
                }
            })
    }


    getSearchDetails(): void {
        //console.log(this.horizontalStepperForm);
        this._listService.getSearchData(this.horizontalStepperForm.value)
            .subscribe((response) => {
                console.log(response);
                if (response.status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    this.isData$.next(false);

                    // Show the alert
                    this.showAlert = true;
                } else {
                    
                    this.dataSource = response.data;
                    this.isData$.next(true);
                }
                this.first.close();
            })
    }


    /**
    * On destroy
    */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     * 
     * 
     */
    openComposeDialogDelete(code): void {

        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete task',
            message: 'Are you sure you want to delete this task? This action cannot be undone!',
            actions: {
                confirm: {
                    label: 'Delete'
                }
            }
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {

            // If the confirm button pressed...
            if (result === 'confirmed') {
                let user_id = JSON.parse(localStorage.getItem('currentUser')).id;

                // Sign up
                console.log("hii");

                this._listService.deleteProperties({ code, user_id })
                    .subscribe((response) => {
                        if (response.status != 200) {
                            // Set the alert
                            this.alert = {
                                type: 'error',
                                message: response.response
                            };

                            // Show the alert
                            this.showAlert = true;
                        } else {
                            this.alert = {
                                type: 'success',
                                message: response.response
                            };

                            // Show the alert
                            this.showAlert = true;
                            var dsData = this.dataSource.data;
                            const itemIndex = dsData.findIndex(obj => obj[code] === code);
                            this.dataSource.data.splice(itemIndex, 1);
                            this.dataSource.paginator = this.paginator;
                        }
                    },
                        (response) => { }

                    );
            }
        })

    }


    openComposeDialogView(code): void {
        // Open the dialog
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = { code: code }
        dialogConfig.maxHeight= '70vh';

        const dialogRef = this._matDialog.open(ViewPropertyComponent, dialogConfig);

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log('Compose dialog was closed!');
            });
    }

    openComposeDialogEdit(): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(EditPropertyComponent);

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log('Compose dialog was closed!');
            });
    }

}
