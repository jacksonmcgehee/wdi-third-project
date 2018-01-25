import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ButtonDiv from './styledComponents/ButtonDiv'
import ImgContainer from './styledComponents/ImgContainer'
import Img from './styledComponents/Img'
import PageTitle from './styledComponents/PageTitle'

class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="basic-header" >
                    
                </div>
                <ImgContainer>
                    <Img src="/images/bw-hand.jpg" />
                    <PageTitle>
                        <h2 className="page-title-text" >Due Point</h2>
                    </PageTitle>
                </ImgContainer>
                <div>
                    <ButtonDiv>
                        <Link to='/users'>See Users</Link>
                    </ButtonDiv>
                </div>
                <div className="basic-footer" >

                </div>
            </div>
        )
    }
}

export default HomePage