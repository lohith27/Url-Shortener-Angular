import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url-table',
  templateUrl: './url-table.component.html',
  styleUrls: ['./url-table.component.css']
})
export class UrlTableComponent implements OnInit {

  urls;
  constructor(private urlService: UrlService) { 
    this.urlService.getUrls().subscribe((data) => {
      console.log(data);
      this.urls = data;
    })
  }

  ngOnInit(): void {
  }

}
