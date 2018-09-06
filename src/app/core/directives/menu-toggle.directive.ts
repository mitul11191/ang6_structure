import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appMenuToggle]'
})
export class MenuToggleDirective {

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	@Input('toggleFrom') toggleActiveFrom: string;
	flag: boolean = false;

	@HostListener('click') onMouseLeave() {
		this.highlightMenu();
	}

	private highlightMenu() {

		// Sidebar toggle
		if(this.toggleActiveFrom == 'admin-side-bar') {
			if(!this.el.nativeElement.classList.contains('menu-open')) {
				this.el.nativeElement.classList.add('menu-open');
				this.el.nativeElement.classList.add('active');
			}else{
				this.el.nativeElement.classList.remove('menu-open');
				this.el.nativeElement.classList.remove('active');
			}
		}

		// Header toggle
		if(this.toggleActiveFrom == 'admin-header-bar') {
			if(!this.el.nativeElement.classList.contains('open')) {
				this.el.nativeElement.classList.add('open');
			}else{
				this.el.nativeElement.classList.remove('open');
			}
		}

		// Admin Body Toggle
		if(this.toggleActiveFrom == 'body-tag') {
			if(this.flag == false) {
				 this.renderer.addClass(document.body, 'sidebar-collapse');
				 this.flag = true;
			}else{
				 this.renderer.removeClass(document.body, 'sidebar-collapse');
				 this.flag = false;
			}
		}

	}

}
