import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isLoading = true;
  constructor() { }

  ngOnInit(): void {
    this.isLoading = false;
  }

}
