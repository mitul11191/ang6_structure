import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-disp-validation',
	templateUrl: './disp-validation.component.html',
	styleUrls: ['./disp-validation.component.css']
})
export class DispValidationComponent implements OnChanges {

	@Input() errors: Array<any>;
	displayMessage: Array<any>;
	constructor() {	 }

	ngOnChanges() {
		if(this.errors !== undefined) {
			this.displayMessage = this.errors;
		} else {
			this.displayMessage = [];
		}
	}

}
