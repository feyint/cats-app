import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCatsComponent } from './view-cats/view-cats.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCatsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocCatRoutingModule {}
