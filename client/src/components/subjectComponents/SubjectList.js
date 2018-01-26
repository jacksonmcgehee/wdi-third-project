import React from 'react'
import SubjectPreview from './SubjectPreview'

import ListContainer from '../styledComponents/ListContainer'

const SubjectList = (props) => {


    return (
        <ListContainer>
            <h3 className="modal-title-text">{props.userName}'s Subjects</h3>
            {
                props.subjects.map((subject) => {
                return (
                    <div key={subject._id}>
                        <SubjectPreview 
                        subject={subject} 
                        {...props} 
                        deleteSubject={props.deleteSubject} 
                        userId={props.userId}/>
                    </div>
                )
                })
            }
        </ListContainer>
    )
}

export default SubjectList