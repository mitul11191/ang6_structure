import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ObservablesService {

	private sharedValue = new BehaviorSubject<object>([]);
	currentSharedValue = this.sharedValue.asObservable();

	constructor() { }

	changeSharedValue(value){
		this.sharedValue.next(value);
	}

}
