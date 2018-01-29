import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import CardContainer from '../styledComponents/CardContainer'
import FlashButton from '../styledComponents/FlashButton'
import StyledCard from '../styledComponents/StyledCard'

class ReviewComplete extends Component {
    render() {
        return (
            <CardContainer >
                <StyledCard>
                    <Link to={`/users/${this.props.params.userId}/subjects/${this.props.params.subjectId}`} className="router-link" ><FlashButton >Continue</FlashButton></Link>
                </StyledCard>
            </CardContainer>
        );
    }
}

export default ReviewComplete