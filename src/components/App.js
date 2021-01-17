import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selectedAnimalType) => {
    // console.log(selectedAnimalType)
    // debugger
    this.setState({
      filters: {...this.state.filters, type: selectedAnimalType}
    })

  }

  onFindPetsClick = () => {
    // debugger
    if(this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(response => response.json())
        .then(petsData => {
          this.setState({
            pets: petsData
          })
        })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(petsData => {
           this.setState({
              pets: petsData
           })
        })
    }
  }

  onAdoptPet = (adoptedPetId) => {
    let newPetData = this.state.pets.map(pet => {
      if(pet.id === adoptedPetId) {
        return (
          {...pet, isAdopted: true}
        )
      } else {
        return pet
      }
    })

    this.setState({
      pets: newPetData
    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} 
                       onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} 
                          pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
