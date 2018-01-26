import React, { Component } from 'react'

import FlashLinkAnswer from '../styledComponents/FlashLinkAnswer'

class FlashCardAnswer extends Component {

    render() {

    if(!this.props.show) {
        return null
      }

    return (
        <FlashLinkAnswer>
            <h4 className="answer-title">Answer: </h4>
            {this.props.flashCard.answer}
        </FlashLinkAnswer>
    )
}
}

export default FlashCardAnswer