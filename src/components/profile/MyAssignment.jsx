import React from 'react'
import AssignmentSubmitList from '../dashboard/AssignmentSubmitList'

const MyAssignment = () => {
    return (
        <div className='pt-4 md:pt-0'>
            <h1 className='text-lg font-semibold mb-7'>Assignment Submission</h1>

            <AssignmentSubmitList />
        </div>
    )
}

export default MyAssignment