import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';


@Component({
  selector: 'app-front-app',
  templateUrl: './front-app.component.html',
  styleUrls: ['./front-app.component.css']
})
export class FrontAppComponent implements OnInit {

  constructor(private _localStorageService:LocalStorageService) { }

  ngOnInit() {
  }

}
