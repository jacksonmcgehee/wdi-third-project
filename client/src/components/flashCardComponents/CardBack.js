import React, { Component } from 'react'

import StyledCard from '../styledComponents/StyledCard'
import RightButton from '../styledComponents/RightButton'
import WrongButton from '../styledComponents/WrongButton'
import ButtonContainer from '../styledComponents/ButtonContainer'

class CardBack extends Component {

    render() {
        if(!this.props.show) {
            return null
          }
        
    return (
        <StyledCard>
            Hello from the back of the card.
            <ButtonContainer>
                <RightButton >Right</RightButton>
                <WrongButton >Wrong</WrongButton>
            </ButtonContainer>
        </StyledCard>
    )
    }
}

export default CardBack