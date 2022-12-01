import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { MiapiService } from '../api/miapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  getdata: any[] = [];
  public usuarios = [];

  constructor(private api: MiapiService) {}
  ngOnInit() {
    this.api.GetUsuarios().subscribe((data) => (this.usuarios = data));

  }
}
