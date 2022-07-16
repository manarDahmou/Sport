import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let matches = [
      { id: 1, teamOne: 'FCB', teamTwo: 'RMD', scoreOne: 1, scoreTwo: 3 },
      { id: 2, teamOne: 'SEV', teamTwo: 'ATM', scoreOne: 2, scoreTwo: 3 },
      { id: 3, teamOne: 'ARS', teamTwo: 'LIV', scoreOne: 0, scoreTwo: 4 },
      { id: 4, teamOne: 'JUV', teamTwo: 'INT', scoreOne: 1, scoreTwo: 2 },
      { id: 5, teamOne: 'JUV', teamTwo: 'INT', scoreOne: 2, scoreTwo: 0 }
    ];

    let teams = [
      { id: 1, name:'FCB', stadium: 'Camp New', owner: 'Salah', foundation: 1899},
      { id: 2, name:'RMD', stadium: 'Bernabeu', owner: 'Karim', foundation: 1902},
      { id: 3, name:'JUV', stadium: 'Rades', owner: 'Med', foundation: 1990},
      { id: 4, name:'INT', stadium: 'Camp New', owner: 'Ali', foundation: 2002}
    ];

    return { matches, teams };

  }
}