import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  @Input() buttonDetailObj:any = {saveButtonValidate:false};
  constructor() { }

  ngOnInit() {
  	
  }

}
