import React, { Component } from 'react'

import FlashLink from '../styledComponents/FlashLink'

class FlashCardAnswer extends Component {

    render() {

    if(!this.props.show) {
        return null
      }

    return (
        <FlashLink>
            {this.props.flashCard.answer}
        </FlashLink>
    )
}
}

export default FlashCardAnswer