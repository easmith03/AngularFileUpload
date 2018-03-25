import { Component } from '@angular/core';
import { IButton } from 'selenium-webdriver';
import {HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Hello World App';
  uploadFile: File = null;
  firstName: string = 'Dudley';
  lastName: string = 'Nowrite';

  constructor(private http: HttpClient) { }

  /**
   * Save file field when changed in the html input field
   */
  handleFileInput(files: FileList) {
    //this.fileToUpload = files.item(0);
    this.uploadFile = files[0]
    console.log('handleFileInput', this.uploadFile);
  }  

  /**
   * Save Text fields when changed in the html input fields
   */
  handleFirstNameInput(formChange: any) {
    console.log('handleFirstNameInput', formChange.value);
    this.firstName = formChange.value;
  }  
  handleLastNameInput(formChange: any) {
    this.lastName = formChange.value;
  } 

//  handleFormSubmit(form: FormData) {
//    //this.fileToUpload = files.item(0);
//    console.log('form', FormData);
//  }  

  /**
   * When the submit button is clicked
   * Build formData and call the api to save the file and text data.
   */
  submitButton(button: IButton) {
    //this.fileToUpload = files.item(0);
    console.log('button', button);

    let formData = new FormData();
    formData.append('image', this.uploadFile);
    formData.append('lname', this.lastName);
    formData.append('fname', this.firstName);

    let params = new HttpParams();
    let headers = new HttpHeaders(); //{'Content-Type': 'application/x-www-form-urlencoded'}
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //let headers = new Headers({ 'Content-Type': 'application/json' });
   // let headers: {'Content-Type': 'application/x-www-form-urlencoded'};
    const options = {
      params: params,
      headers: headers
    };

    console.log('submit');
    const req = new HttpRequest('POST', "http://localhost:8081/imageUpload", formData, options);
    this.http.request(req)
    .subscribe(function (event) {
        console.log('debug2', event);
    });

  }  

}
