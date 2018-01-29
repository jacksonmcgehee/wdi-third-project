import React, { Component } from 'react'
import StyledCard from '../styledComponents/StyledCard'

class CardFront extends Component {

    render() {
        if(!this.props.show) {
            return null
          }

    
        
    return (
        <StyledCard>
            <h2 className="card-title-text" >{this.props.currentCard.question}</h2>
        </StyledCard>
    )
    }
}

export default CardFront