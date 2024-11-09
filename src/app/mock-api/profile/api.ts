import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { profile as profileData} from 'app/mock-api/profile/data';

@Injectable({
    providedIn: 'root'
})
export class ProfileMockApi
{
    private _profile: any[] = profileData;
   
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
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/profile')
            .reply(() => {

                // Clone the profile
                const profile = cloneDeep(this._profile);

                // Sort the profile by the name field by default
                profile.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, profile];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contacts Search - GET
        // -----------------------------------------------------------------------------------------------------
     
        // -----------------------------------------------------------------------------------------------------
        // @ Contact - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/profile')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the profile
                const profile = cloneDeep(this._profile);

                // Find the profile
                const profiles = profile.find(item => item.id === id);

                // Return the response
                return [200, profile];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/profile')
            .reply(() => {

                // Generate a new profile
                const newProfile = {
                    firstName       : null,
                    middleName      : null,
                    lastName        : null,
                    dateofbirth      : [],
                    gender: null,
                    
                    emailId    : [],
                    phoneNumber     : [],
                    address       : null,
                    number        : [],
                    city        : null,
                    zip        : [],
                    photo        : null
                };

                // Unshift the new profile
                this._profile.unshift(newProfile);

                // Return the response
                return [200, newProfile];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/profile')
            .reply(({request}) => {

                // Get the id and contact
                const id = request.body.id;
                const profile = cloneDeep(request.body.profile);

                // Prepare the updated profile
                let updatedprofile = null;

                // Find the profile and update it
                this._profile.forEach((item, index, profile) => {

                    if ( item.id === id )
                    {
                        // Update the contact
                        profile[index] = assign({}, profile[index], profile);

                        // Store the updated profile
                        updatedprofile = profile[index];
                    }
                });

                // Return the response
                return [200, updatedprofile];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - DELETE
        // -----------------------------------------------------------------------------------------------------
       
        // -----------------------------------------------------------------------------------------------------
        // @ Countries - GET
        // -----------------------------------------------------------------------------------------------------
        

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
       
        // -----------------------------------------------------------------------------------------------------
        // @ Tags - POST
        // -----------------------------------------------------------------------------------------------------


        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        
        // -----------------------------------------------------------------------------------------------------
        // @ Tag - DELETE
        // -----------------------------------------------------------------------------------------------------
        
        // -----------------------------------------------------------------------------------------------------
        // @ Avatar - POST
        // -----------------------------------------------------------------------------------------------------

        /**
         * Read the given file as mock-api url
         *
         * @param file
         */
       

       
     }
 }
