import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { NoSlidePage } from '../no-slide/no-slide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public slides: any[];

  constructor(public navCtrl: NavController, fb: FormBuilder) {
    // Define slides with inputs here
    this.slides = [
      {
        title: 'Slide 1',
        message: `This is the first slide in the deck`,
        inputs: [
          {
            name: 'name',
            label: 'Name',
            type: 'text'
          },
          {
            name: 'age',
            label: 'Age',
            type: 'range'
          },
          {
            name: 'gender',
            label: 'Gender',
            type: 'select',
            options: [
              {value: 'male', label: 'Male'},
              {value: 'female', label: 'Female'},
              {value: 'neutral', label: 'Neutral'}
            ]
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email'
          }
        ],
        form: fb.group({
          name: new FormControl(),
          age: new FormControl(),
          gender: new FormControl(),
          email: new FormControl()
        })
      },
      {
        title: 'Slide 2',
        message: `This is the second slide in the deck`,
        inputs: [
          {
            name: 'name',
            label: 'Name',
            type: 'text'
          },
          {
            name: 'age',
            label: 'Age',
            type: 'range'
          },
          {
            name: 'gender',
            label: 'Gender',
            type: 'select',
            options: [
              {value: 'male', label: 'Male'},
              {value: 'female', label: 'Female'},
              {value: 'neutral', label: 'Neutral'}
            ]
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email'
          }
        ],
        form: fb.group({
          name: new FormControl(),
          age: new FormControl(),
          gender: new FormControl(),
          email: new FormControl()
        })
      },
    ]
  }

  showPage () {
    this.navCtrl.push(NoSlidePage);
  }

}
