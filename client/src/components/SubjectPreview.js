import React from 'react'
import {Link} from 'react-router-dom'

const SubjectPreview = (props) => {
   
    return (
        <div>
            <Link to={`/users/${props.userId}/subjects/${props.subject._id}`} >{props.subject.name}</Link>
        </div>
    )
}

export default SubjectPreview