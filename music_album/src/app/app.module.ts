import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlbumSearchBarComponent } from './album-search-bar/album-search-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ItuneServiceService } from './services/itune-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchBarComponent,
    SearchBarComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ItuneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
