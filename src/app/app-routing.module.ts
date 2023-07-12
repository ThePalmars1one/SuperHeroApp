import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderHeroesComponent } from './render-heroes/render-heroes.component';

const routes: Routes = [
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
