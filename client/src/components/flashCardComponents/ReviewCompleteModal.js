import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import FlashButton from '../styledComponents/FlashButton'
import StyledCard from '../styledComponents/StyledCard'

class ReviewCompleteModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
    }

    return (
      <div className="backdrop"  style={backdropStyle}> 
        <div className="modal" style={modalStyle}>
          <h3 className="modal-title-text">You got all of the cards right! Please click continue to return to your subject list. Good luck on your test!</h3>
          
          <Link to={`/users/${this.props.params.userId}/subjects/${this.props.params.subjectId}`} className="router-link" ><FlashButton >Continue</FlashButton></Link>

        </div>
    </div>
      
    )
  }
}

ReviewCompleteModal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
}

export default ReviewCompleteModal