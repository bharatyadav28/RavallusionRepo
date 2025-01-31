"use client"
import React from 'react'
import AssignmentSubmitList from '@/components/dashboard/AssignmentSubmitList';
import CourseDashboard from '@/components/dashboard/CourseDashboard';

const page = () => {

    return (

        <div className={` p-4 md:p-0 md:mt-6 grid grid-cols-12`}>

            <CourseDashboard />

            {/* Assignment submission data */}
            <AssignmentSubmitList />

        </div>

    )
}


export default page;
