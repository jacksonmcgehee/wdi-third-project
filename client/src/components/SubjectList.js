import React from 'react'
import SubjectPreview from './SubjectPreview'

const SubjectList = (props) => {


    return (
        <div>
            Hello from the subject list.
            {
                props.subjects.map((subject) => {
                return (
                    <div>
                        <SubjectPreview subject={subject} {...props} key={subject._id} userId={props.userId}/>
                    </div>
                )
                })
            }
        </div>
    )
}

export default SubjectList