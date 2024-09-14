import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
text='';

isSubmitted = false;

constructor(public fb: FormBuilder , private _Router:Router) { }

/*########### Form ###########*/
descriptionForm = this.fb.group({
  descriptionItem1: ['', [Validators.required]],
  descriptionItem2: ['', [Validators.required]],

})
@Output() stepData = new EventEmitter<any>();



sendDataToParent() {
  this.stepData.emit(this.descriptionForm.value);  // Emit data to parent component;
  this._Router.navigateByUrl('/typing');
 
}

back(){
  this._Router.navigateByUrl('/house')
}
}
