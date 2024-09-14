import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  
  isSubmitted = false;

  constructor(public fb: FormBuilder , private _Router:Router) { }

  /*########### Form ###########*/
  houseForm = this.fb.group({
    houseItem: ['', [Validators.required]]
  })
 @Output() stepData = new EventEmitter<any>();

 

  sendDataToParent() {
    this.stepData.emit(this.houseForm.value);  // Emit data to parent component;
    this._Router.navigateByUrl('/description');
   
  }

  back(){
    this._Router.navigateByUrl('/place')
  }
  get optionValue() {
    return this.houseForm.get('houseItem')?.value;
  }
}
