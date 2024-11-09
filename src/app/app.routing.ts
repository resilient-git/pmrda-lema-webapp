import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { MastersTypeOfStructureAddNewModule } from 'app/modules/admin/masters/type-of-structure/add-new/add-new.module';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    //{path: '', pathMatch : 'full', redirectTo: 'dashboards/project'},
    {path: '', pathMatch : 'full', redirectTo: 'landing/index.html'},

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards/project'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)},
            {path: 'citizens-access', loadChildren: () => import('app/modules/auth/citizens-access/citizens-access.module').then(m => m.CitizensAccessModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            // Desk1 Maker
            {path: 'clerk', children: [

                
                {path: 'transfer-applications/scrutiny-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/scrutiny/scrutiny.module').then(m => m.Desk1ScrutinyTransferModule)},
                {path: 'transfer-applications/verification-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification/verification.module').then(m => m.Desk1VerificationTransferModule)},
                {path: 'transfer-applications/verification-close-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification_close/verification_close.module').then(m => m.Desk1VerificationCloseTransferModule)},
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/calculation/calculation.module').then(m => m.Desk1CalculationTransferModule)},
                {path: 'transfer-applications/deed-draft-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_draft/deed_draft.module').then(m => m.Desk1DeedDraftTransferModule)},
                {path: 'transfer-applications/deed-generation-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/genrate_deed/genrate_deed.module').then(m => m.Desk1DeedGenrateTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_verification/deed_verification.module').then(m => m.Desk1DeedVerificationTransferModule)},
                {path: 'transfer-applications/deed-printing-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_printing/list/list.module').then(m => m.Desk1ListPropertyTransferDetailsModule)},
               
                {path: 'transfer-applications/deed-handover-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_handover/deed_handover.module').then(m => m.Desk1DeedHandoverTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/certificate/certificate.module').then(m => m.Desk1CertificateTransferModule)},
                {path: 'transfer-applications/file-close-pending', loadChildren: () => import('app/modules/desk1/property/application/transfer/file_close/file_close.module').then(m => m.Desk1FileCloseTransferModule)},

                {path: 'view-scrutiny-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/scrutiny/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-scrutiny-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/scrutiny/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-scrutiny-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/scrutiny/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-scrutiny-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/scrutiny/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-verification-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-verification-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-verification-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
                {path: 'view-verification-transfer-verify/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification/details/verify/verify.module').then(m => m.ViewPropertyTransferVerifyConfirmModule)},


                {path: 'view-verification-close-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification_close/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-verification-close-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification_close/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-verification-close-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification_close/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
                {path: 'view-verification-close-transfer-verify/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/verification_close/details/verify/verify.module').then(m => m.ViewPropertyTransferVerifyConfirmModule)},


                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
              //  {path: 'view-calculation-transfer-verify/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/calculation/details/verify/verify.module').then(m => m.ViewPropertyTransferVerifyConfirmModule)},

                {path: 'view-deed-generation-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/genrate_deed/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-generation-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/genrate_deed/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-generation-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/genrate_deed/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-generation-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/genrate_deed/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-deed-printing-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/deed_printing/view/view.module').then(m => m.Desk1ViewModule)},
                

                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
               
                {path: 'view-file-close-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/file_close/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'dashboard', loadChildren: () => import('app/modules/desk1/dashboard/dashboard.module').then(m => m.Desk1DashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/desk1/property/application/transfer/pending/pending.module').then(m => m.Desk1PendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/desk1/property/application/transfer/rejected/rejected.module').then(m => m.Desk1RejectedTransferModule)},
                {path: 'approved-transfer-applications', loadChildren: () => import('app/modules/desk1/property/application/transfer/approved/approved.module').then(m => m.Desk1ApprovedTransferModule)},
               
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
                
                ////Heirship

                {path: 'heirship-applications/scrutiny-pending', loadChildren: () => import('app/modules/desk1/property/application/heirship/scrutiny/scrutiny.module').then(m => m.Desk1ScrutinyHeirshipModule)},
                   //details
                   {path: 'view-scrutiny-heirship-application/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/scrutiny/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                   {path: 'view-scrutiny-heirship-document/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/scrutiny/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                   {path: 'view-scrutiny-heirship-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/scrutiny/details/receipt/receipt.module').then(m => m.ViewPropertyHeirshipReceiptModule)},
                   {path: 'view-scrutiny-heirship-action/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/scrutiny/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
   
                {path: 'heirship-applications/verification-pending', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification/verification.module').then(m => m.Desk1VerificationHeirshipModule)},
                  //details
                  {path: 'view-verification-heirship-application/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                  {path: 'view-verification-heirship-document/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                  {path: 'view-verification-heirship-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification/details/receipt/receipt.module').then(m => m.ViewPropertyHeirshipReceiptModule)},
                  {path: 'view-verification-heirship-action/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
                  {path: 'view-verification-heirship-verify/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification/details/verify/verify.module').then(m => m.ViewPropertyHeirshipVerifyConfirmModule)},
  
                {path: 'heirship-applications/verification-close-pending', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification_close/verification_close.module').then(m => m.Desk1VerificationCloseHeirshipModule)},
                  //details
                  {path: 'view-verification-close-heirship-application/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification_close/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                  {path: 'view-verification-close-heirship-document/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification_close/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                  {path: 'view-verification-close-heirship-action/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification_close/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
                  {path: 'view-verification-close-heirship-verify/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/verification_close/details/verify/verify.module').then(m => m.ViewPropertyHeirshipVerifyConfirmModule)},
  
                {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/desk1/property/application/heirship/certificate/certificate.module').then(m => m.Desk1CertificateHeirshipModule)},
                  //details
                  {path: 'view-certificate-heirship-application/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/certificate/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                  {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                  {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
  
                {path: 'heirship-applications/file-close-pending', loadChildren: () => import('app/modules/desk1/property/application/heirship/file_close/file_close.module').then(m => m.Desk1FileCloseHeirshipModule)},
                  //details
                  {path: 'view-file-close-heirship-action/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/file_close/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},

                {path: 'pending-heirship-applications', loadChildren: () => import('app/modules/desk1/property/application/heirship/pending/pending.module').then(m => m.Desk1PendingHeirshipTransferModule)},
                {path: 'rejected-heirship-applications', loadChildren: () => import('app/modules/desk1/property/application/heirship/rejected/rejected.module').then(m => m.Desk1RejectedHeirshipTransferModule)},
                {path: 'approved-heirship-applications', loadChildren: () => import('app/modules/desk1/property/application/heirship/approved/approved.module').then(m => m.Desk1ApprovedHeirshipTransferModule)},
               
                {path: 'view-pending-heirship-application/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/pending/details/application/application.module').then(m => m.ViewHeirshipTransferApplicationModule)},
                {path: 'view-pending-heirship-document/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/pending/details/document/document.module').then(m => m.ViewHeirshipTransferDocumentModule)},
                {path: 'view-pending-heirship-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/pending/details/receipt/receipt.module').then(m => m.ViewHeirshipTransferReceiptModule)},
                {path: 'view-pending-heirship-action/:code', loadChildren: () => import('app/modules/desk1/property/application/heirship/pending/details/action/action.module').then(m => m.ViewHeirshipTransferActionModule)},

                 //BankNoc
                {path: 'banknoc-applications/scrutiny-pending', loadChildren: () => import('app/modules/desk1/property/application/banknoc/scrutiny/scrutiny.module').then(m => m.Desk1BankNocScrutinyTransferModule)},
        
                  {path: 'view-scrutiny-banknoc-application/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/scrutiny/details/application/application.module').then(m => m.ViewBankNoCApplicationModule)},
                  {path: 'view-scrutiny-banknoc-document/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/scrutiny/details/document/document.module').then(m => m.ViewBankNoCDocumentModule)},
                  {path: 'view-scrutiny-banknoc-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/scrutiny/details/receipt/receipt.module').then(m => m.ViewBankNoCReceiptModule)},
                  {path: 'view-scrutiny-banknoc-action/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/scrutiny/details/action/action.module').then(m => m.ViewBankNoCActionModule)},
  
                {path: 'pending-banknoc-applications', loadChildren: () => import('app/modules/desk1/property/application/banknoc/pending/pending.module').then(m => m.Desk1PendingBankNocTransferModule)},
                {path: 'rejected-banknoc-applications', loadChildren: () => import('app/modules/desk1/property/application/banknoc/rejected/rejected.module').then(m => m.Desk1RejectedBankNocTransferModule)},
                {path: 'approved-banknoc-applications', loadChildren: () => import('app/modules/desk1/property/application/banknoc/approved/approved.module').then(m => m.Desk1ApprovedBankNocTransferModule)},
                
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/pending/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/pending/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/pending/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/pending/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},

                {path: 'banknoc-applications/file-close-pending', loadChildren: () => import('app/modules/desk1/property/application/banknoc/file_close/file_close.module').then(m => m.Desk1FileCloseTransferModule)},
                {path: 'view-file-close-banknoc-action/:code', loadChildren: () => import('app/modules/desk1/property/application/banknoc/file_close/details/action/action.module').then(m => m.ViewBankNocActionModule)},

                {path: 'profile', loadChildren: () => import('app/modules/desk1/profile/profile.module').then(m => m.Desk1ProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/desk1/settings/settings.module').then(m => m.Desk1SettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/desk1/settings/email/email.module').then(m => m.Desk1EmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/desk1/settings/mobile/mobile.module').then(m => m.Desk1MobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/desk1/settings/password/password.module').then(m => m.Desk1PasswordModule)}
            ]},
            {path: 'tahsildar', children: [
                {path: 'transfer-applications/verification-pending', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/verification/verification.module').then(m => m.TahsildarVerificationTransferModule)},
                {path: 'transfer-applications/appointment-pending', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/appointment/appointment.module').then(m => m.TahsildarAppointmentTransferModule)},
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/calculation/calculation.module').then(m => m.TahsildarCalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/deed_verification/deed_verification.module').then(m => m.TahsildarDeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/certificate/certificate.module').then(m => m.TahsildarCertificateTransferModule)},

                {path: 'view-verification-transfer-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-verification-transfer-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-verification-transfer-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
            
                
                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                
                {path: 'view-appointment-transfer-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/appointment/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-appointment-transfer-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/appointment/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-appointment-transfer-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/appointment/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'dashboard', loadChildren: () => import('app/modules/tahsildar/dashboard/dashboard.module').then(m => m.TahsildarDashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/pending/pending.module').then(m => m.TahsildarPendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/rejected/rejected.module').then(m => m.TahsildarRejectedTransferModule)},
                        
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
   
                //Heirship
                {path: 'heirship-applications/verification-pending', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/verification/verification.module').then(m => m.TahsildarVerificationHeirshipModule)},
                 //details
                 {path: 'view-verification-heirship-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/verification/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                 {path: 'view-verification-heirship-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/verification/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},

                {path: 'heirship-applications/appointment-pending', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/appointment/appointment.module').then(m => m.TahsildarAppointmentHeirshipModule)},
                 //details
                 {path: 'view-appointment-heirship-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/appointment/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                 {path: 'view-appointment-heirship-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/appointment/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                 {path: 'view-appointment-heirship-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/appointment/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
 
                {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/certificate/certificate.module').then(m => m.TahsildarCertificateHeirshipModule)},
                 //details
                 {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                 {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
 


                //BankNoc
                {path: 'banknoc-applications/verification-pending', loadChildren: () => import('app/modules/tahsildar/property/application/banknoc/verification/verification.module').then(m => m.TahsildarVerificationBankNocTransferModule)},
                
                {path: 'view-verification-banknoc-application/:code', loadChildren: () => import('app/modules/tahsildar/property/application/banknoc/verification/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                {path: 'view-verification-banknoc-document/:code', loadChildren: () => import('app/modules/tahsildar/property/application/banknoc/verification/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
                {path: 'view-verification-banknoc-receipt/:code', loadChildren: () => import('app/modules/tahsildar/property/application/banknoc/verification/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                {path: 'view-verification-banknoc-action/:code', loadChildren: () => import('app/modules/tahsildar/property/application/banknoc/verification/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},


                {path: 'profile', loadChildren: () => import('app/modules/tahsildar/profile/profile.module').then(m => m.TahsildarProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/tahsildar/settings/settings.module').then(m => m.TahsildarSettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/tahsildar/settings/email/email.module').then(m => m.TahsildarEmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/tahsildar/settings/mobile/mobile.module').then(m => m.TahsildarMobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/tahsildar/settings/password/password.module').then(m => m.TahsildarPasswordModule)}
            ]},
            // Dyc Account
            {path: 'dy-commissioner', children: [
                {path: 'transfer-applications/verification-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/verification/verification.module').then(m => m.DyCommissionerVerificationTransferModule)},
                {path: 'transfer-applications/appointment-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/appointment/appointment.module').then(m => m.DyCommissionerAppointmentTransferModule)},
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/calculation/calculation.module').then(m => m.DyCommissionerCalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/deed_verification/deed_verification.module').then(m => m.DyCommissionerDeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/certificate/certificate.module').then(m => m.DyCommissionerCertificateTransferModule)},

                {path: 'view-verification-transfer-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-verification-transfer-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-verification-transfer-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
            
                
                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                
                {path: 'view-appointment-transfer-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/appointment/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-appointment-transfer-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/appointment/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-appointment-transfer-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/appointment/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'dashboard', loadChildren: () => import('app/modules/dy-commissioner/dashboard/dashboard.module').then(m => m.DyCommissionerDashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/pending/pending.module').then(m => m.DyCommissionerPendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/rejected/rejected.module').then(m => m.DyCommissionerRejectedTransferModule)},
                        
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
   
                //Heirship
                {path: 'heirship-applications/verification-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/verification/verification.module').then(m => m.DyCommissionerVerificationHeirshipModule)},
                 //details
                 {path: 'view-verification-heirship-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/verification/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                 {path: 'view-verification-heirship-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/verification/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},

                {path: 'heirship-applications/appointment-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/appointment/appointment.module').then(m => m.DyCommissionerAppointmentHeirshipModule)},
                 //details
                 {path: 'view-appointment-heirship-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/appointment/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                 {path: 'view-appointment-heirship-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/appointment/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                 {path: 'view-appointment-heirship-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/appointment/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
 
                {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/certificate/certificate.module').then(m => m.DyCommissionerCertificateHeirshipModule)},
                 //details
                 {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                 {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
 


                //BankNoc
                {path: 'banknoc-applications/verification-pending', loadChildren: () => import('app/modules/dy-commissioner/property/application/banknoc/verification/verification.module').then(m => m.DyCommissionerVerificationBankNocTransferModule)},
                
                {path: 'view-verification-banknoc-application/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/banknoc/verification/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                {path: 'view-verification-banknoc-document/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/banknoc/verification/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
                {path: 'view-verification-banknoc-receipt/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/banknoc/verification/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                {path: 'view-verification-banknoc-action/:code', loadChildren: () => import('app/modules/dy-commissioner/property/application/banknoc/verification/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},


                {path: 'profile', loadChildren: () => import('app/modules/dy-commissioner/profile/profile.module').then(m => m.DyCommissionerProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/dy-commissioner/settings/settings.module').then(m => m.DyCommissionerSettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/dy-commissioner/settings/email/email.module').then(m => m.DyCommissionerEmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/dy-commissioner/settings/mobile/mobile.module').then(m => m.DyCommissionerMobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/dy-commissioner/settings/password/password.module').then(m => m.DyCommissionerPasswordModule)}
            ]},
            // Joint-Commissioner Account
            {path: 'joint-commissioner', children: [
                    {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/calculation/calculation.module').then(m => m.JointCommissionerCalculationTransferModule)},
                    {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/deed_verification/deed_verification.module').then(m => m.JointCommissionerDeedVerificationTransferModule)},
                    {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/certificate/certificate.module').then(m => m.JointCommissionerCertificateTransferModule)},
                  
                    {path: 'dashboard', loadChildren: () => import('app/modules/joint-commissioner/dashboard/dashboard.module').then(m => m.JointCommissionerDashboardModule)},
                    {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/pending/pending.module').then(m => m.JointCommissionerPendingTransferModule)},
                    {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/rejected/rejected.module').then(m => m.JointCommissionerRejectedTransferModule)},
                            
                    {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                    {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                    {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                    {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
                
                    {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                    {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                    {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                    {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
    
                    
                    {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                    {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                    {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                    {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
    
                    
                    {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                    {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                    {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
     
                    //Heirship
                    {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/joint-commissioner/property/application/heirship/certificate/certificate.module').then(m => m.JointCommissionerCertificateHeirshipModule)},
                       //details
                    {path: 'view-certificate-heirship-application/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/heirship/certificate/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                    {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                    {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
    
                    {path: 'banknoc-applications/verification-pending', loadChildren: () => import('app/modules/joint-commissioner/property/application/banknoc/verification/verification.module').then(m => m.JointCommissionerVerificationBankNocTransferModule)},
                
                    {path: 'view-verification-banknoc-application/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/banknoc/verification/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                    {path: 'view-verification-banknoc-document/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/banknoc/verification/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
                   // {path: 'view-verification-banknoc-receipt/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/banknoc/verification/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                    {path: 'view-verification-banknoc-action/:code', loadChildren: () => import('app/modules/joint-commissioner/property/application/banknoc/verification/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},
                    {path: 'banknoc-applications/certificate-pending', loadChildren: () => import('app/modules/joint-commissioner/property/application/banknoc/verification/verification.module').then(m => m.JointCommissionerVerificationBankNocTransferModule)},
    
    
                    {path: 'profile', loadChildren: () => import('app/modules/joint-commissioner/profile/profile.module').then(m => m.JointCommissionerProfileModule)},
                    {path: 'settings', loadChildren: () => import('app/modules/joint-commissioner/settings/settings.module').then(m => m.JointCommissionerSettingsModule)},
    
                    {path: 'email', loadChildren: () => import('app/modules/joint-commissioner/settings/email/email.module').then(m => m.JointCommissionerEmailModule)},
                    {path: 'mobile', loadChildren: () => import('app/modules/joint-commissioner/settings/mobile/mobile.module').then(m => m.JointCommissionerMobileModule)},
                    {path: 'password', loadChildren: () => import('app/modules/joint-commissioner/settings/password/password.module').then(m => m.JointCommissionerPasswordModule)}
            ]},
           
            // Financial Controller 
            {path: 'financial-controller', children: [
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/calculation/calculation.module').then(m => m.FinancialControllerCalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/deed_verification/deed_verification.module').then(m => m.FinancialControllerDeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/certificate/certificate.module').then(m => m.FinancialControllerCertificateTransferModule)},
            
                {path: 'dashboard', loadChildren: () => import('app/modules/financial-controller/dashboard/dashboard.module').then(m => m.FinancialControllerDashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/pending/pending.module').then(m => m.FinancialControllerPendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/rejected/rejected.module').then(m => m.FinancialControllerRejectedTransferModule)},
                        
                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                
                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                
                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/financial-controller/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                //Heirship
                {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/financial-controller/property/application/heirship/certificate/certificate.module').then(m => m.FinancialControllerCertificateHeirshipModule)},
                //details
                {path: 'view-certificate-heirship-application/:code', loadChildren: () => import('app/modules/financial-controller/property/application/heirship/certificate/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/financial-controller/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/financial-controller/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},

                {path: 'banknoc-applications/verification-pending', loadChildren: () => import('app/modules/financial-controller/property/application/banknoc/verification/verification.module').then(m => m.FinancialControllerVerificationBankNocTransferModule)},

                {path: 'view-verification-banknoc-application/:code', loadChildren: () => import('app/modules/financial-controller/property/application/banknoc/verification/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                {path: 'view-verification-banknoc-document/:code', loadChildren: () => import('app/modules/financial-controller/property/application/banknoc/verification/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
            // {path: 'view-verification-banknoc-receipt/:code', loadChildren: () => import('app/modules/financial-controller/property/application/banknoc/verification/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                {path: 'view-verification-banknoc-action/:code', loadChildren: () => import('app/modules/financial-controller/property/application/banknoc/verification/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},
                {path: 'banknoc-applications/certificate-pending', loadChildren: () => import('app/modules/financial-controller/property/application/banknoc/verification/verification.module').then(m => m.FinancialControllerVerificationBankNocTransferModule)},


                {path: 'profile', loadChildren: () => import('app/modules/financial-controller/profile/profile.module').then(m => m.FinancialControllerProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/financial-controller/settings/settings.module').then(m => m.FinancialControllerSettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/financial-controller/settings/email/email.module').then(m => m.FinancialControllerEmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/financial-controller/settings/mobile/mobile.module').then(m => m.FinancialControllerMobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/financial-controller/settings/password/password.module').then(m => m.FinancialControllerPasswordModule)}
            ]},
            // Jr. Engg 
            {path: 'jre', children: [           
                {path: 'dashboard', loadChildren: () => import('app/modules/jre/dashboard/dashboard.module').then(m => m.JreDashboardModule)},
                {path: 'site-visit-report', loadChildren: () => import('app/modules/jre/property/application/transfer/site_visit/site_visit.module').then(m => m.JreSiteVisitTransferModule)},
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/jre/property/application/transfer/site_visit/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/jre/property/application/transfer/site_visit/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/jre/property/application/transfer/site_visit/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/jre/property/application/transfer/site_visit/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
   
                {path: 'profile', loadChildren: () => import('app/modules/jre/profile/profile.module').then(m => m.JreProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/jre/settings/settings.module').then(m => m.JreSettingsModule)},
                {path: 'email', loadChildren: () => import('app/modules/jre/settings/email/email.module').then(m => m.JreEmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/jre/settings/mobile/mobile.module').then(m => m.JreMobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/jre/settings/password/password.module').then(m => m.JrePasswordModule)}
            ]},

            // Desk2 Checker
            {path: 'desk2', children: [
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/desk2/property/application/transfer/calculation/calculation.module').then(m => m.Desk2CalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/desk2/property/application/transfer/deed_verification/deed_verification.module').then(m => m.Desk2DeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/desk2/property/application/transfer/certificate/certificate.module').then(m => m.Desk2CertificateTransferModule)},
              

                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
            
                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                
                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                {path: 'dashboard', loadChildren: () => import('app/modules/desk2/dashboard/dashboard.module').then(m => m.Desk2DashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/desk2/property/application/transfer/pending/pending.module').then(m => m.Desk2PendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/desk2/property/application/transfer/rejected/rejected.module').then(m => m.Desk2RejectedTransferModule)},
                        
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
                {path: 'view-pending-transfer-verify/:code', loadChildren: () => import('app/modules/desk2/property/application/transfer/pending/details/verify/verify.module').then(m => m.ViewPropertyTransferVerifyModule)},

                {path: 'profile', loadChildren: () => import('app/modules/desk2/profile/profile.module').then(m => m.Desk2ProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/desk2/settings/settings.module').then(m => m.Desk2SettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/desk2/settings/email/email.module').then(m => m.Desk2EmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/desk2/settings/mobile/mobile.module').then(m => m.Desk2MobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/desk2/settings/password/password.module').then(m => m.Desk2PasswordModule)}
            ]},
            // Desk3 Account
            {path: 'desk3', children: [

                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/desk3/property/application/transfer/calculation/calculation.module').then(m => m.Desk3CalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/desk3/property/application/transfer/deed_verification/deed_verification.module').then(m => m.Desk3DeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/desk3/property/application/transfer/certificate/certificate.module').then(m => m.Desk3CertificateTransferModule)},
              
                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
            

                {path: 'dashboard', loadChildren: () => import('app/modules/desk3/dashboard/dashboard.module').then(m => m.Desk3DashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/desk3/property/application/transfer/pending/pending.module').then(m => m.Desk3PendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/desk3/property/application/transfer/rejected/rejected.module').then(m => m.Desk3RejectedTransferModule)},
                        
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
                {path: 'view-pending-transfer-verify/:code', loadChildren: () => import('app/modules/desk3/property/application/transfer/pending/details/verify/verify.module').then(m => m.ViewPropertyTransferVerifyModule)},

                {path: 'profile', loadChildren: () => import('app/modules/desk3/profile/profile.module').then(m => m.Desk3ProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/desk3/settings/settings.module').then(m => m.Desk3SettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/desk3/settings/email/email.module').then(m => m.Desk3EmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/desk3/settings/mobile/mobile.module').then(m => m.Desk3MobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/desk3/settings/password/password.module').then(m => m.Desk3PasswordModule)}
            ]},
            

            // DyCommissioner Approver
            {path: 'desk4', children: [
                {path: 'transfer-applications/verification-pending', loadChildren: () => import('app/modules/desk4/property/application/transfer/verification/verification.module').then(m => m.Desk4VerificationTransferModule)},
                {path: 'transfer-applications/appointment-pending', loadChildren: () => import('app/modules/desk4/property/application/transfer/appointment/appointment.module').then(m => m.Desk4AppointmentTransferModule)},
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/desk4/property/application/transfer/calculation/calculation.module').then(m => m.Desk4CalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/desk4/property/application/transfer/deed_verification/deed_verification.module').then(m => m.Desk4DeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/desk4/property/application/transfer/certificate/certificate.module').then(m => m.Desk4CertificateTransferModule)},

                {path: 'view-verification-transfer-application/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-verification-transfer-document/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-verification-transfer-action/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
            
                
                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                
                {path: 'view-appointment-transfer-application/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/appointment/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-appointment-transfer-document/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/appointment/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-appointment-transfer-action/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/appointment/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},


                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                {path: 'dashboard', loadChildren: () => import('app/modules/desk4/dashboard/dashboard.module').then(m => m.Desk4DashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/desk4/property/application/transfer/pending/pending.module').then(m => m.Desk4PendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/desk4/property/application/transfer/rejected/rejected.module').then(m => m.Desk4RejectedTransferModule)},
                        
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/desk4/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
   
                //Heirship
                {path: 'heirship-applications/verification-pending', loadChildren: () => import('app/modules/desk4/property/application/heirship/verification/verification.module').then(m => m.Desk4VerificationHeirshipModule)},
                 //details
                 {path: 'view-verification-heirship-application/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/verification/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                 {path: 'view-verification-heirship-action/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/verification/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},

                {path: 'heirship-applications/appointment-pending', loadChildren: () => import('app/modules/desk4/property/application/heirship/appointment/appointment.module').then(m => m.Desk4AppointmentHeirshipModule)},
                 //details
                 {path: 'view-appointment-heirship-application/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/appointment/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                 {path: 'view-appointment-heirship-document/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/appointment/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                 {path: 'view-appointment-heirship-action/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/appointment/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
 
                {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/desk4/property/application/heirship/certificate/certificate.module').then(m => m.Desk4CertificateHeirshipModule)},
                 //details
                 {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                 {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/desk4/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},
 


                //BankNoc
                {path: 'banknoc-applications/verification-pending', loadChildren: () => import('app/modules/desk4/property/application/banknoc/verification/verification.module').then(m => m.Desk4VerificationBankNocTransferModule)},
                
                {path: 'view-verification-banknoc-application/:code', loadChildren: () => import('app/modules/desk4/property/application/banknoc/verification/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                {path: 'view-verification-banknoc-document/:code', loadChildren: () => import('app/modules/desk4/property/application/banknoc/verification/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
                {path: 'view-verification-banknoc-receipt/:code', loadChildren: () => import('app/modules/desk4/property/application/banknoc/verification/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                {path: 'view-verification-banknoc-action/:code', loadChildren: () => import('app/modules/desk4/property/application/banknoc/verification/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},


                {path: 'profile', loadChildren: () => import('app/modules/desk4/profile/profile.module').then(m => m.Desk4ProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/desk4/settings/settings.module').then(m => m.Desk4SettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/desk4/settings/email/email.module').then(m => m.Desk4EmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/desk4/settings/mobile/mobile.module').then(m => m.Desk4MobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/desk4/settings/password/password.module').then(m => m.Desk4PasswordModule)}
            ]},
            // Desk5 Final Approver
            {path: 'desk5', children: [
                {path: 'transfer-applications/calculation-pending', loadChildren: () => import('app/modules/desk5/property/application/transfer/calculation/calculation.module').then(m => m.Desk5CalculationTransferModule)},
                {path: 'transfer-applications/deed-verification-pending', loadChildren: () => import('app/modules/desk5/property/application/transfer/deed_verification/deed_verification.module').then(m => m.Desk5DeedVerificationTransferModule)},
                {path: 'transfer-applications/certificate-pending', loadChildren: () => import('app/modules/desk5/property/application/transfer/certificate/certificate.module').then(m => m.Desk5CertificateTransferModule)},
              
                {path: 'dashboard', loadChildren: () => import('app/modules/desk5/dashboard/dashboard.module').then(m => m.Desk5DashboardModule)},
                {path: 'pending-transfer-applications', loadChildren: () => import('app/modules/desk5/property/application/transfer/pending/pending.module').then(m => m.Desk5PendingTransferModule)},
                {path: 'rejected-transfer-applications', loadChildren: () => import('app/modules/desk5/property/application/transfer/rejected/rejected.module').then(m => m.Desk5RejectedTransferModule)},
                        
                {path: 'view-calculation-transfer-application/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/calculation/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-calculation-transfer-document/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/calculation/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-calculation-transfer-receipt/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/calculation/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-calculation-transfer-action/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/calculation/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
            
                {path: 'view-pending-transfer-application/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/pending/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-pending-transfer-document/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/pending/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-pending-transfer-receipt/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/pending/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-pending-transfer-action/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/pending/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                
                {path: 'view-deed-verification-transfer-application/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/deed_verification/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-deed-verification-transfer-document/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/deed_verification/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-deed-verification-transfer-receipt/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/deed_verification/details/receipt/receipt.module').then(m => m.ViewPropertyTransferReceiptModule)},
                {path: 'view-deed-verification-transfer-action/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/deed_verification/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},

                
                {path: 'view-certificate-transfer-application/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/certificate/details/application/application.module').then(m => m.ViewPropertyTransferApplicationModule)},
                {path: 'view-certificate-transfer-document/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/certificate/details/document/document.module').then(m => m.ViewPropertyTransferDocumentModule)},
                {path: 'view-certificate-transfer-action/:code', loadChildren: () => import('app/modules/desk5/property/application/transfer/certificate/details/action/action.module').then(m => m.ViewPropertyTransferActionModule)},
 
                //Heirship
                {path: 'heirship-applications/certificate-pending', loadChildren: () => import('app/modules/desk5/property/application/heirship/certificate/certificate.module').then(m => m.Desk5CertificateHeirshipModule)},
                   //details
                {path: 'view-certificate-heirship-application/:code', loadChildren: () => import('app/modules/desk5/property/application/heirship/certificate/details/application/application.module').then(m => m.ViewPropertyHeirshipApplicationModule)},
                {path: 'view-certificate-heirship-document/:code', loadChildren: () => import('app/modules/desk5/property/application/heirship/certificate/details/document/document.module').then(m => m.ViewPropertyHeirshipDocumentModule)},
                {path: 'view-certificate-heirship-action/:code', loadChildren: () => import('app/modules/desk5/property/application/heirship/certificate/details/action/action.module').then(m => m.ViewPropertyHeirshipActionModule)},

                {path: 'banknoc-applications/verification-pending', loadChildren: () => import('app/modules/desk5/property/application/banknoc/verification/verification.module').then(m => m.Desk5VerificationBankNocTransferModule)},
            
                {path: 'view-verification-banknoc-application/:code', loadChildren: () => import('app/modules/desk5/property/application/banknoc/verification/details/application/application.module').then(m => m.ViewBankNocTransferApplicationModule)},
                {path: 'view-verification-banknoc-document/:code', loadChildren: () => import('app/modules/desk5/property/application/banknoc/verification/details/document/document.module').then(m => m.ViewBankNocTransferDocumentModule)},
               // {path: 'view-verification-banknoc-receipt/:code', loadChildren: () => import('app/modules/desk5/property/application/banknoc/verification/details/receipt/receipt.module').then(m => m.ViewBankNocTransferReceiptModule)},
                {path: 'view-verification-banknoc-action/:code', loadChildren: () => import('app/modules/desk5/property/application/banknoc/verification/details/action/action.module').then(m => m.ViewBankNocTransferActionModule)},
                {path: 'banknoc-applications/certificate-pending', loadChildren: () => import('app/modules/desk5/property/application/banknoc/verification/verification.module').then(m => m.Desk5VerificationBankNocTransferModule)},


                {path: 'profile', loadChildren: () => import('app/modules/desk5/profile/profile.module').then(m => m.Desk5ProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/desk5/settings/settings.module').then(m => m.Desk5SettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/desk5/settings/email/email.module').then(m => m.Desk5EmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/desk5/settings/mobile/mobile.module').then(m => m.Desk5MobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/desk5/settings/password/password.module').then(m => m.Desk5PasswordModule)}
            ]},
            //CommonView
            // {path:'commonView', loadChildren:()=>import('app/modules/commonView/commonView.module').then(m => m.CommonViewRoutesModule)},
            // Citizens
            {path: 'citizens', children: [
                {path: 'dashboard', loadChildren: () => import('app/modules/citizens/dashboard/dashboard.module').then(m => m.CitizensDashboardModule)},
                {path: 'add-new-property', loadChildren: () => import('app/modules/citizens/property/add-new/add-new.module').then(m => m.CitizensNewPropertyModule)},
                {path: 'search-property', loadChildren: () => import('app/modules/citizens/property/search/search.module').then(m => m.CitizensSearchPropertyModule)},
                {path: 'properties', loadChildren: () => import('app/modules/citizens/property/list/list.module').then(m => m.CitizensListPropertiesModule)},
              
                {path: 'transfer-applications-details/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/list/list.module').then(m => m.CitizensListPropertyTransferDetailsModule)},
                {path: 'transfer-applications', loadChildren: () => import('app/modules/citizens/property/application/transfer/list/list.module').then(m => m.CitizensListPropertyTransferDetailsModule)},
                {path: 'transfer-applications-fees', loadChildren: () => import('app/modules/citizens/property/application/transfer/fees/landing/landing.module').then(m => m.CitizensTransferFeesLandingModule)},
                {path: 'transfer-applications-book.appointments', loadChildren: () => import('app/modules/citizens/property/application/transfer/appointments/appointments.module').then(m => m.CitizensTransferAppointmentModule)},
              
                {path: 'transfer-applications-status', loadChildren: () => import('app/modules/citizens/property/application/transfer/status/status.module').then(m => m.CitizensTransferStatusModule)},

                {path: 'view-deed-upload-transfer-application/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/deed-upload/view/view.module').then(m => m.CitizensViewModule)},
                
                //{path: 'transfer-applications', loadChildren: () => import('app/modules/citizens/property/application/transfer/list-old/list.module').then(m => m.CitizensListPropertyTransferModule)},
             
                {path: 'new-transfer-application-details', loadChildren: () => import('app/modules/citizens/property/application/transfer/add-new-old/add-new.module').then(m => m.CitizensPropertyNewTransferDetailsModule)},
                {path: 'new-transfer-application/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/add-new/add-new.module').then(m => m.CitizensPropertyNewTransferModule)},
                {path: 'add-transfer-application/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/add-new/add-new.module').then(m => m.CitizensPropertyNewTransferModule)},
                

                {path: 'transfer-application/select-property', loadChildren: () => import('app/modules/citizens/property/application/transfer/select/select.module').then(m => m.CitizensSelectPropertyModule)},
                //{path: 'add-transfer-application/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/select-property/add-new.module').then(m => m.CitizensPropertyNewTransferModule)},
                
                {path: 'transfer-application/verify-mobile', loadChildren: () => import('app/modules/citizens/property/application/transfer/verify-mobile/verify-mobile.module').then(m => m.CitizensVerifyMobileModule)},
                {path: 'transfer-application/fees/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/fees/initiate/initiate.module').then(m => m.CitizensInitiateModule)},
                {path: 'transfer-application/fees-payment-done/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/fees/done/payment-done.module').then(m => m.CitizensFeesPaymentDoneModule)},
                {path: 'transfer-application/schedule-appointment/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/schedule/schedule.module').then(m => m.CitizensSchedulePropertyTransferModule)},
                
                {path: 'transfer-application/preview/:code/:mode', loadChildren: () => import('app/modules/citizens/property/application/transfer/view-application/view-application.module').then(m => m.CitizensViewApplicationModule)},
               
                {path: 'transfer-application/certificate/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/certificate/certificate.module').then(m => m.CitizensCertificatePropertyTransferModule)},
                {path: 'transfer-application/fees/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/fees/initiate/initiate.module').then(m => m.CitizensInitiateModule)},
                {path: 'transfer-application/fees/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/fees/initiate/initiate.module').then(m => m.CitizensInitiateModule)},

                {path: 'transfer-applications/fee-pending', loadChildren: () => import('app/modules/citizens/property/application/transfer/charges/list/list.module').then(m => m.CitizensListPropertyTransferDetailsModule)},
                //{path: 'transfer-applications/deed-data-entry-pending', loadChildren: () => import('app/modules/citizens/property/application/transfer/deed-data-entry/list/list.module').then(m => m.CitizensListPropertyTransferDetailsModule)},
                {path: 'transfer-applications/deed-verify-pending', loadChildren: () => import('app/modules/citizens/property/application/transfer/deed-data-entry/list/list.module').then(m => m.CitizensListPropertyTransferDetailsModule)},
                {path: 'transfer-applications/deed-upload-pending', loadChildren: () => import('app/modules/citizens/property/application/transfer/deed-upload/list/list.module').then(m => m.CitizensListPropertyTransferDetailsModule)},
                {path: 'transfer-applications/certificate', loadChildren: () => import('app/modules/citizens/property/application/transfer/certificate/certificate.module').then(m => m.CitizensCertificatePropertyTransferModule)},
                
                {path: 'transfer-applications/view-deed-draft/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/deed-data-entry/view/view.module').then(m => m.CitizensViewModule)},

                {path: 'transfer-application/charges/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/charges/initiate/initiate.module').then(m => m.CitizensInitiateModule)},
                {path: 'transfer-application/charges-payment-done/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/charges/done/payment-done.module').then(m => m.CitizensChargesPaymentDoneModule)},
                {path: 'transfer-application/deed-data-entry/:code', loadChildren: () => import('app/modules/citizens/property/application/transfer/deed-data-entry/initiate/initiate.module').then(m => m.CitizensInitiateModule)},

                {path: 'heirship-applications', loadChildren: () => import('app/modules/citizens/property/application/heirship/list/list.module').then(m => m.CitizensListHeirshipTransferDetailsModule)},
                {path: 'heirship-application/select-property', loadChildren: () => import('app/modules/citizens/property/application/heirship/select/select.module').then(m => m.CitizensSelectHeirshipModule)},                
                {path: 'heirship-application/verify-mobile', loadChildren: () => import('app/modules/citizens/property/application/heirship/verify-mobile/verify-mobile.module').then(m => m.CitizensVerifyMobileModule)},
                {path: 'new-heirship-application/:code', loadChildren: () => import('app/modules/citizens/property/application/heirship/add-new/add-new.module').then(m => m.CitizensHeirshipNewTransferModule)},
             
                {path: 'heirship-application/fees/:code', loadChildren: () => import('app/modules/citizens/property/application/heirship/fees/initiate/initiate.module').then(m => m.CitizensInitiateModule)},
                {path: 'heirship-application/fees-payment-done/:code', loadChildren: () => import('app/modules/citizens/property/application/heirship/fees/done/payment-done.module').then(m => m.CitizensFeesPaymentDoneModule)},
                {path: 'heirship-application/schedule-appointment/:code', loadChildren: () => import('app/modules/citizens/property/application/heirship/schedule/schedule.module').then(m => m.CitizensScheduleHeirshipTransferModule)},
                {path: 'heirship-booking-done/:bdate', loadChildren: () => import('app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.module').then(m => m.CitizensBookingDoneHeirshipTransferModule)},

                {path: 'banknoc-applications', loadChildren: () => import('app/modules/citizens/property/application/banknoc/list/list.module').then(m => m.CitizensListBankNocTransferDetailsModule)},
                {path: 'banknoc-application/select-property', loadChildren: () => import('app/modules/citizens/property/application/banknoc/select/select.module').then(m => m.CitizensSelectBankNocModule)},                
                {path: 'banknoc-application/verify-mobile', loadChildren: () => import('app/modules/citizens/property/application/banknoc/verify-mobile/verify-mobile.module').then(m => m.CitizensVerifyMobileModule)},
                {path: 'banknoc-application/fees/:code', loadChildren: () => import('app/modules/citizens/property/application/banknoc/fees/initiate/initiate.module').then(m => m.CitizensInitiateModule)},
                {path: 'banknoc-application/fees-payment-done/:code', loadChildren: () => import('app/modules/citizens/property/application/banknoc/fees/done/payment-done.module').then(m => m.CitizensFeesPaymentDoneModule)},
                {path: 'banknoc-application/schedule-appointment/:code', loadChildren: () => import('app/modules/citizens/property/application/banknoc/schedule/schedule.module').then(m => m.CitizensScheduleBankNocTransferModule)},
                {path: 'new-banknoc-application/:code', loadChildren: () => import('app/modules/citizens/property/application/banknoc/add-new/add-new.module').then(m => m.CitizensBankNocNewTransferModule)},

                {path: 'banknoc-applications/certificate', loadChildren: () => import('app/modules/citizens/property/application/banknoc/certificate/certificate.module').then(m => m.CitizensCertificatePropertyTransferModule)},
               
                {path: 'banknoc-application/preview/:code/:mode', loadChildren: () => import('app/modules/citizens/property/application/banknoc/view-application/view-application.module').then(m => m.CitizensViewApplicationModule)},


                
                {path: 'tpa-booking-done/:bdate', loadChildren: () => import('app/modules/citizens/property/application/transfer/schedule/booking-done/booking-done.module').then(m => m.CitizensBookingDonePropertyTransferModule)},
                
                {path: 'download-documents-formats', loadChildren: () => import('app/modules/citizens/download/download.module').then(m => m.CitizensDownloadModule)},

                {path: 'profile', loadChildren: () => import('app/modules/citizens/profile/profile.module').then(m => m.CitizensProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/citizens/settings/settings.module').then(m => m.CitizensSettingsModule)},

                {path: 'email', loadChildren: () => import('app/modules/citizens/settings/email/email.module').then(m => m.CitizensEmailModule)},
                {path: 'mobile', loadChildren: () => import('app/modules/citizens/settings/mobile/mobile.module').then(m => m.CitizensMobileModule)},
                {path: 'password', loadChildren: () => import('app/modules/citizens/settings/password/password.module').then(m => m.CitizensPasswordModule)},
                
                {path: 'get-otp', loadChildren: () => import('app/modules/citizens/property/get-otp/get-otp.module').then(m => m.CitizensGetOtpModule)},
                
                {path: 'noc-applications', loadChildren: () => import('app/modules/citizens/property/application/noc/list/list.module').then(m => m.CitizensListPropertyNocModule)},
                {path: 'new-noc-application', loadChildren: () => import('app/modules/citizens/property/application/noc/add-new/add-new.module').then(m => m.CitizensPropertyNewNocModule)},
                {path: 'nomination-applications', loadChildren: () => import('app/modules/citizens/property/application/nomination/list/list.module').then(m => m.CitizensListPropertyNominationModule)},
                {path: 'new-nomination-application', loadChildren: () => import('app/modules/citizens/property/application/nomination/add-new/add-new.module').then(m => m.CitizensPropertyNewNominationModule)},
                {path: 'fees/:code', loadChildren: () => import('app/modules/citizens/payment/fees/initiate/fees.module').then(m => m.CitizensFeesModule)},
                {path: 'fees-payment-done', loadChildren: () => import('app/modules/citizens/payment/fees/done/payment-done.module').then(m => m.CitizensFeesPaymentDoneModule)},

                {path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.module').then(m => m.FinanceModule)},
                {path: 'crypto', loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.module').then(m => m.CryptoModule)},
            ]},
            // Dashboards
            {path: 'dashboards', children: [
                {path: 'project', data:{roles:[1,2,3]},loadChildren: () => import('app/modules/admin/dashboards/project/project.module').then(m => m.ProjectModule)},
                {path: 'analytics', loadChildren: () => import('app/modules/admin/dashboards/analytics/analytics.module').then(m => m.AnalyticsModule)},
                {path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.module').then(m => m.FinanceModule)},
                {path: 'crypto', loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.module').then(m => m.CryptoModule)},
            ]},

             // admin
             {path: 'admin', children: [
                {path: 'user/add-new', loadChildren: () => import('app/modules/admin/ums/users/add-new/add-new.module').then(m => m.AdminAddNewModule)},
                {path: 'user/edit', loadChildren: () => import('app/modules/admin/ums/users/edit/edit.module').then(m => m.AdminEditUserModule)},
                {path: 'user/list', loadChildren: () => import('app/modules/admin/ums/users/list/list.module').then(m => m.AdminListModule)},
                {path: 'user/delete', loadChildren: () => import('app/modules/admin/ums/users/delete/delete.module').then(m => m.AdminDeleteUserModule)},
               
                {path: 'role/list', loadChildren: () => import('app/modules/admin/ums/roles/list/list.module').then(m => m.AdminRoleListModule)},
               {path: 'role/add-new', loadChildren: () => import('app/modules/admin/ums/roles/add-new/add-new.module').then(m => m.AdminRoleAddNewModule)},
               {path: 'role/edit', loadChildren: () => import('app/modules/admin/ums/roles/edit/edit.module').then(m => m.AdminRoleEditModule)},
               {path: 'role/view', loadChildren: () => import('app/modules/admin/ums/roles/view/view.module').then(m => m.AdminRoleViewModule)},
               {path: 'role/delete', loadChildren: () => import('app/modules/admin/ums/roles/delete/delete.module').then(m => m.AdminRoleDeleteModule)},
                
                {path: 'transfer-desk3-pending', loadChildren: () => import('app/modules/admin/transfer-application/account-dept/list/list.module').then(m => m.AccountDepartmentListModule)},
                {path: 'transfer-desk2-pending', loadChildren: () => import('app/modules/admin/transfer-application/appointment/list/list.module').then(m => m.AppointmentListModule)},
                {path: 'back-to-applicant/list', loadChildren: () => import('app/modules/admin/transfer-application/back-to-applicant/list/list.module').then(m => m.BackToApplicantListModule)},
                {path: 'transfer-certificate-downloaded', loadChildren: () => import('app/modules/admin/transfer-application/certificate-download/list/list.module').then(m => m.CertificateDownloadListModule)},
                {path: 'transfer-certificate-issued', loadChildren: () => import('app/modules/admin/transfer-application/certificate-issued/list/list.module').then(m => m.CertificateIssuedListModule)},
                {path: 'transfer-certificate-pending', loadChildren: () => import('app/modules/admin/transfer-application/certificate-pending/list/list.module').then(m => m.CertificatePendingListModule)},
                {path: 'transfer-draft-list', loadChildren: () => import('app/modules/admin/transfer-application/draft/list/list.module').then(m => m.DraftListModule)},
                {path: 'transfer-draft-view', loadChildren: () => import('app/modules/admin/transfer-application/draft/view/view.module').then(m => m.DraftViewModule)},
                {path: 'transfer-draft-delete', loadChildren: () => import('app/modules/admin/transfer-application/draft/delete/delete.module').then(m => m.DraftDeleteModule)},
                {path: 'transfer-fees-pending', loadChildren: () => import('app/modules/admin/transfer-application/fee-pending/list/list.module').then(m => m.FeePendingListModule)},
                {path: 'transfer-payment-pending', loadChildren: () => import('app/modules/admin/transfer-application/payment-pending/list/list.module').then(m => m.PaymentPendingListModule)},
                {path: 'transfer-desk1-pending', loadChildren: () => import('app/modules/admin/transfer-application/verification-pending/list/list.module').then(m => m.VerificationPendingListModule)},
  
                {path: 'commonView', loadChildren: () => import('app/modules/commonView/commonView.module').then(m => m.CommonViewRoutesModule)},


                //{path: 'add-new-property', loadChildren: () => import('app/modules/admin/property/add-new/add-new.module').then(m => m.AdminNewPropertyModule)},

                {path: 'properties/list', loadChildren: () => import('app/modules/admin/properties/list/list.module').then(m => m.PropertiesListModule)},
                {path: 'properties/add-new', loadChildren: () => import('app/modules/admin/properties/add-new/add-new.module').then(m => m.AdminNewPropertyModule)},
                {path: 'properties/edit/:code', loadChildren: () => import('app/modules/admin/properties/edit/edit.module').then(m => m.AdminEditPropertyModule)},
                {path: 'properties/view/:code', loadChildren: () => import('app/modules/admin/properties/view/view.module').then(m => m.AdminViewPropertyModule)},
                {path: 'properties/delete', loadChildren: () => import('app/modules/admin/properties/delete/delete.module').then(m => m.AdminDeletePropertyModule)},
                
                {path: 'property-owner/list/:code', loadChildren: () => import('app/modules/admin/property-owner/list/list.module').then(m => m.PropertiesOwnerListModule)},
              //  {path: 'properties/transfrer-details/:code', loadChildren: () => import('app/modules/admin/property-owner/add-new/transfrer-details.module').then(m => m.AdminTransfrerDetailsPropertyModule)},
                {path: 'property-owner/add-new/:code', loadChildren: () => import('app/modules/admin/property-owner/add-new/add-new.module').then(m => m.AddPropertyOwnerModule)},
                {path: 'property-owner/edit/:code/:property_code', loadChildren: () => import('app/modules/admin/property-owner/edit/edit.module').then(m => m.EditPropertyOwnerModule)},
                {path: 'property-owner/view/:code', loadChildren: () => import('app/modules/admin/property-owner/view/view.module').then(m => m.ViewPropertyOwnerModule)},
                {path: 'property-owner/delete', loadChildren: () => import('app/modules/admin/property-owner/delete/delete.module').then(m => m.DeletePropertyOwnerModule)},

                {path: 'talukas/add-new', loadChildren: () => import('app/modules/admin/masters/talukas/add-new/add-new.module').then(m => m.MastersTalukasAddNewModule)},
                {path: 'talukas/list', loadChildren: () => import('app/modules/admin/masters/talukas/list/list.module').then(m => m.MastersTalukasListModule)},
                {path: 'talukas/edit/:code', loadChildren: () => import('app/modules/admin/masters/talukas/edit/edit.module').then(m => m.MastersTalukasEditModule)},
                {path: 'talukas/view/:code', loadChildren: () => import('app/modules/admin/masters/talukas/view/view.module').then(m => m.MastersTalukasViewModule)},
                {path: 'talukas/delete/:code', loadChildren: () => import('app/modules/admin/masters/talukas/delete/delete.module').then(m => m.MastersTalukasDeleteModule)},
              
                {path: 'buildings/list', loadChildren: () => import('app/modules/admin/masters/building-number/list/list.module').then(m => m.MastersBuildingNumberListModule)},
                {path: 'buildings/add-new', loadChildren: () => import('app/modules/admin/masters/building-number/add-new/add-new.module').then(m => m.MastersBuildingNumberAddNewModule)},
                {path: 'buildings/edit/:code', loadChildren: () => import('app/modules/admin/masters/building-number/edit/edit.module').then(m => m.MastersBuildingNumberEditModule)},
                {path: 'buildings/view/:code', loadChildren: () => import('app/modules/admin/masters/building-number/view/view.module').then(m => m.MastersBuildingNumberViewModule)},
                {path: 'buildings/delete/:code', loadChildren: () => import('app/modules/admin/masters/building-number/delete/delete.module').then(m => m.MastersBuildingNumberDeleteModule)},
                

                {path: 'gat-cts/list', loadChildren: () => import('app/modules/admin/masters/bulkland-number/list/list.module').then(m => m.MastersBulkLandNumberListModule)},
                {path: 'gat-cts/add-new', loadChildren: () => import('app/modules/admin/masters/bulkland-number/add-new/add-new.module').then(m => m.MastersBulkLandNumberAddNewModule)},
                {path: 'gat-cts/edit/:code', loadChildren: () => import('app/modules/admin/masters/bulkland-number/edit/edit.module').then(m => m.MastersBulkLandNumberEditModule)},
                {path: 'gat-cts/view', loadChildren: () => import('app/modules/admin/masters/bulkland-number/view/view.module').then(m => m.MastersBulkLandNumberViewModule)},
                {path: 'gat-cts/delete/:code', loadChildren: () => import('app/modules/admin/masters/bulkland-number/delete/delete.module').then(m => m.MastersBulkLandNumberDeleteModule)},

                {path: 'schemes/list', loadChildren: () => import('app/modules/admin/masters/scheme-number/list/list.module').then(m => m.MastersSchemeNumberListModule)},
                {path: 'schemes/add-new', loadChildren: () => import('app/modules/admin/masters/scheme-number/add-new/add-new.module').then(m => m.MastersSchemeNumberAddNewModule)},
                {path: 'schemes/edit/:code', loadChildren: () => import('app/modules/admin/masters/scheme-number/edit/edit.module').then(m => m.MastersSchemeNumberEditModule)},
                {path: 'schemes/view/:code', loadChildren: () => import('app/modules/admin/masters/scheme-number/view/view.module').then(m => m.MastersSchemeNumberViewModule)},
                {path: 'schemes/delete/:code', loadChildren: () => import('app/modules/admin/masters/scheme-number/delete/delete.module').then(m => m.MastersSchemeNumberDeleteModule)},


                {path: 'sadnikas/list', loadChildren: () => import('app/modules/admin/masters/sadnika-dukan-number/list/list.module').then(m => m.MastersSadnikanumberListModule)},
                {path: 'sadnikas/add-new', loadChildren: () => import('app/modules/admin/masters/sadnika-dukan-number/add-new/add-new.module').then(m => m.MastersSadnikanumberAddNewModule)},
                {path: 'sadnikas/edit/:code', loadChildren: () => import('app/modules/admin/masters/sadnika-dukan-number/edit/edit.module').then(m => m.MastersSadnikanumberEditModule)},
                {path: 'sadnikas/view/:code', loadChildren: () => import('app/modules/admin/masters/sadnika-dukan-number/view/view.module').then(m => m.MastersSadnikanumberViewModule)},
                {path: 'sadnikas/delete/:code', loadChildren: () => import('app/modules/admin/masters/sadnika-dukan-number/delete/delete.module').then(m => m.MastersSadnikanumberDeleteModule)},

                
                // {path: 'sectors/list', loadChildren: () => import('app/modules/admin/masters/sectors/list/list.module').then(m => m.MasterSectorsListModule)},
                // {path: 'sectors/delete', loadChildren: () => import('app/modules/admin/masters/sectors/delete/delete.module').then(m => m.MastersSectorsDeleteModule)},
                // {path: 'sectors/edit', loadChildren: () => import('app/modules/admin/masters/sectors/edit/edit.module').then(m => m.MastersSectorsEditModule)},
                // {path: 'sectors/view', loadChildren: () => import('app/modules/admin/masters/sectors/view/view.module').then(m => m.MastersSectorsViewModule)},
                // {path: 'sectors/add-new', loadChildren: () => import('app/modules/admin/masters/sectors/add-new/add-new.module').then(m => m.MastersSectorsAddNewModule)},

                {path: 'villages/list', loadChildren: () => import('app/modules/admin/masters/villages/list/list.module').then(m => m.MastersVillagesListModule)},
                {path: 'villages/add-new', loadChildren: () => import('app/modules/admin/masters/villages/add-new/add-new.module').then(m => m.MastersVillagesAddNewModule)},
                {path: 'villages/view/:code', loadChildren: () => import('app/modules/admin/masters/villages/view/view.module').then(m => m.MastersVillagesViewModule)},
                {path: 'villages/edit/:code', loadChildren: () => import('app/modules/admin/masters/villages/edit/edit.module').then(m => m.MastersVillagesEditModule)},
                {path: 'villages/delete/:code', loadChildren: () => import('app/modules/admin/masters/villages/delete/delete.module').then(m => m.MastersVillagesDeleteModule)},
               
                {path: 'societies/list', loadChildren: () => import('app/modules/admin/masters/society-name/list/list.module').then(m => m.MasterSocietyListModule)},
                {path: 'societies/add-new', loadChildren: () => import('app/modules/admin/masters/society-name/add-new/add-new.module').then(m => m.MasterSocietyAddNewModule)},
                {path: 'societies/view', loadChildren: () => import('app/modules/admin/masters/society-name/view/view.module').then(m => m.MasterSocietyViewModule)},
                {path: 'societies/edit/:code', loadChildren: () => import('app/modules/admin/masters/society-name/edit/edit.module').then(m => m.MasterSocietyEditModule)},
                {path: 'societies/delete/:code', loadChildren: () => import('app/modules/admin/masters/society-name/delete/delete.module').then(m => m.MasterSocietyDeleteModule)},

               
                {path: 'type-of-structures/add-new', loadChildren: () => import('app/modules/admin/masters/type-of-structure/add-new/add-new.module').then(m => m.MastersTypeOfStructureAddNewModule)},
                {path: 'type-of-structures/list', loadChildren: () => import('app/modules/admin/masters/type-of-structure/list/list.module').then(m => m.MastersTypeOfStructureListModule)},
                {path: 'type-of-structures/edit/:code', loadChildren: () => import('app/modules/admin/masters/type-of-structure/edit/edit.module').then(m => m.MastersTypeOfStructureEditModule)},
                {path: 'type-of-structures/view', loadChildren: () => import('app/modules/admin/masters/type-of-structure/view/view.module').then(m => m.MastersTypeOfStructureViewModule)},
                {path: 'type-of-structures/delete/:code', loadChildren: () => import('app/modules/admin/masters/type-of-structure/delete/delete.module').then(m => m.MastersTypeOfStructureDeleteModule)},
              

                {path: 'scheme-structure-type/add-new', loadChildren: () => import('app/modules/admin/masters/scheme-structure-type/add-new/add-new.module').then(m => m.MastersSchemeStructureTypeAddNewModule)},
                {path: 'scheme-structure-type/list', loadChildren: () => import('app/modules/admin/masters/scheme-structure-type/list/list.module').then(m => m.MastersSchemeStructureTypeListModule)},
                {path: 'scheme-structure-type/edit/:code', loadChildren: () => import('app/modules/admin/masters/scheme-structure-type/edit/edit.module').then(m => m.MastersSchemeStructureTypeEditModule)},
              

                {path: 'workflows/list', loadChildren: () => import('app/modules/admin/workflows/list/list.module').then(m => m.WorkflowsListModule)},
              //  {path: 'workflows/property-transfer', loadChildren: () => import('app/modules/admin/workflows/edit/property-transfer/property-transfer.module').then(m => m.WorkflowsDetailModule)},
             //   {path: 'property-transfer/list', loadChildren: () => import('app/modules/admin/workflows/edit/property-transfer/list/list.module').then(m => m.WorkflowsListModule)},
                {path: 'workflows/view', loadChildren: () => import('app/modules/admin/workflows/view/view.module').then(m => m.WorkflowsViewModule)},
                {path: 'workflows/delete', loadChildren: () => import('app/modules/admin/workflows/delete/delete.module').then(m => m.WorkflowsDeleteModule)},

            ]}, 

            // Apps
            {path: 'apps', children: [
                {path: 'academy', loadChildren: () => import('app/modules/admin/apps/academy/academy.module').then(m => m.AcademyModule)},
                {path: 'calendar', loadChildren: () => import('app/modules/admin/apps/calendar/calendar.module').then(m => m.CalendarModule)},
                {path: 'chat', loadChildren: () => import('app/modules/admin/apps/chat/chat.module').then(m => m.ChatModule)},
                {path: 'contacts', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.module').then(m => m.ContactsModule)},
                {path: 'ecommerce', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)},
                {path: 'file-manager', loadChildren: () => import('app/modules/admin/apps/file-manager/file-manager.module').then(m => m.FileManagerModule)},
                {path: 'help-center', loadChildren: () => import('app/modules/admin/apps/help-center/help-center.module').then(m => m.HelpCenterModule)},
                {path: 'mailbox', loadChildren: () => import('app/modules/admin/apps/mailbox/mailbox.module').then(m => m.MailboxModule)},
                {path: 'notes', loadChildren: () => import('app/modules/admin/apps/notes/notes.module').then(m => m.NotesModule)},
                {path: 'scrumboard', loadChildren: () => import('app/modules/admin/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)},
                {path: 'tasks', loadChildren: () => import('app/modules/admin/apps/tasks/tasks.module').then(m => m.TasksModule)},
            ]},

            {path: 'restricted-access', loadChildren: () => import('app/modules/admin/pages/error/error-403/error-403.module').then(m => m.Error403Module)},

            // Pages
            {path: 'pages', children: [

                // Activities
                {path: 'activities', loadChildren: () => import('app/modules/admin/pages/activities/activities.module').then(m => m.ActivitiesModule)},

                // Authentication
                {path: 'authentication', loadChildren: () => import('app/modules/admin/pages/authentication/authentication.module').then(m => m.AuthenticationModule)},

                // Coming Soon
                {path: 'coming-soon', loadChildren: () => import('app/modules/admin/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},

                // Error
                {path: 'error', children: [
                    {path: '403', loadChildren: () => import('app/modules/admin/pages/error/error-403/error-403.module').then(m => m.Error403Module)},
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)}
                ]},

                
                

                // Invoice
                {path: 'invoice', children: [
                    {path: 'printable', children: [
                        {path: 'compact', loadChildren: () => import('app/modules/admin/pages/invoice/printable/compact/compact.module').then(m => m.CompactModule)},
                        {path: 'modern', loadChildren: () => import('app/modules/admin/pages/invoice/printable/modern/modern.module').then(m => m.ModernModule)}
                    ]}
                ]},

                // Maintenance
                {path: 'maintenance', loadChildren: () => import('app/modules/admin/pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)},

                // Pricing
                {path: 'pricing', children: [
                    {path: 'modern', loadChildren: () => import('app/modules/admin/pages/pricing/modern/modern.module').then(m => m.PricingModernModule)},
                    {path: 'simple', loadChildren: () => import('app/modules/admin/pages/pricing/simple/simple.module').then(m => m.PricingSimpleModule)},
                    {path: 'single', loadChildren: () => import('app/modules/admin/pages/pricing/single/single.module').then(m => m.PricingSingleModule)},
                    {path: 'table', loadChildren: () => import('app/modules/admin/pages/pricing/table/table.module').then(m => m.PricingTableModule)}
                ]},

                // Profile
                {path: 'profile', loadChildren: () => import('app/modules/admin/pages/profile/profile.module').then(m => m.ProfileModule)},

                // Settings
                {path: 'settings', loadChildren: () => import('app/modules/admin/pages/settings/settings.module').then(m => m.SettingsModule)},
            ]},

            // User Interface
            {path: 'ui', children: [

                // Material Components
                {path: 'material-components', loadChildren: () => import('app/modules/admin/ui/material-components/material-components.module').then(m => m.MaterialComponentsModule)},

                // Fuse Components
                {path: 'fuse-components', loadChildren: () => import('app/modules/admin/ui/fuse-components/fuse-components.module').then(m => m.FuseComponentsModule)},

                // Other Components
                {path: 'other-components', loadChildren: () => import('app/modules/admin/ui/other-components/other-components.module').then(m => m.OtherComponentsModule)},

                // TailwindCSS
                {path: 'tailwindcss', loadChildren: () => import('app/modules/admin/ui/tailwindcss/tailwindcss.module').then(m => m.TailwindCSSModule)},

                // Advanced Search
                {path: 'advanced-search', loadChildren: () => import('app/modules/admin/ui/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)},

                // Animations
                {path: 'animations', loadChildren: () => import('app/modules/admin/ui/animations/animations.module').then(m => m.AnimationsModule)},

                 // Cards
                {path: 'cards', loadChildren: () => import('app/modules/admin/ui/cards/cards.module').then(m => m.CardsModule)},

                // Colors
                {path: 'colors', loadChildren: () => import('app/modules/admin/ui/colors/colors.module').then(m => m.ColorsModule)},

                // Confirmation Dialog
                {path: 'confirmation-dialog', loadChildren: () => import('app/modules/admin/ui/confirmation-dialog/confirmation-dialog.module').then(m => m.ConfirmationDialogModule)},

                // Datatable
                {path: 'datatable', loadChildren: () => import('app/modules/admin/ui/datatable/datatable.module').then(m => m.DatatableModule)},

                // Forms
                {path: 'forms', children: [
                    {path: 'fields', loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                    {path: 'layouts', loadChildren: () => import('app/modules/admin/ui/forms/layouts/layouts.module').then(m => m.FormsLayoutsModule)},
                    {path: 'wizards', loadChildren: () => import('app/modules/admin/ui/forms/wizards/wizards.module').then(m => m.FormsWizardsModule)}
                ]},

                // Icons
                {path: 'icons', loadChildren: () => import('app/modules/admin/ui/icons/icons.module').then(m => m.IconsModule)},

                // Page Layouts
                {path: 'page-layouts', loadChildren: () => import('app/modules/admin/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)},

                // Typography
                {path: 'typography', loadChildren: () => import('app/modules/admin/ui/typography/typography.module').then(m => m.TypographyModule)}
            ]},

            // Documentation
            {path: 'docs', children: [

                // Changelog
                {path: 'changelog', loadChildren: () => import('app/modules/admin/docs/changelog/changelog.module').then(m => m.ChangelogModule)},

                // Guides
                {path: 'guides', loadChildren: () => import('app/modules/admin/docs/guides/guides.module').then(m => m.GuidesModule)}
            ]},

            // 404 & Catch all
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
