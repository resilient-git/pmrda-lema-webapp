/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'citizen-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/citizens/dashboard'
    },    
    // {
    //     id      : 'commonView',
    //     title   : 'View Transfer Application',
    //     subtitle: '',
    //     type    : 'basic',
    //     icon    : 'heroicons_outline:home',
    //     link : '/commonView/commonView'
    // },
    {
        id      : 'citizen-properties',
        title   : 'Properties',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:identification',
        link : '/citizens/properties'
    },
    {
        id      : 'citizen-add-property',
        title   : 'Select Property',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:location-marker',
        link : '/citizens/add-new-property'
    },
    {
        id      : 'applications',
        title   : 'My Applications',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'applications.property.transfer',
                title: 'Property Transfer',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications'
            },
            {
                id      : 'applications.property.nomination',
                title   : 'Nomination Updation',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/citizens/nomination-applications'
            },
            {
                id   : 'applications.property.noc',
                title: 'NoC for Loan',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/citizens/noc-applications'
            }
           
         
           
        ]
    },
    {
        id      : 'pages',
        title   : 'My Payments',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:document',
        children: [
            {
                id   : 'pages.activities',
                title: 'Pending Payments',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/pages/activities'
            },
            
            {
                id   : 'pages.maintenance',
                title: 'Payment History',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/pages/maintenance'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const commonViewNavigation: FuseNavigationItem[] = [
    // {
    //     id      : 'dashboards',
    //     title   : 'Dashboards',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:home',
    //     link : '/commonView/dashboard'

    //     // children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    {
        id      : 'commonView',
        title   : 'View Transfer Application',
        type    : 'basic',
        icon    : 'heroicons_outline:file',
        link : '/commonView/commonView'
        // children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
   
];

export const adminNavigation: FuseNavigationItem[] = [
    {
        id      : 'admin-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/admin/dashboard'
    },
    {
        id      : 'properties',
        title   : 'Properties',
        subtitle: '',
        type    : 'collapsable',
        icon    : 'heroicons_outline:office-building',
        children: [
            {
                id      : 'properties.list',
                title   : 'Properties List',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:identification',
                link : '/admin/properties/list'
            },
            {
                id      : 'properties.add_new',
                title   : 'Add New Property',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:location-marker',
                link : '/admin/properties/add-new'
            }
        ]
    },     
    {
        id      : 'ums',
        title   : 'Users & Roles',
        subtitle: '',
        type    : 'collapsable',
        icon : 'heroicons_outline:user-group',
        children: [
            {
                id   : 'ums.users.list',
                title: 'Users List',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/admin/user/list'
            },
            /*{
                id      : 'ums.users.add',
                title   : 'Add New User',
                type    : 'basic',
                icon    : 'heroicons_outline:duplicate',
                link    : '/admin/user/add-new'
            },*/
            {
                id   : 'ums.roles.list',
                title: 'Roles List',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/admin/role/list'
            }
           
         
           
        ]
    },
    {
        id      : 'admin-workflow',
        title   : 'Workflows',
        subtitle: 'Manage Apllications Stages',
        type    : 'basic',
        icon    : 'heroicons_outline:adjustments',
        link : '/admin/workflows/list'
    }, 
    
    {
        id      : 'transfer',
        title   : 'Property Transfer',
        subtitle: 'Applications',
        type    : 'collapsable',
        icon    : 'heroicons_outline:finger-print',
        children: [
            {
                id   : 'transfer.draft',
                title: 'Draft',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/admin/transfer-draft-list'
            },            
            {
                id   : 'transfer.fee_pending',
                title: 'Fee Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-fees-pending'
            },            
            {
                id   : 'transfer.clerk',
                title: 'Clerk Pending',
                subtitle: 'Verification Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-clerk-pending'
            },            
            {
                id   : 'transfer.desk2',
                title: 'Desk 2 Pending',
                subtitle: 'Appointment Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-desk2-pending'
            },            
            {
                id   : 'transfer.desk3',
                title: 'Desk 3 Pending',
                subtitle: 'Account Dept. Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-desk3-pending'
            },            
            {
                id   : 'transfer.back_to_applicant',
                title: 'Return to User',
                subtitle: 'Send back with query',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-fees-pending'
            },            
            {
                id   : 'transfer.payment_pending',
                title: 'Payment Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-payment-pending'
            },            
            {
                id   : 'transfer.certificate_pending',
                title: 'Certificate Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-pending'
            },            
            {
                id   : 'transfer.certificate_issued',
                title: 'Certificate Issued',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-issued'
            },            
            {
                id   : 'transfer.certificate_downloaded',
                title: 'Certificate Downloaded',
                subtitle: 'downloaded certificates list',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-downloaded'
            }
        ]
    },

    {
        id      : 'nomination',
        title   : 'Property Nomination',
        subtitle: 'Applications',
        type    : 'collapsable',
        icon    : 'heroicons_outline:switch-vertical',
        children: [
            {
                id   : 'transfer.draft',
                title: 'Draft',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/admin/transfer-draft-list'
            },            
            {
                id   : 'transfer.fee_pending',
                title: 'Fee Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-fees-pending'
            },            
            {
                id   : 'transfer.clerk',
                title: 'Desk 1 Pending',
                subtitle: 'Verification Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-clerk-pending'
            },            
            {
                id   : 'transfer.desk2',
                title: 'Desk 2 Pending',
                subtitle: 'Appointment Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-desk2-pending'
            },            
            {
                id   : 'transfer.desk3',
                title: 'Desk 3 Pending',
                subtitle: 'Account Dept. Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-desk3-pending'
            },            
            {
                id   : 'transfer.back_to_applicant',
                title: 'Return to User',
                subtitle: 'Send back with query',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-fees-pending'
            },            
            {
                id   : 'transfer.payment_pending',
                title: 'Payment Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-payment-pending'
            },            
            {
                id   : 'transfer.certificate_pending',
                title: 'Certificate Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-pending'
            },            
            {
                id   : 'transfer.certificate_issued',
                title: 'Certificate Issued',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-issued'
            },            
            {
                id   : 'transfer.certificate_downloaded',
                title: 'Certificate Downloaded',
                subtitle: 'downloaded certificates list',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-downloaded'
            }
        ]
    },
    {
        id      : 'noc',
        title   : 'Loan NoC',
        subtitle: 'Applications',
        type    : 'collapsable',
        icon    : 'heroicons_outline:archive',
        children: [
            {
                id   : 'transfer.draft',
                title: 'Draft',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/admin/transfer-draft-list'
            },            
            {
                id   : 'transfer.fee_pending',
                title: 'Fee Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-fees-pending'
            },            
            {
                id   : 'transfer.clerk',
                title: 'Clerk Pending',
                subtitle: 'Verification Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-clerk-pending'
            },            
            {
                id   : 'transfer.desk2',
                title: 'Desk 2 Pending',
                subtitle: 'Appointment Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-desk2-pending'
            },            
            {
                id   : 'transfer.desk3',
                title: 'Desk 3 Pending',
                subtitle: 'Account Dept. Desk',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-desk3-pending'
            },            
            {
                id   : 'transfer.back_to_applicant',
                title: 'Return to User',
                subtitle: 'Send back with query',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-fees-pending'
            },            
            {
                id   : 'transfer.payment_pending',
                title: 'Payment Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-payment-pending'
            },            
            {
                id   : 'transfer.certificate_pending',
                title: 'Certificate Pending',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-pending'
            },            
            {
                id   : 'transfer.certificate_issued',
                title: 'Certificate Issued',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-issued'
            },            
            {
                id   : 'transfer.certificate_downloaded',
                title: 'Certificate Downloaded',
                subtitle: 'downloaded certificates list',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/admin/transfer-certificate-downloaded'
            }
        ]
    },


   
    {
        id      : 'masters',
        title   : 'Masters',
        subtitle: '',
        type    : 'collapsable',
        icon    : 'heroicons_outline:academic-cap',
        children: [
            {
                id   : 'masters.taluka',
                title: 'Taluka',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/talukas/list'
            },         
            {
                id   : 'masters.village',
                title: 'Village/Sector',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/villages/list'
            },
            {
                id   : 'masters.cts_gut',
                title: 'Gat/CTS/Survey/Plot',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/gat-cts/list'
            },
            {
                id   : 'masters.type_of_structure',
                title: 'Type of Structure',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/type-of-structures/list'
            },
            {
                id   : 'masters.scheme',
                title: 'Scheme',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/schemes/list'
            },
            {
                id   : 'masters.scheme',
                title: 'Scheme Structures Type',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/scheme-structure-type/list'
            },
            {
                id   : 'masters.society',
                title: 'Society',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/societies/list'
            },
            {
                id   : 'masters.building',
                title: 'Building',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/buildings/list'
            },
            {
                id   : 'masters.sadnika',
                title: 'Sadnika',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/admin/sadnikas/list'
            }
            
        ]
    },
    {
        id      : 'admin-reports',
        title   : 'Reports',
        subtitle: '',
        type    : 'collapsable',
        icon    : 'heroicons_outline:cash',
        link : '/admin/dashboard'
    }
];
export const citizenNavigation: FuseNavigationItem[] = [
    {
        id      : 'citizen-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/citizens/dashboard'
    },  
    /*  
    {
        id      : 'citizen-properties',
        title   : 'Properties',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:identification',
        link : '/citizens/properties'
    },
    {
        id      : 'citizen-add-property',
        title   : 'Select Property',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:location-marker',
        link : '/citizens/add-new-property'
    },
    {
        id      : 'citizen-choose-property',
        title   : 'Search Property',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:location-marker',
        link : '/citizens/search-property'
    },
    {
        id      : 'property.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'property.transfer.applications',
                title: 'New Application',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications'
            },
            {
                id      : 'property.transfer.fees',
                title   : 'Application Fees',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/citizens/transfer-applications-fees'
            },
            {
                id   : 'property.transfer.book.appointments',
                title: 'Book Appointment',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/citizens/transfer-applications-book.appointments'
            },
            {
                id   : 'property.transfer.status',
                title: 'Track Application Status',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/citizens/transfer-applications-status'
            }
           
         
           
        ]
    },*/

    {
        id      : 'applications',
        title   : 'Transfer Applications',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'applications.property.transfer.new',
                title: 'New Application',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-application/select-property'
            },
            {
                id   : 'applications.property.transfer.fee_pending',
                title: 'Transfer Fee',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications/fee-pending'
            },
           /* {
                id   : 'applications.property.transfer.deed_data_entry_pending',
                title: 'Deed Data Entry',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications/deed-data-entry-pending'
            },*/
            {
                id   : 'applications.property.transfer.deed_verify_pending',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications/deed-verify-pending'
            },
            {
                id   : 'applications.property.transfer.deed_upload_pending',
                title: 'Download/Upload Deed',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications/deed-upload-pending'
            },
            {
                id   : 'applications.property.transfer.certificate',
                title: 'Certificate',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications/certificate'
            },
        ]
    },
    {
        id      : 'heirship',
        title   : 'Heirship Applications',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'heirship.application.new',
                title: 'New Application',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/heirship-application/select-property'
            },
            {
                id   : 'heirship.application.certificate',
                title: 'Certificate',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/heirship-applications/certificate'
            },
        ]
    },
    {
        id      : 'noc',
        title   : 'Bank NoC Applications',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'noc.application.new',
                title: 'New Application',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/banknoc-application/select-property'
            },
            {
                id   : 'noc.application.certificate',
                title: 'Certificate',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/banknoc-applications/certificate'
            },
        ]
    },
    {
        id      : 'downloads',
        title   : 'Downloads',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:download',
        children: [
            {
                id   : 'downloads.documents_formats',
                title: 'Document Formats/दस्तावेज नमुने',
                type : 'basic',
                icon : 'heroicons_outline:download',
                link : '/citizens/download-documents-formats'
            }
        ]
    },
   /* {
        id      : 'applications',
        title   : 'My Applications',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'applications.property.transfer.new',
                title: 'New Property Transfer',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-application/select-property'
            },
            {
                id   : 'applications.property.transfer.list',
                title: 'Property Applications List',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/citizens/transfer-applications'
            },
            {
                id      : 'applications.property.nomination.new',
                title   : 'New Heirship Transfer',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/citizens/heirship-application/select-property'
            },
            {
                id      : 'applications.property.nomination.list',
                title   : 'Heirship Applications List',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/citizens/heirship-applications'
            },
            {
                id   : 'applications.property.noc',
                title: 'New BankNoC',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/citizens/banknoc-application/select-property'
            },
            {
                id   : 'applications.property.noc',
                title: 'BankNoC Applications List',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/citizens/banknoc-applications'
            }
        ]
    },*/
    /*{
        id      : 'pages',
        title   : 'My Payments',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:document',
        children: [
            {
                id   : 'pages.activities',
                title: 'Pending Payments',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/pages/activities'
            },
            
            {
                id   : 'pages.maintenance',
                title: 'Payment History',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/pages/maintenance'
            }
        ]
    }*/
];
export const clerkNavigation: FuseNavigationItem[] = [
    {
        id      : 'clerk-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/clerk/dashboard'
    },    
    {
        id      : 'clerk.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.transfer.pending.scrutiny',
                title: 'Scrutiny',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/scrutiny-pending'
            },
            {
                id   : 'clerk.transfer.pending.verification',
                title: 'In-Person Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/verification-pending'
            },
            {
                id   : 'clerk.transfer.pending.verification.close',
                title: 'In-Person Verification Closure',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/verification-close-pending'
            },
            {
                id   : 'clerk.transfer.pending.calculation',
                title: 'Transfer Cost Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/calculation-pending'
            },
            {
                id   : 'clerk.transfer.pending.genrate_deed',
                title: 'Deed Generation',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/deed-generation-pending'
            },
            {
                id   : 'clerk.transfer.pending.deed_verification',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/deed-verification-pending'
            },
           /* {
                id   : 'clerk.transfer.pending.deed_printing',
                title: 'Stage 3 Deed Print & Handover',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/deed-printing-pending'
            },*/
           /* {
                id   : 'clerk.transfer.pending.deed_handover',
                title: 'Stage 3 Deed Handover',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/deed-handover-pending'
            },*/
            {
                id   : 'clerk.transfer.pending.certificate_verification',
                title: 'Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/certificate-pending'
            },
            {
                id   : 'clerk.transfer.pending.close_file',
                title: 'Application Closeout',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/transfer-applications/file-close-pending'
            },/*
            {
                id      : 'clerk.transfer.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/clerk/approved-transfer-applications'
            },
            {
                id      : 'clerk.transfer.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/clerk/rejected-transfer-applications'
            }*/
        ]
    },
    {
        id      : 'clerk.heirship',
        title   : 'Heirship Application',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.heirship.pending.scrutiny',
                title: 'Stage 1 Scrutiny',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/heirship-applications/scrutiny-pending'
            },
            {
                id   : 'clerk.heirship.pending.verification',
                title: 'Stage 1 Appointments',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/heirship-applications/verification-pending'
            },
            {
                id   : 'clerk.heirship.pending.verification.close',
                title: 'Stage 1 Appointment Close',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/heirship-applications/verification-close-pending'
            },
            {
                id   : 'clerk.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/heirship-applications/certificate-pending'
            },
            {
                id   : 'clerk.heirship.pending.close_file',
                title: 'Stage 5 Close Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/heirship-applications/file-close-pending'
            },
        ]
    },
    {
        id      : 'clerk.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.banknoc.pending.scrutiny',
                title: 'Stage 1 Scrutiny',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/banknoc-applications/scrutiny-pending'
            },
            {
                id   : 'clerk.banknoc.pending.close_file',
                title: 'Stage 2 Close Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/banknoc-applications/file-close-pending'
            },
        ]
    },/*
    {
        id      : 'clerk.heirship',
        title   : 'Heirship Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.heirship.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/pending-heirship-applications'
            },
            
            {
                id      : 'clerk.heirship.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/clerk/approved-heirship-applications'
            },
            {
                id      : 'clerk.heirship.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/clerk/rejected-heirship-applications'
            }
        ]
    },*/
    /*{
        id      : 'clerk.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.banknoc.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/pending-banknoc-applications'
            },
            {
                id      : 'clerk.banknoc.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/clerk/approved-banknoc-applications'
            },
            {
                id      : 'clerk.banknoc.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/clerk/rejected-banknoc-applications'
            },
            
        ]
    },*/
    /*{
        id      : 'applications',
        title   : 'Reports',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'applications.property.transfer',
                title: 'Property Transfer',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/clerk/transfer-applications'
            },
            {
                id      : 'applications.property.nomination',
                title   : 'Nomination Updation',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/clerk/nomination-applications'
            },
            {
                id   : 'applications.property.noc',
                title: 'NoC for Loan',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/clerk/noc-applications'
            }
           
         
           
        ]
    }*/
];
/*
export const clerkNavigation: FuseNavigationItem[] = [
    {
        id      : 'clerk-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/clerk/dashboard'
    },    
    {
        id      : 'clerk.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.transfer.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/pending-transfer-applications'
            },
            {
                id      : 'clerk.transfer.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/clerk/approved-transfer-applications'
            },
            {
                id      : 'clerk.transfer.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/clerk/rejected-transfer-applications'
            }
        ]
    },
    {
        id      : 'clerk.heirship',
        title   : 'Heirship Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.heirship.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/pending-heirship-applications'
            },
            
            {
                id      : 'clerk.heirship.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/clerk/approved-heirship-applications'
            },
            {
                id      : 'clerk.heirship.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/clerk/rejected-heirship-applications'
            }
        ]
    },
    {
        id      : 'clerk.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'clerk.banknoc.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/clerk/pending-banknoc-applications'
            },
            {
                id      : 'clerk.banknoc.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/clerk/approved-banknoc-applications'
            },
            {
                id      : 'clerk.banknoc.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/clerk/rejected-banknoc-applications'
            },
            
        ]
    },
    
];*/


export const tahsildarNavigation: FuseNavigationItem[] = [
    {
        id      : 'tahsildar-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/tahsildar/dashboard'
    },    
    {
        id      : 'tahsildar.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'tahsildar.transfer.pending.verification',
                title: 'Site Visit Letter',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/transfer-applications/verification-pending'
            },
            {
                id   : 'tahsildar.transfer.pending.appointment',
                title: 'In-personal Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/transfer-applications/appointment-pending'
            },
            {
                id   : 'tahsildar.transfer.pending.calculation',
                title: 'Transfer Cost Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/transfer-applications/calculation-pending'
            },
            {
                id   : 'tahsildar.transfer.pending.deed_verification',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/transfer-applications/deed-verification-pending'
            },
            {
                id   : 'tahsildar.transfer.pending.certificate_verification',
                title: 'Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/transfer-applications/certificate-pending'
            },/*
            {
                id   : 'tahsildar.transfer.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/pending-transfer-applications'
            },
            {
                id      : 'tahsildar.transfer.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/tahsildar/approved-transfer-applications'
            },
            {
                id      : 'tahsildar.transfer.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/tahsildar/rejected-transfer-applications'
            }*/
        ]
    },    
    {
        id      : 'tahsildar.heirship',
        title   : 'Heirship Application',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'tahsildar.heirship.pending.verification',
                title: 'Stage 1 Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/heirship-applications/verification-pending'
            },
            {
                id   : 'tahsildar.heirship.pending.appointment',
                title: 'Stage 1 Appointments',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/heirship-applications/appointment-pending'
            },
            
            {
                id   : 'tahsildar.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/heirship-applications/certificate-pending'
            }
        ]
    },
    {
        id      : 'tahsildar.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'tahsildar.banknoc.pending.verification',
                title: 'Stage 1 Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/banknoc-applications/verification-pending'
            }
        ]
    },/*
    {
        id      : 'tahsildar.heirship',
        title   : 'Heirship Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'tahsildar.heirship.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/pending-heirship-applications'
            },
            
            {
                id      : 'tahsildar.heirship.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/tahsildar/approved-heirship-applications'
            },
            {
                id      : 'tahsildar.heirship.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/tahsildar/rejected-heirship-applications'
            }
        ]
    },*/
    /*{
        id      : 'tahsildar.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'tahsildar.banknoc.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/tahsildar/pending-banknoc-applications'
            },
            {
                id      : 'tahsildar.banknoc.approved.applications',
                title   : 'Approved Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:check-circle',
                link    : '/tahsildar/approved-banknoc-applications'
            },
            {
                id      : 'tahsildar.banknoc.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/tahsildar/rejected-banknoc-applications'
            },
            
        ]
    },*/
    
];



export const jrenggNavigation: FuseNavigationItem[] = [
    {
        id      : 'jre-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/jre/dashboard'
    }, 
    {
        id      : 'jre_site_visit_report',
        title   : 'Site Visit Report',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:qrcode',
        link : '/jre/site-visit-report'
    }
];

export const desk2Navigation: FuseNavigationItem[] = [
    {
        id      : 'desk2-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/desk2/dashboard'
    },       
    {
        id      : 'desk2.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'desk2.transfer.pending.calculation',
                title: 'Transfer Cost Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk2/transfer-applications/calculation-pending'
            },
            {
                id   : 'desk2.transfer.pending.deed_verification',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk2/transfer-applications/deed-verification-pending'
            },
            {
                id   : 'desk2.transfer.pending.certificate_verification',
                title: 'Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk2/transfer-applications/certificate-pending'
            },/*
            {
                id   : 'desk2.transfer.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk2/pending-transfer-applications'
            },
            {
                id      : 'desk2.transfer.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/desk2/rejected-transfer-applications'
            }*/
        ]
    },
    
    {
        id      : 'desk2.heirship',
        title   : 'Heirship Application',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [            
            {
                id   : 'desk2.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk2/heirship-applications/certificate-pending'
            },
        ]
    },
    /*{
        id      : 'applications',
        title   : 'Reports',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'applications.property.transfer',
                title: 'Property Transfer',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/desk2/transfer-applications'
            },
            {
                id      : 'applications.property.nomination',
                title   : 'Nomination Updation',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/desk2/nomination-applications'
            },
            {
                id   : 'applications.property.noc',
                title: 'NoC for Loan',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/desk2/noc-applications'
            }
           
         
           
        ]
    }*/
];

export const desk3Navigation: FuseNavigationItem[] = [
    {
        id      : 'desk3-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/desk3/dashboard'
    },    
    
    {
        id      : 'desk3.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'desk3.transfer.pending.calculation',
                title: 'Stage 2 Calculation',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk3/transfer-applications/calculation-pending'
            },
            {
                id   : 'desk3.transfer.pending.deed_verification',
                title: 'Stage 3 Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk3/transfer-applications/deed-verification-pending'
            },
            {
                id   : 'desk3.transfer.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk3/transfer-applications/certificate-pending'
            },
            /*{
                id   : 'desk3.transfer.pending.applications',
                title: 'Pending Application',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk3/pending-transfer-applications'
            },
            {
                id      : 'desk3.transfer.rejected.applications',
                title   : 'Rejected Application',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:document-remove',
                link    : '/desk3/rejected-transfer-applications'
            }*/
        ]
    },
    {
        id      : 'desk3.heirship',
        title   : 'Heirship Application',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [            
            {
                id   : 'desk3.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/desk3/heirship-applications/certificate-pending'
            },
        ]
    },
    /*{
        id      : 'applications',
        title   : 'Reports',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'applications.property.transfer',
                title: 'Property Transfer',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/desk3/transfer-applications'
            },
            {
                id      : 'applications.property.nomination',
                title   : 'Nomination Updation',
                subtitle: '',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link    : '/desk3/nomination-applications'
            },
            {
                id   : 'applications.property.noc',
                title: 'NoC for Loan',
                type : 'basic',
                icon : 'heroicons_outline:calculator',
                link : '/desk3/noc-applications'
            }
           
         
           
        ]
    }*/
];

export const dyCommissionerNavigation: FuseNavigationItem[] = [
    {
        id      : 'dy-commissioner-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/dy-commissioner/dashboard'
    },    
    {
        id      : 'dy-commissioner.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [           
            {
                id   : 'dy-commissioner.transfer.pending.calculation',
                title: 'Transfer Cost Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/transfer-applications/calculation-pending'
            },
            {
                id   : 'dy-commissioner.transfer.pending.deed_verification',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/transfer-applications/deed-verification-pending'
            },
            {
                id   : 'dy-commissioner.transfer.pending.certificate_verification',
                title: 'Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/transfer-applications/certificate-pending'
            },
        ]
    },    
    {
        id      : 'dy-commissioner.heirship',
        title   : 'Heirship Application',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dy-commissioner.heirship.pending.verification',
                title: 'Stage 1 Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/heirship-applications/verification-pending'
            },
            {
                id   : 'dy-commissioner.heirship.pending.appointment',
                title: 'Stage 1 Appointments',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/heirship-applications/appointment-pending'
            },
            
            {
                id   : 'dy-commissioner.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/heirship-applications/certificate-pending'
            }
        ]
    },
    {
        id      : 'dy-commissioner.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dy-commissioner.banknoc.pending.verification',
                title: 'Stage 1 Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/dy-commissioner/banknoc-applications/verification-pending'
            }
        ]
    },
    
];

export const jointCommissionerNavigation: FuseNavigationItem[] = [
    {
        id      : 'joint-commissioner-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/joint-commissioner/dashboard'
    },    
    {
        id      : 'joint-commissioner.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'joint-commissioner.transfer.pending.calculation',
                title: 'Transfer Cost Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/transfer-applications/calculation-pending'
            },
            {
                id   : 'joint-commissioner.transfer.pending.deed_verification',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/transfer-applications/deed-verification-pending'
            },
            {
                id   : 'joint-commissioner.transfer.pending.certificate_verification',
                title: 'Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/transfer-applications/certificate-pending'
            },
        ]
    },    
    {
        id      : 'joint-commissioner.heirship',
        title   : 'Heirship Application',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'joint-commissioner.heirship.pending.verification',
                title: 'Stage 1 Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/heirship-applications/verification-pending'
            },
            {
                id   : 'joint-commissioner.heirship.pending.appointment',
                title: 'Stage 1 Appointments',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/heirship-applications/appointment-pending'
            },
            
            {
                id   : 'joint-commissioner.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/heirship-applications/certificate-pending'
            }
        ]
    },
    {
        id      : 'joint-commissioner.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'joint-commissioner.banknoc.pending.verification',
                title: 'Stage 1 Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/joint-commissioner/banknoc-applications/verification-pending'
            }
        ]
    },
    
];


export const financeControllerNavigation: FuseNavigationItem[] = [
    {
        id      : 'financial-controller-dashboard',
        title   : 'Dashboard',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/financial-controller/dashboard'
    },    
    {
        id      : 'financial-controller.transfer',
        title   : 'Property Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'financial-controller.transfer.pending.calculation',
                title: 'Transfer Cost Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/financial-controller/transfer-applications/calculation-pending'
            },
            {
                id   : 'financial-controller.transfer.pending.deed_verification',
                title: 'Deed Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/financial-controller/transfer-applications/deed-verification-pending'
            },
            {
                id   : 'financial-controller.transfer.pending.certificate_verification',
                title: 'Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/financial-controller/transfer-applications/certificate-pending'
            },
        ]
    },
    {
        id      : 'financial-controller.heirship',
        title   : 'Heirship Transfer',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'financial-controller.heirship.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/financial-controller/heirship-applications/certificate-pending'
            }
        ]
    },
    {
        id      : 'financial-controller.banknoc',
        title   : 'Bank NoC',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'financial-controller.banknoc.pending.certificate_verification',
                title: 'Stage 4 Certificate Verification',
                type : 'basic',
                icon : 'heroicons_outline:qrcode',
                link : '/financial-controller/banknoc-applications/certificate-pending'
            }
        ]
    }
];

//export const clerkNavigation: FuseNavigationItem[] = [];
//export const desk2Navigation: FuseNavigationItem[] = [];
//export const desk3Navigation: FuseNavigationItem[] = [];