import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PsPokeTileComponent } from './ps-poke-tile/ps-poke-tile.component';
import { PsPokeTilesComponent } from './ps-poke-tiles/ps-poke-tiles.component';
import { PsPokeSortComponent } from './ps-poke-sort/ps-poke-sort.component';

import { PokemonService } from './pokemon.service';
import { PsPokeFilterComponent } from './ps-poke-filter/ps-poke-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PsPokeTileComponent,
    PsPokeTilesComponent,
    PsPokeSortComponent,
    PsPokeFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
