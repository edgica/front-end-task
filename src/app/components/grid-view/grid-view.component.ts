import {Component, OnInit, Input} from '@angular/core';
import {GitHubSearchService} from '../../services/git-hub-search.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input() items: any;
  @Input() perPage: number = 10;
  @Input() total_count: number;
  @Input() paging_total: number = 0;
  current_page: number = 1;

  constructor(private gitSearch: GitHubSearchService) {
    gitSearch.searchWithParams(this.perPage, this.current_page).subscribe(res => {
      this.extractData(res);
    }, err => {
      alert(err.status + err.statusText);
    })
  }

  parseItem(item) {
    return JSON.stringify(item);
  }

  reInitiatePagingView(num) {
    this.perPage = num;
    this.paging_total = Math.round(this.total_count / this.perPage);
    this.loadNextPage(this.current_page);
  }

  loadNextPage(num) {
    this.gitSearch.searchWithParams(this.perPage, num).subscribe(res => {
      this.extractData(res);
    }, err => {
      alert(err.status + err.statusText);
    });

  }

  loadPage(page) {
    this.current_page = page;
    this.loadNextPage(page);
  }

  extractData(res) {
    this.items = res.items;
    this.total_count = res.total_count;
    this.paging_total = Math.round(this.total_count / this.perPage);
  }

  nextPage() {
    let next = this.current_page++;
    this.loadNextPage(next);
  }

  prevPage() {
    if (this.current_page !== 1) {
      let prev = this.current_page--;
      this.loadNextPage(prev);
    }
    return;
  }

  ngOnInit() {
  }

}
