import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PsPokeTileComponent } from './ps-poke-tile/ps-poke-tile.component';
import { PsPokeTilesComponent } from './ps-poke-tiles/ps-poke-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    PsPokeTileComponent,
    PsPokeTilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
