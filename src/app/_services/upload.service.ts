import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  upload(fileToUpload : File,fileToUpload2?:File){
    let formData : FormData = new FormData()
    formData.append('Icone', fileToUpload, fileToUpload.name)
    if(fileToUpload2 != null)
      formData.append('Image',fileToUpload2,fileToUpload2.name)
    return formData
  }
}
