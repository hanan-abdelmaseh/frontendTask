import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {


  
  isSubmitted = false;

  constructor(public fb: FormBuilder , private _Router:Router) { }

  /*########### Form ###########*/
  placeForm = this.fb.group({
    placeItem: ['', [Validators.required]]
  })
 @Output() stepData = new EventEmitter<any>();

  data = { name: 'Step 3 Data' };

  sendDataToParent() {
    this.stepData.emit(this.placeForm.value);  // Emit data to parent component;
    this._Router.navigateByUrl('/house');
    //console.log(this.placeForm.value)
  }
 
back(){
  this._Router.navigateByUrl('/home')
}
  
}
