import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';



// Define the possible steps
type StepName = 'home' | 'place' | 'house'; 



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
 

  stepData: Record<StepName, any> = {
    'home': null,
    'place': null,
    'house': null
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url = this.router.url;
      const stepName = url.split('/').pop() as StepName;
      if (stepName) {
        this.handleStepChange(stepName);
      }
    });
  }

  onStepActivated(component: any) {
    // Ensure the component has the correct event emitter
    if (component && component.stepData) {
      component.stepData.subscribe((data: any) => {
        const stepName = this.router.url.split('/').pop() as StepName;
        if (stepName) {
          this.stepData[stepName] = data;
          console.log( this.stepData[stepName])
        }
      });
    }
  }

  handleStepChange(stepName: StepName) {
    console.log(`Current Step: ${stepName}`);
  }

 
}
