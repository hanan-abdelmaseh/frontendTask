import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HouseComponent } from './components/house/house.component';
import { PlaceComponent } from './components/place/place.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { SendingComponent } from './components/sending/sending.component';
import { DescriptionComponent } from './components/description/description.component';
import { EditorModule } from 'primeng/editor';
import { TypingComponent } from './components/typing/typing.component';
import { StepperComponent } from './components/stepper/stepper.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    PlaceComponent,
    SucessComponent,
    SendingComponent,
    DescriptionComponent,
    TypingComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
