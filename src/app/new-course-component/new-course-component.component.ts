import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-component',
  templateUrl: './new-course-component.component.html',
  styleUrls: ['./new-course-component.component.css'],
})
export class NewCourseComponentComponent {
  form = new FormControl({
    topics: new FormArray([]),
  });
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
