import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { CoreModule } from '../../core/core.module';
import { MovieDetailsResolverService } from '../../core/services/movie-details-resolver.service';
import { roleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: ':id', component: MovieDetailsComponent, resolve: {movieDetails: MovieDetailsResolverService}, canActivate: [roleGuard] },
];

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, CoreModule],
  exports: [RouterModule]
})
export class MovieListModule { }
