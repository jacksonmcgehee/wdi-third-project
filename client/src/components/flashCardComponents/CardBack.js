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
            {this.props.currentCard.answer}
            <ButtonContainer>
                <RightButton >Right</RightButton>
                <WrongButton >Wrong</WrongButton>
            </ButtonContainer>
        </StyledCard>
    )
    }
}

export default CardBack