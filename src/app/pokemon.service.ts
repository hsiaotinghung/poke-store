import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonService {
  private sortSubject = new Subject<string>();
  private filterSubject = new Subject<any>();
  constructor() { }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getSortedPokemons(selectedProperty: string): Pokemon[] {
    return _.sortBy(POKEMONS, selectedProperty);
  }

  getFilteredPokemons(pokemons: Pokemon[], filteredProperties: string[]) {
    return _.isEmpty(filteredProperties) ?
            pokemons :
            pokemons.filter(function(pokemon){
              return _.intersection(pokemon.type, filteredProperties).length !== 0;
            });
  }

  sendSortPropertyEvt(selectedProperty: string) {
    this.sortSubject.next(selectedProperty);
  }

  getSortPropertyObs(): Observable<string> {
    return this.sortSubject.asObservable();
  }

  sendFilterEvt(filterProperty: string, isChecked: Boolean) {
    this.filterSubject.next({
      prop: filterProperty,
      isChecked: isChecked
    });
  }

  getFilterObs(): Observable<any> {
    return this.filterSubject.asObservable();
  }
}
