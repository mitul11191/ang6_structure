import { Injectable } from '@angular/core';

@Injectable()
export class ReUsableService {

	constructor() { }
      /**
       *@uses it will read the file and return array
       *@author Nitin Prajapati
       *@param event : event of the file upload
       *@param file : var of the file which is in parent class
       *@param url : var of the url which is in parent class
       *@param imageUpload : var of the imageUpload which is in parent class
       *@return array : it has specfic values based on key
                       1. is file 2. is url and third is the 3 imageUplaod flag
      */  
  	  readUrl(event,file,url,imageUpload) {
           var imageUplaodArr = this.imageUploaded(event.target,url,imageUpload);
         if(imageUplaodArr[1]) {  
            var reader = new FileReader();
            reader.onload = (event:any) => { url = event.target.result; }
            reader.readAsDataURL(event.target.files[0]);
            let fileList: FileList = event.target.files;
            file = fileList[0];
            return [file,url,imageUpload];
        }else{
            return [file,url,imageUpload];
        }
    }
    /**
       *@uses it will read the file and return array
       *@author Nitin Prajapati
       *@param event : event of the file upload
       *@param url : var of the url which is in parent class
       *@param imageUpload : var of the imageUpload which is in parent class
       *@return array : it has specfic values based on key
                       1. is url and  2 imageUplaod flag
      */  
    imageUploaded(event,url,imageUpload){
        let fileList: FileList = event.files;
        if(fileList.length > 0) {  
            let fileSize:number=fileList[0].size;
            if(fileSize>=10240 && fileSize<=1048576){ 
                imageUpload = true;
            } else{
                url = null;
                imageUpload = false;
            }
        }else{
            url = null;
            imageUpload = false;
        }
        return [url,imageUpload];
    }

}
