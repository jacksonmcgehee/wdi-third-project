import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import CardFront from './CardFront'
import CardBack from './CardBack'

import MainContainer from '../styledComponents/MainContainer'
import CardContainer from '../styledComponents/CardContainer'
import BasicFooter from '../styledComponents/BasicFooter'
import FlipButton from '../styledComponents/FlipButton'



class Review extends Component {

    state = {
        subject: {},
        flashcards: [],
        isOpenFront: true,
        isOpenBack: false
      }

    toggleCard = () => {
        this.setState({
        isOpenFront: !this.state.isOpenFront,
        isOpenBack: !this.state.isOpenBack
        })
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          const { subjectId } = this.props.match.params
          axios.get(`/api/users/${userId}/subjects/${subjectId}`)
          .then(res => {
            this.setState({subject: res.data, flashcards: res.data.flashCards})
          })
        }
      }

    render() {
        const params = this.props.match.params
        
        
        return (
            <MainContainer>
                <div className="basic-header" >
                    <h2 className="header-text" >Due Point</h2>
                </div>
                <CardContainer>
                    <CardFront show={this.state.isOpenFront} />
                    <CardBack show={this.state.isOpenBack} />
                    <FlipButton onClick={this.toggleCard} >Flip</FlipButton>
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