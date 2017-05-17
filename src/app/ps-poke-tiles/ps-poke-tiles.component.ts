import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PsPokeTileComponent } from '../ps-poke-tile/ps-poke-tile.component';
import * as _ from 'lodash';

@Component({
  selector: 'ps-poke-tiles',
  templateUrl: './ps-poke-tiles.component.html',
  styleUrls: ['./ps-poke-tiles.component.css']
})
export class PsPokeTilesComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  filteredProperties: string[];
  sortSubscription: Subscription;
  filterSubscription: Subscription;
  filterDropdownSubscription: Subscription;

  constructor(private pokemonService: PokemonService) {
    this.sortSubscription = this.pokemonService.getSortPropertyObs().subscribe(data => {
      this.pokemons = this.pokemonService.getSortedPokemons(data);
      this.filteredPokemons = this.pokemonService.getFilteredPokemons(this.pokemons, this.filteredProperties);
    });

    this.filterSubscription = this.pokemonService.getFilterObs().subscribe(data => {
      if (data.isChecked) {
        this.filteredProperties.push(data.prop);
      } else {
        _.pull(this.filteredProperties, data.prop);
      }
      this.filteredPokemons = this.pokemonService.getFilteredPokemons(this.pokemons, this.filteredProperties);
    });

    this.filterDropdownSubscription = this.pokemonService.getFilterDropdownObs().subscribe(data => {
      this.filteredPokemons = this.pokemonService.getFilteredPokemons(this.pokemons, data);
    });
  }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.filteredProperties = [];
    this.filteredPokemons = this.pokemonService.getFilteredPokemons(this.pokemons, this.filteredProperties);
  }

  ngOnInit() {
    this.getPokemons();
  }

  ngOnDestroy() {
    this.sortSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
    this.filterDropdownSubscription.unsubscribe();
  }
}
