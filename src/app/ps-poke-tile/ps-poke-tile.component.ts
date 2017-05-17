import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'ps-poke-tile',
  templateUrl: './ps-poke-tile.component.html',
  styleUrls: ['./ps-poke-tile.component.scss']
})
export class PsPokeTileComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokeDetailsId: string;
  pokeDetailsClass: string;

  ngOnInit() {
    this.pokeDetailsId = 'pokeDetail' + this.pokemon.id;
    this.pokeDetailsClass = '#' + this.pokeDetailsId;
  }
}
