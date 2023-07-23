import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderHeroesComponent } from './render-heroes/render-heroes.component';
import { HomeComponent } from './home/home.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detail/:id", component: HeroesDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
