import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as _ from "lodash"

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons'; 

@Injectable()
export class PokemonService {
  private subject = new Subject<string>();
  constructor() { }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getSortedPokemons(selectedProperty: string): Pokemon[] {
    return _.sortBy(POKEMONS, selectedProperty);
  }

  sendSortPropertyEvt(selectedProperty: string) {
    console.log('send: '+ selectedProperty);
    this.subject.next(selectedProperty);
  }
  
  getSortProperty(): Observable<string> {
    return this.subject.asObservable();
  }
}
