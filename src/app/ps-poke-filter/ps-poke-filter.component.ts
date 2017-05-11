import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { PokemonTypes } from '../pokemon';

@Component({
  selector: 'ps-poke-filter',
  templateUrl: './ps-poke-filter.component.html',
  styleUrls: ['./ps-poke-filter.component.scss']
})
export class PsPokeFilterComponent implements OnInit {
  pokemonTypes = PokemonTypes;
  pokeFilter = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
