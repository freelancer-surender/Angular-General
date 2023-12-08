import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  states = [
    { name: "New Delhi", id: 1 },
    { name: "Washington, D.C.", id: 2 },
    { name: "Islamabad", id: 3 },
    { name: "Berlin", id: 4 },
    { name: "Tunis", id: 5 },
    { name: "Cairo", id: 6 },
    { name: "Brasília", id: 7 },
    { name: "Ottawa", id: 8 },
  ];

  constructor() { }

  getState(id: number) {
    console.log("getState function is called for id: ", id);
    let data = this.states.find(state => state.id === id);
    return data;
  }

}
