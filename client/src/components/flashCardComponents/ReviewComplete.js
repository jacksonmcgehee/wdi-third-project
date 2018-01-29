import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import CardContainer from '../styledComponents/CardContainer'
import ReviewCompleteButton from '../styledComponents/ReviewCompleteButton'
import StyledCardComplete from '../styledComponents/StyledCardComplete'

class ReviewComplete extends Component {
    render() {
        return (
            <CardContainer >
                <StyledCardComplete>
                    <h2 className="card-title-text" >You got them all correct! Click continue to return to your subject list. Good luck on your test!</h2>
                    <Link to={`/users/${this.props.params.userId}/subjects/${this.props.params.subjectId}`} className="router-link" ><ReviewCompleteButton >Continue</ReviewCompleteButton></Link>
                </StyledCardComplete>
            </CardContainer>
        );
    }
}

export default ReviewComplete