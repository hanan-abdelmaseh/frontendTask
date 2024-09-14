import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { PlaceComponent } from './components/place/place.component';
import { SendingComponent } from './components/sending/sending.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { TypingComponent } from './components/typing/typing.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component:HomeComponent},
  {path: 'house' , component:HouseComponent},

  {path: 'place' , component:PlaceComponent},

  {path: 'sending' , component:SendingComponent},

  {path: 'sucess' , component:SucessComponent},

  {path: 'typing' , component:TypingComponent},
  { path:'description' , component:DescriptionComponent}

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
