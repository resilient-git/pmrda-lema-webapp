import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Download } from 'app/modules/citizens/download/download.types';


@Injectable({
    providedIn: 'root'
}) 
export class DownloadService
{
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private _download: BehaviorSubject<Download | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    downloadFile(): any {
		// return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'});
  }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
     get download$(): Observable<Download>
     {
         return this._download.asObservable();
     }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
     getData(): Observable<Download[]>
    {
        return this._httpClient.get<Download[]>('api/dashboards/project').pipe(
            tap((download: any) => {
                this._data.next(download);
            })
        );
    }
    // getDownload(): Observable<Download[]>
    // {
    //     return this._httpClient.get<Download[]>('api/apps/contacts/all').pipe(
    //         tap((download) => {
    //             this._download.next(download);
    //         })
    //     );
    // }
}
