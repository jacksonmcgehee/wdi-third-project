import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ButtonDiv from './styledComponents/ButtonDiv'

import MainContainer from './styledComponents/MainContainer'
import ImgContainer from './styledComponents/ImgContainer'
import Img from './styledComponents/Img'
import PageTitle from './styledComponents/PageTitle'
import CenterContainer from './styledComponents/CenterContainer'
import BasicFooter from './styledComponents/BasicFooter'

class HomePage extends Component {

    render() {
        return (
            <MainContainer>
                <div className="basic-header" >
                    
                </div>
                <ImgContainer>
                    <Img src="/images/bw-hand.jpg" />
                    <PageTitle>
                        <h2 className="page-title-text" >Due Point</h2>
                    </PageTitle>
                </ImgContainer>
                <CenterContainer>
                    
                        <Link to='/users' className="router-link" ><ButtonDiv>See Users</ButtonDiv></Link>
                    
                </CenterContainer>
                <BasicFooter >

                </BasicFooter>
            </MainContainer>
        )
    }
}

export default HomePage