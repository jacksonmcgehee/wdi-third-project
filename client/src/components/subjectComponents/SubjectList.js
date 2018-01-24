import React from 'react'
import SubjectPreview from './subjectComponents/SubjectPreview'

const SubjectList = (props) => {


    return (
        <div>
            Hello from the subject list.
            {
                props.subjects.map((subject) => {
                return (
                    <div key={subject._id}>
                        <SubjectPreview 
                        subject={subject} 
                        {...props} 
                         
                        userId={props.userId}/>
                    </div>
                )
                })
            }
        </div>
    )
}

export default SubjectList