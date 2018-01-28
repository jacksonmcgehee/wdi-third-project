import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'

import MainContainer from '../styledComponents/MainContainer'
import CardContainer from '../styledComponents/CardContainer'
import CardFront from '../styledComponents/CardFront'
import CardBack from '../styledComponents/CardBack'
import BasicFooter from '../styledComponents/BasicFooter'



class Review extends Component {

    state = {
        flashcard: [],
      }

    // toggleModal = () => {
    //     this.setState({
    //     isOpen: !this.state.isOpen
    //     })
    // }

    // async componentWillMount() {
    //     const response = await axios.get('/api/users')
    //     this.setState({flashcard: response.data})
    // }

    render() {
        const params = this.props.match.params
        return (
            <MainContainer>
                <div className="basic-header" >
                    <h2 className="header-text" >Due Point</h2>
                </div>
                <CardContainer>
                    <CardFront>
                        This is the front
                    </CardFront>
                    <CardBack>
                        This is the back
                    </CardBack>
                </CardContainer>
                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <Link to={`/users/${params.userId}/subjects/${params.subjectId}`} className="fa fa-arrow-left fa-2x router-link" aria-hidden="true"></Link>
                    <i className="fa fa-refresh fa-2x" aria-hidden="true" ></i>
                </BasicFooter>
            </MainContainer>
        )
    }
}

export default Review