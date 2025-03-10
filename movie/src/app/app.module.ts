import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './core/services/movie.service';
import { MoviePipe } from './shared/pipe/movie.pipe';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { DivisionComponent } from './components/home/division/division.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { MainSectionComponent } from './components/home/main-section/main-section.component';
import { LoginComponent } from './components/login/login.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CoreModule } from './core/core.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    MoviePipe,
    HomePageComponent,
    DivisionComponent,
    MainSectionComponent,
    LoginComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule  
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
