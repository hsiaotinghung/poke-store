import { Component, OnInit } from '@angular/core';
import { PsPokeTilesComponent } from '../ps-poke-tiles/ps-poke-tiles.component';
import { PsPokeSortComponent } from '../ps-poke-sort/ps-poke-sort.component';
import { PsPokeFilterComponent } from '../ps-poke-filter/ps-poke-filter.component';

@Component({
  selector: 'ps-store',
  templateUrl: './ps-store.component.html',
  styleUrls: ['./ps-store.component.scss']
})
export class PsStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
