import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{


  isSubmitted = false;
  manualCheck=false;
  constructor(public fb: FormBuilder , private _Router:Router) { }
  ngOnInit(): void {
  
  }

  /*########### Form ###########*/
  CheckForm = this.fb.group({
    checkItem: ['', [Validators.required]],
    projectName: ['', [Validators.required]],
    
  })
 @Output() stepData = new EventEmitter<any>();

 // data = { name: 'Step 1 Data' };

  sendDataToParent() {

    this.stepData.emit(this.CheckForm.value);  // Emit data to parent component;
    this._Router.navigateByUrl('/place')
  }
  get optionValue() {
    return this.CheckForm.get('checkItem')?.value;
  }
  
}
