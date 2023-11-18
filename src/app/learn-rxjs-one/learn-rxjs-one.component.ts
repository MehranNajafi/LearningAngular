import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'learn-rxjs-one',
  templateUrl: './learn-rxjs-one.component.html',
  styleUrls: ['./learn-rxjs-one.component.css']
})
export class LearnRxjsOneComponent {
  ngOnInit() {
    of('test1', 'test2').subscribe(
      next => console.log('test' + next),
      err => console.log('test ' + err),
      () => console.log('finish')
    );
  }
}
