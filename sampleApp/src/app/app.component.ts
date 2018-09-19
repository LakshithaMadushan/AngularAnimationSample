import {Component} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    // the fade-in/fade-out animation.
    trigger('fadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),

    // scaling animation trigger on button click
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.5)',
      })),
      transition('small <=> large', animate('500ms ease-in')),
    ])

  ]
})
export class AppComponent {

  state: string = 'small';

  // changes state when button clicks
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
