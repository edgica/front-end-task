import { Routes } from "@angular/router";

import { AppSearchPageComponent } from "./search-page/components/search-page.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: AppSearchPageComponent,
  },
];
