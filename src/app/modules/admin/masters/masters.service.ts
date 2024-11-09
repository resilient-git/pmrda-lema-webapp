import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from 'environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MastersService {
    
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private apiEndPoint:string="";
    amenityData = {
        1: "Open Spaces",
        2: "Parks",
        3: "Recreational Facilities and Grounds",
        4: "Sports Complex",
        5: "Library",
        6: "Hospital",
        7: "Cafeteria",
        8: "Convenience Shopping",
        9: "Parking Lots",
        10: "Primary and Secondary Schools",
        11: "Clinics",
        12: "Dispensaries",
        13: "Health Club",
        14: "Sub Post Office",
        15: "Police Station",
        16: "Electric Sub Station",
        17: "ATMs",
        18: "Banks",
        19: "Electronic Cyber Library",
        20: "Open Markets",
        21: "Garbage Bins",
        22: "Play Grounds",
        23: "Yoga Center",
        24: "Gardens",
        25: "Water Supply",
        26: "Electric Supplys",
        27: "Street Lightning",
        28: "Sewerage",
        29: "Drainage",
        30: "Public Work and Other Utilies",
        31: "Club House",
        32: "Services and Conveniences",
        33: "Fire Brigade",
        34: "Staff Quarters Of PMRDA and a Public Utility",
        35: "Student Hostels and Working Women Hostels",
        99: "Other"
    };

    sourceData = {
        1: "Tp Scheme",
        2: "Handover",
        3: "Metro Project",
        4: "Gov.Land",
        5: "Land Acquition",
        6: "Other"
    };

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
        this.apiEndPoint = environment.apiEndPoint;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getTalukaData(): Observable<any> {
        let url = this.apiEndPoint + 'talukas/list';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }


    getUserDeskData(): Observable<any> {
        /*let amenityData = [
            {
                "user_id":45,
                "user_name":"Clerk Desk -> Ankita Jachak"
            }/*,
            44:"Clerk Desk -> Rohidas Rahute",
            35:"Assistant Account -> PMRDA Account 1",
            5:"Assistant Account -> PMRDA Account 2",
            43:"Tehsildar -> Abhijit Jagtap",
            42:"Dy Commissioner -> Pravin Thakare",
            41:"Joint Commissioner -> Snehal Barge"
        }
        ];
        return amenityData;*/
        let url = this.apiEndPoint + 'users/deskwise-list';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getUserByRole(code): Observable<any> {
        let url = this.apiEndPoint + 'users/next-deskwise-list/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }


    getVillageData(code): Observable<any> {
        let url = this.apiEndPoint + 'villages/by-taluka-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    
    getGPSCData(code): Observable<any> {
        let url = this.apiEndPoint + 'gpsc/by-village-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getAllGPSCData(code): Observable<any> {
        let url = this.apiEndPoint + 'gpsc/allocated/by-village-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getSchemesDataByVillage(code): Observable<any> {
        let url = this.apiEndPoint + 'schemes/by-village-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getSchemesData(code): Observable<any> {
        let url = this.apiEndPoint + 'schemes/by-gpsc-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getSchemesStructureData(code): Observable<any> {
        let url = this.apiEndPoint + 'scheme-structure-types/by_scheme_code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getSocietyData(code, scheme): Observable<any> {
        let url = this.apiEndPoint + 'societies/by-scheme-structure-code/' + scheme + '/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getBuildingData(code): Observable<any> {
        let url = this.apiEndPoint + 'buildings/by-society-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getSadnikasData(code): Observable<any> {
        let url = this.apiEndPoint + 'sadnikas/by-building-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getPropertyOwnerData(code): Observable<any> {
        let url = this.apiEndPoint + 'properties/current-owner-by-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getPropertyOwnerDataBySadnika(code): Observable<any> {
        let url = this.apiEndPoint + 'properties/current-owner-by-sadnika-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    checkProperty(code): Observable<any> {
        let url = this.apiEndPoint + 'properties/validate-property/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    
    // getBankNocOwnerDataBySadnika(code): Observable<any> {
    //     let url = this.apiEndPoint + 'properties/current-owner-by-sadnika-code/' + code;
    //     return this._httpClient.get(url).pipe(
    //         tap((response: any) => {
    //             this._data.next(response);
    //         })
    //     );
    // }
    
    getUserPropertyData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/user-property-detailed-by-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getUserBankNocData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/user-banknoc-detailed-by-code/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getPropertyTransferData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/view-tpa-details/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getBankNocData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/view-bna-details/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    
    getHeirApplicationData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/view-hsa-details/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    

    getHeirShipData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/get-pha-applicant-details/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }


    getTransfereeData(code): Observable<any> {
        let url = this.apiEndPoint + 'citizens/get-tpa-transferee-details/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getPropertiesData(user): Observable<any> {
        let url = this.apiEndPoint + 'citizens/property-list/' + user;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    custDateFormat(date) {
        let d = new Date(date);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return (`${ye}-${mo}-${da}`);
    }

    getPropertyDataByUPRN(code): Observable<any> {
        let url = this.apiEndPoint + '/properties/by-uprn/' + code;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getLandMainCategoryData(): Observable<any> {
        let url = this.apiEndPoint + 'land-categories/0';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getLandSubCategoryData(parent_id): Observable<any> {
        let url = this.apiEndPoint + 'land-categories/'+parent_id;
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getLandPurposeData(): Observable<any> {
        let url = this.apiEndPoint + 'land-purposes/list';
        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

}
