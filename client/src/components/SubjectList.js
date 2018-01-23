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
                        Hello from the subject list.
                    
                    <SubjectPreview subject={subject} {...props} key={subject._id}/>
                    </div>
                )
                })
            }
        </div>
    )
}

export default SubjectList