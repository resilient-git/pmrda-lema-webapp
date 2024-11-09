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
    production: true,
    baseURL: 'http://pmrda.potents.in/',
    apiEndPoint: 'http://pmrda.potents.in/api/public/',
    safexpayEndPoint: 'http://pmrda.potents.in/safexpay/',
    transferStatuss: statusArray
};
