import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FlashCardList from '../flashCardComponents/FlashCardList'

import MainContainer from '../styledComponents/MainContainer'
import ImgContainer from '../styledComponents/ImgContainer'
import Img from '../styledComponents/Img'
import PageTitle from '../styledComponents/PageTitle'
import CenterContainer from '../styledComponents/CenterContainer'
import BasicFooter from '../styledComponents/BasicFooter'

class SubjectShow extends Component {
    state = {
        subject: {},
        flashCards: []
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          const { subjectId } = this.props.match.params
          axios.get(`/api/users/${userId}/subjects/${subjectId}`)
          .then(res => {
            this.setState({subject: res.data, flashCards: res.data.flashCards})
          })
        }
      }


    render() {
        const params = this.props.match.params
        // const subjectId = this.props.match.params
        return (
            <MainContainer>
                <div className="basic-header" >
                    <h2 className="header-text" >Due Point</h2>
                </div>
                <FlashCardList 
                flashCards={this.state.flashCards}
                subject={this.state.subject} 
                params={params}/>
                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <Link to={`/users/${params.userId}`} className="fa fa-arrow-left fa-2x router-link" aria-hidden="true"></Link>
                    <i className="fa fa-pencil fa-2x" aria-hidden="true" ></i>
                    <i className="fa fa-plus fa-2x" aria-hidden="true" ></i>
                </BasicFooter>
            </MainContainer>
        )
    }
}

export default SubjectShow