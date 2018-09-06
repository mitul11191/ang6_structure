import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  	title = 'App Component';

	constructor(private renderer: Renderer2) {
		this.renderer.addClass(document.body, 'login-page');
	}

}
