import React, { Component } from 'react'
import StyledCard from '../styledComponents/StyledCard'

class CardFront extends Component {

    render() {
        if(!this.props.show) {
            return null
          }

    
        
    return (
        <StyledCard>
            Hello from the front of the card.
        </StyledCard>
    )
    }
}

export default CardFront