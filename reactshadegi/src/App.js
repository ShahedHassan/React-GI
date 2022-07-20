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
  // easy
  constructor(props){  
    super(props);  
    this.state = {
        person: {
        }
    }
  }  
  // very easy/ medium
    render() {
      return (iteratePeople(people))
  }
}