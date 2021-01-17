import React from 'react'

class Pet extends React.Component {


  handleShowGender = () => {
    let pet = this.props.pet

    if(pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  handleAdoptPet = () => {
    
    let pet = this.props.pet
    
    if(pet.isAdopted) {
      return (
        <button className="ui disabled button">
          Already adopted
        </button> 
      ) 
    } else {
      return (
        <button className="ui primary button" 
                onClick={() => this.props.onAdoptPet(pet.id)} 
        >
          Adopt pet
        </button>
      )
    }

  }


  render() {

    const pet = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* {pet.gender === 'male' ? '♂' : '♀'} */}
            {this.handleShowGender()}
            {pet.name}
            {/* PET NAME */}
          </a>
          <div className="meta">
            {/* <span className="date">PET TYPE</span> */}
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            {/* <p>Age: PET AGE</p> */}
            <p>Age: {pet.age}</p>
            {/* <p>Weight: PET WEIGHT</p> */}
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* {pet.isAdopted ? 
            <button className="ui disabled button">Already adopted</button> 
            :
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)} >
              Adopt pet
            </button>
          } */}
          {this.handleAdoptPet()}
        </div>
      </div>
    )
  }
}

export default Pet
