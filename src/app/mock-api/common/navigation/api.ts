import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { compactNavigation, 
         defaultNavigation, 
         futuristicNavigation, 
         horizontalNavigation, 
         adminNavigation,
         citizenNavigation,
         clerkNavigation,
         tahsildarNavigation,
         jrenggNavigation,
         desk2Navigation,
         desk3Navigation,
         dyCommissionerNavigation,
         jointCommissionerNavigation,
         financeControllerNavigation
        } from 'app/mock-api/common/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class NavigationMockApi
{
    private _defaultNavigation: FuseNavigationItem[];
    
    private readonly _compactNavigation: FuseNavigationItem[] = compactNavigation;
   // private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
    private readonly _futuristicNavigation: FuseNavigationItem[] = futuristicNavigation;
    private readonly _horizontalNavigation: FuseNavigationItem[] = horizontalNavigation;
    private readonly _adminNavigation: FuseNavigationItem[] = adminNavigation;
    private readonly _citizenNavigation: FuseNavigationItem[] = citizenNavigation;
    private readonly _clerkNavigation: FuseNavigationItem[] = clerkNavigation;
    private readonly _tahsildarNavigation: FuseNavigationItem[] = tahsildarNavigation;


    private readonly _jrenggNavigation: FuseNavigationItem[] = jrenggNavigation;

    private readonly _desk2Navigation: FuseNavigationItem[] = desk2Navigation;
    private readonly _desk3Navigation: FuseNavigationItem[] = desk3Navigation;

    
    
    private readonly _dycNavigation: FuseNavigationItem[] = dyCommissionerNavigation;
    private readonly _jointNavigation: FuseNavigationItem[] = jointCommissionerNavigation;
    private readonly _fcNavigation: FuseNavigationItem[] = financeControllerNavigation;



    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/common/navigation')
            .reply(() => {
                let user = cloneDeep(JSON.parse(localStorage.getItem('currentUser')));
               
                // Fill compact navigation children using the default navigation
                if(user.role_id == 1){
                    this._defaultNavigation = this._adminNavigation;
                }else if(user.role_id == 2){
                    this._defaultNavigation = this._citizenNavigation;
                }else if(user.role_id == 3){
                    this._defaultNavigation = this._clerkNavigation;
                }else if(user.role_id == 4){
                    //this._defaultNavigation = this._desk2Navigation;
                    this._defaultNavigation = this._tahsildarNavigation;
                }else if(user.role_id == 5){
                    this._defaultNavigation = this._desk3Navigation;
                }else if(user.role_id == 6){
                    this._defaultNavigation = this._dycNavigation;
                }else if(user.role_id == 7){
                    this._defaultNavigation = this._jointNavigation;
                }else if(user.role_id == 8){
                    this._defaultNavigation = this._jrenggNavigation;
                }else if(user.role_id == 9){
                    this._defaultNavigation = this._fcNavigation;
                }

                
                this._compactNavigation.forEach((compactNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === compactNavItem.id )
                        {
                            compactNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill futuristic navigation children using the default navigation
                this._futuristicNavigation.forEach((futuristicNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === futuristicNavItem.id )
                        {
                            futuristicNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill horizontal navigation children using the default navigation
                this._horizontalNavigation.forEach((horizontalNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === horizontalNavItem.id )
                        {
                            horizontalNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Return the response
                return [
                    200,
                    {
                        compact   : cloneDeep(this._compactNavigation),
                        default   : cloneDeep(this._defaultNavigation),
                        futuristic: cloneDeep(this._futuristicNavigation),
                        horizontal: cloneDeep(this._horizontalNavigation)
                    }
                ];
            });
    }
}
