import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcPage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: ImcPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
