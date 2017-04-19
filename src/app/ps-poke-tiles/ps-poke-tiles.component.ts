import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PsPokeTileComponent } from '../ps-poke-tile/ps-poke-tile.component';

@Component({
  selector: 'ps-poke-tiles',
  templateUrl: './ps-poke-tiles.component.html',
  styleUrls: ['./ps-poke-tiles.component.css'],
  providers: [ PokemonService]
})
export class PsPokeTilesComponent implements OnInit {

  pokemons: Pokemon[];
  
  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
