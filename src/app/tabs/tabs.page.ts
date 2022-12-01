import { Component, OnDestroy, OnInit } from '@angular/core';
import { MiapiService } from '../api/miapi.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  getdata: any[] = [];
  public usuarios = [];

  constructor(private api: MiapiService) {}
  ngOnInit() {
    this.api.GetUsuarios().subscribe((data) => (this.usuarios = data));

  }
}
