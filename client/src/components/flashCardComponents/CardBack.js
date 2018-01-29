import React, { Component } from 'react'

import StyledCard from '../styledComponents/StyledCard'
import RightButton from '../styledComponents/RightButton'
import WrongButton from '../styledComponents/WrongButton'
import ButtonContainer from '../styledComponents/ButtonContainer'

class CardBack extends Component {

    // handleWrongClick () {
    //     this.props.randomCard
    //     this.props.toggleCard()

    // }

    render() {
        if(this.props.show) {
            return null
          }
        
    return (
        <StyledCard>
            <h2 className="card-title-text" >{this.props.currentCard.answer}</h2>
            <ButtonContainer>
                <RightButton onClick={this.props.rightCardRemove} >Right</RightButton>
                <WrongButton onClick={this.props.randomCard}>Wrong</WrongButton>
            </ButtonContainer>
        </StyledCard>
    )
    }
}

export default CardBack