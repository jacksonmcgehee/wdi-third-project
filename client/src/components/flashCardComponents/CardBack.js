import React, { Component } from 'react'

import StyledCard from '../styledComponents/StyledCard'

class CardBack extends Component {

    render() {
        if(!this.props.show) {
            return null
          }
        
    return (
        <StyledCard>
            Hello from the back of the card.
        </StyledCard>
    )
    }
}

export default CardBack