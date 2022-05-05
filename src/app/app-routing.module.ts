import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildPcComponent } from './build-pc/build-pc.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { PcPartsComponent } from './pc-parts/pc-parts.component';

const routes: Routes = [
  { path: '', redirectTo: '/build-pc', pathMatch: 'full' },
  { path: 'build-pc', component: BuildPcComponent },
  { path: 'pc-parts', component: PcPartsComponent },
  { path: 'my-order', component: MyOrderComponent },
  { path: 'check-out', component: CheckOutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
