import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sending',
  templateUrl: './sending.component.html',
  styleUrls: ['./sending.component.scss']
})
export class SendingComponent {
  constructor(private _Router:Router){}
  back(){
    this._Router.navigateByUrl('/typing')
  }
}
