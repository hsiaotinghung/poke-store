import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PsAboutComponent } from './ps-about/ps-about.component';
import { PsPokeTileComponent } from './ps-poke-tile/ps-poke-tile.component';
import { PsPokeTilesComponent } from './ps-poke-tiles/ps-poke-tiles.component';
import { PsPokeSortComponent } from './ps-poke-sort/ps-poke-sort.component';
import { PsPokeFilterComponent } from './ps-poke-filter/ps-poke-filter.component';
import { PsHeaderComponent } from './ps-header/ps-header.component';
import { PsStoreComponent } from './ps-store/ps-store.component';

import { PokemonService } from './pokemon.service';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { PsFooterComponent } from './ps-footer/ps-footer.component';

const appRoutes: Routes = [
  {
    path: 'store',
    component: PsStoreComponent
  },
  {
    path: 'about',
    component: PsAboutComponent
  },
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  { 
    path: '**',
    redirectTo: '/store'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PsPokeTileComponent,
    PsPokeTilesComponent,
    PsPokeSortComponent,
    PsPokeFilterComponent,
    PsAboutComponent,
    PsHeaderComponent,
    PsStoreComponent,
    PsFooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MultiselectDropdownModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
