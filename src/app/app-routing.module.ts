import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AbbrListComponent} from "./abbr-list/abbr-list.component";

const routes: Routes = [
  {path: 'exercises', component: AbbrListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {
}
