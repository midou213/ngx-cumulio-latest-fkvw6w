import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxCumulioService } from 'ngx-cumulio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'my-website';
  dashboardId = '';
  tabIdx: 0;
  constructor(
    private ngxCumulioService: NgxCumulioService
  ) {}

  dashboards = [
    {
      name: 'Facebook',
      dashboardId: '763177aa-9b93-4ae7-903e-3cb07dc593d8'
    },
    {
      name: 'LinkedIn',
      dashboardId: '722fa789-89c8-4149-be4d-bc3eb348a65f'
    },
    {
      name: 'Adwords',
      dashboardId: 'eb8a3bec-2d19-4229-b40a-2f31ad379780'
    }
  ];

  ngOnInit() {
    this.changeTab(0);
  }

  changeTab(idx): void {
    this.tabIdx = idx;
    const dashboardId = this.dashboards[this.tabIdx].dashboardId;
    this.dashboardId = dashboardId;
  }

  refreshData() {
    this.ngxCumulioService.refreshData().subscribe();
  }

  ngOnDestroy() {
  }
}
