import React, { Component } from 'react'
import StyledCard from '../styledComponents/StyledCard'

class CardFront extends Component {

    render() {
        if(!this.props.show) {
            return null
          }

    
        
    return (
        <StyledCard>
            {this.props.currentCard.question}
        </StyledCard>
    )
    }
}

export default CardFront