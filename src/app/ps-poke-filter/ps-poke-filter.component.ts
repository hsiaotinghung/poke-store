import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { PokemonTypes } from '../pokemon';

import * as _ from 'lodash';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'ps-poke-filter',
  templateUrl: './ps-poke-filter.component.html',
  styleUrls: ['./ps-poke-filter.component.scss']
})
export class PsPokeFilterComponent implements OnInit {
  pokemonTypes = PokemonTypes;
  pokeFilter = new FormControl();
  optionsModel: string[];
  myOptions: IMultiSelectOption[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.myOptions = _.map(this.pokemonTypes, (pokeType) => {
      return {name: pokeType, id: pokeType};
    });
  }

  onChange(e) {
    this.pokemonService.sendFilterEvt(e.name, e.checked);
  }

  onDropdownChange(e) {
    this.pokemonService.sendFilterDropdownEvt(e);
  }

}
