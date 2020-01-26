import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { StoredataComponent } from './storedata/storedata.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"home", component: HomeComponent},
  { path:"list", component: ListComponent},
  { path:"store", component: StoredataComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    StoredataComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
