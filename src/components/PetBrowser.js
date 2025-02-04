import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return  <div className="ui cards">
              {this.props.pets.map((pet,index)=> {
                return <Pet 
                isAdopted={pet.isAdopted}
                key={index}
                pet={pet}
                onAdoptPet={this.props.onAdoptPet}
                />
              })}  
            </div>
  }
}

export default PetBrowser
