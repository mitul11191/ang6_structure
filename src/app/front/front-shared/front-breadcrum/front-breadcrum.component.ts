import { Component, OnInit, Input } from '@angular/core';
import { ObservablesService } from '../../front-providers/observables.service';

@Component({
  selector: 'app-front-breadcrum',
  templateUrl: './front-breadcrum.component.html',
  styleUrls: ['./front-breadcrum.component.css']
})
export class FrontBreadcrumComponent implements OnInit {

	@Input() currentSlug;
	slugLength : any;
  constructor(private obs: ObservablesService) { }

  ngOnInit() {
  	// count of array with -1 value to compare with index
  	this.slugLength = (this.currentSlug).length - 1;
  	//observable demo for the subscribe
  	// this.obs.currentSharedValue.subscribe((value: any)=>{
  	// 	console.log("value", value);
  	// });
  }

}
