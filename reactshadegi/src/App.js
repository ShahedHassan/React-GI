import { Component } from 'react';  
import BasicInfo from './components/BasicInfo';


let people = [
  {
    name: 'Shade',
    phone: '2142351293',
    age: 22,
    favoriteFood: 'sushi'
  },
  {
    name: 'Somesh',
    phone: '1234567890',
    age: 20,
    favoriteFood: 'glizzys'
  },
  {
    name: 'Matteo',
    phone: '0987654321',
    age: 25,
    favoriteFood: 'babies'
  },
  {
    name: 'Robert',
    phone: '6574839201',
    age: 26,
    favoriteFood: 'Sugar'
  },
  {
    name: 'Banjo',
    phone: '0192837465',
    age: 1,
    favoriteFood: 'garbage'
  }
]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />
  }
  )
}

export default class App extends Component {  
  // EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. 
  // Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
  constructor(props){  
    super(props);  
    this.state = {
        person: {
        }
    }
  }  
  // VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date 
  // of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
  // MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it 
  // and import it as ‘BasicInfo’. (This challenge should not change the look of the page)
    render() {
      return (iteratePeople(people))
  }
}