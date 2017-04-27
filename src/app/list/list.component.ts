import { Component, OnInit } from '@angular/core';
import {MainService} from "../share/main.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: string;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getData().subscribe(data => {this.data = data; console.log(data)});
  }
}
