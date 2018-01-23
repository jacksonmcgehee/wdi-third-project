import React from 'react'
import {Link} from 'react-router-dom'

const SubjectPreview = (props) => {
   
    return (
        <div>
            <Link to='/subject/' >{props.subject.name}</Link>
            
        </div>
    )
}

export default SubjectPreview