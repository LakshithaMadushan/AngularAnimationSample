# SampleApp

To install angular animation package :
```
> npm install @angular/animations@latest --save
```
```javascript
animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
```

```javascript
<p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
```

```javascript
export class AppComponent {
  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
```

## Adding Style During Transitions

```javascript
        transition('small <=> large', animate('300ms ease-in', style({
          transform: 'translateY(40px)'
        }))),
```

## Adding Keyframe Animations

```javascript
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
```
