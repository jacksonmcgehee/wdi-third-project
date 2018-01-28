import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import FlashCardPreview from './FlashCardPreview'


import ListContainer from '../styledComponents/ListContainer'
import FlashBigContainer from '../styledComponents/FlashBigContainer'
import FlashButton from '../styledComponents/FlashButton'

class FlashCardList extends Component {

    render() {
        return (
            <ListContainer>
                <h3 className="modal-title-text">{this.props.subject.name}</h3>
                <h3 className="modal-title-text">Test on: {this.props.subject.testDate}</h3>
                <Link to={`/users/${this.props.userId}/subjects/${this.props.subject._id}/review`} className="router-link" ><FlashButton >Review</FlashButton></Link>
                <FlashBigContainer>
                {
                    this.props.flashCards.map((flashCard) => {
                    return (
                        <div key={flashCard._id}>
                            <FlashCardPreview 
                            flashcard={flashCard} 
                            {...this.props} 
                            toggleEditCardModal={this.props.toggleEditCardModal}
                            deleteFlashCard={this.props.deleteFlashCard}
                            subjectId={this.props.subject._id}
                            userId={this.props.userId}/>
                        </div>
                    )
                    })
                }
                </FlashBigContainer>

            </ListContainer>
        )
    }
}

export default FlashCardList