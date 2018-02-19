import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	countries = [
		{
		  id: 1, name: "USA",

		  states: [
		    { name: "Arizona" },
		    { name: "Alaska" }
		  ]
		},
		{
		  id: 2, name: "India",

		  states: [
		    { name: "Gujarat" },
		    { name: "Goa" },
		    { name: "Punjab" }
		  ]
		}
	]
	states = [];

	selectedCity = this.states[1];

	onChange(state) {
		this.states=this.countries.filter(x => x.id === state.id)[0].states;
	}

  _countries = [
  	{id:1,name:'USA'},
  	{id:2,name:'India'}
  ]

  _states = [
  	{id:1, countryid:1, name:'Arizona'},
  	{id:2, countryid:1, name:'Arizona2'},
  	{id:3, countryid:2, name:'Gujarat'},
  	{id:4, countryid:2, name:'Gujarat'}
  ]
}