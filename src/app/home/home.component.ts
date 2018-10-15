import { Component, OnInit, OnChanges, Input, SimpleChanges, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '../../../node_modules/@ngx-formly/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  form = new FormGroup({});
  @Input() model;
  options: FormlyFormOptions = {};
  @Input() fields: FormlyFieldConfig[];

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges) {
    debugger;
    console.log('on changes');
    console.log(this.fields);
  }

  ngOnInit() {
    debugger;

    console.log('on Init');
    console.log(this.fields);

    setTimeout(() => {
      console.log('on timeout');
      console.log(this.fields);
    }, 0);
  }



  submit() {
    debugger;

    console.log('on submit');

    console.log(this.fields);
    alert(JSON.stringify(this.model));
  }


}
