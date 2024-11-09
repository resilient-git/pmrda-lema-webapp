import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Profile } from 'app/modules/citizens/profile/profile.types';


@Injectable({
    providedIn: 'root'
}) 
export class ProfileService
{
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private _profile: BehaviorSubject<Profile | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
     get profile$(): Observable<Profile>
     {
         return this._profile.asObservable();
     }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
     getData(): Observable<Profile[]>
    {
        return this._httpClient.get<Profile[]>('api/dashboards/project').pipe(
            tap((profile: any) => {
                this._data.next(profile);
            })
        );
    }
    // getProfile(): Observable<Profile[]>
    // {
    //     return this._httpClient.get<Profile[]>('api/apps/contacts/all').pipe(
    //         tap((profile) => {
    //             this._profile.next(profile);
    //         })
    //     );
    // }
}
