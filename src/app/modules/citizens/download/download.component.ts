import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { DownloadService } from 'app/modules/citizens/download/download.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder} from "@angular/forms";
 
export interface download{
  download: string;
  document: string;
  // fileUrl;
}
const ELEMENT_DATA: download[] = [
  {document: 'lease/भाडेपट्टा ', download: 'Download Here'},
  {document: 'allotment letter / वाटपपत्र', download: 'Download Here'},
  {document: 'Assignment deed / असाइनमेंट डिड ', download: 'Download Here'},
  {document: 'Affidavit of No Debt / Encumbrance कर्ज / बोजा नसल्याचे प्रतिज्ञापत्र', download: 'Download Here'},
  {document:'Guarantee हमीपत्र', download:'Download Here'},
];

@Component({
    selector       : 'download',
    templateUrl    : './download.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadComponent implements OnInit, OnDestroy
{
  displayedColumns: string[] = ['document', 'download'];
  dataSource = ELEMENT_DATA;
  private _unsubscribeAll: any;
  fileUrl;
   
    /**
     * Constructor
     */
    constructor(
      private sanitizer: DomSanitizer,
        private _downloadService: DownloadService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _changeDetectorRef: ChangeDetectorRef,
    )
    {
    }

  
    /**
     * On init
     */
     ngOnInit(): void
     {
       // Get the download
      //  const data = 'some text';
      //   const blob = new Blob([data], {
      //       type: 'application/octet-stream'
      //   });
      //   this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

      
    }

    



     /**
     * On destroy
     */
    ngOnDestroy(): void
    {
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
     */

    /**
     * Upload avatar
     *
     * @param fileList
     */
    //  uploadAvatar(fileList: FileList): void
    //  {
    //      // Return if canceled
    //      if ( !fileList.length )
    //      {
    //          return;
    //      }
 
    //      const allowedTypes = ['image/jpeg', 'image/png'];
    //      const file = fileList[0];
 
    //      // Return if the file is not allowed
    //      if ( !allowedTypes.includes(file.type) )
    //      {
    //          return;
    //      }
 
    //      // Upload the avatar
    //      this._contactsService.uploadAvatar(this.contact.id, file).subscribe();
    //  }
 
     /**
      * Remove the avatar
      */
    //  removeAvatar(): void
    //  {
    //      // Get the form control for 'avatar'
    //      const avatarFormControl = this.contactForm.get('avatar');
 
    //      // Set the avatar as null
    //      avatarFormControl.setValue(null);
 
    //      // Set the file input value as null
    //      this._avatarFileInput.nativeElement.value = null;
 
    //      // Update the contact
    //      this.contact.avatar = null;
    //  }
 

}