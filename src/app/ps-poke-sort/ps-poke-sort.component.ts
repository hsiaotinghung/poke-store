import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'ps-poke-sort',
  templateUrl: './ps-poke-sort.component.html',
  styleUrls: ['./ps-poke-sort.component.css']
})
export class PsPokeSortComponent implements OnInit {
  sortBy = new FormControl();
  pokeProperties = ['id', 'name'];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  onChange(selectedValue) {
    this.pokemonService.sendSortPropertyEvt(selectedValue);
  }

}
