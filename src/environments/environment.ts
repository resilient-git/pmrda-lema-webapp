// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let statusArray = {"draft" : 0,
                   "fee_pending" : 1,
                   "book_appointment_pending" : 2,
                   "maker_pending" : 3,
                   "maker_rejection" : 4,
                   "cheker_pending" : 5,
                   "cheker_rejection" : 6,
                   "accountant_pending" : 7,
                   "accountant_rejection" : 8,
                   "payment_pending" : 9,
                   "approver_pending" : 10,
                   "approver_rejection" : 11,
                   "process_completed" : 12};

export const environment = {
    production: false,
    //baseURL: 'http://localhost:4200/',
    baseURL: 'http://pmrda.potents.in/',
    apiEndPoint: 'http://localhost:4200/apis/',
    safexpayEndPoint: 'http://pmrda.potents.in/safexpay/',
    transferStatuss: statusArray
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
