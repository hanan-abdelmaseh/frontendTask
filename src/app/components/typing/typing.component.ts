import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent {
  constructor(public fb: FormBuilder , private _Router:Router) { }

  /*########### Form ###########*/
  typingForm = this.fb.group({
    typingItem: ['', [Validators.required]],
   
  
  })
  @Output() stepData = new EventEmitter<any>();
  
  
  
  sendDataToParent() {
    this.stepData.emit(this.typingForm.value);  // Emit data to parent component;
    this._Router.navigateByUrl('/sending');
   
  }
  back(){
    this._Router.navigateByUrl('/description')
  }
}
