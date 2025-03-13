import { Delete, DeleteCard } from '@/lib/svg_icons'
import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import CustomDialog from '../common/CustomDialog'
import AccountControlCard from '../dashboard/AccountControlCard'

const Settings = () => {
    const [isOpenDelete,setIsOpenDelete] = useState(false);

    const handleDeleteAccount = ()=>{
        alert("Account deleted successfully")
        setIsOpenDelete(false)
    }
    return (
        <div className='pt-4 md:pt-0'>
            <h1 className='text-lg font-semibold mb-7'>Settings</h1>

            <Setting icon={<Delete />} title={"Delete Account"} onClick={() => setIsOpenDelete(true)}/>

            <CustomDialog open={isOpenDelete} close={() => setIsOpenDelete(false)}>
                <AccountControlCard
                    onClick={handleDeleteAccount}
                    onCancel={()=>setIsOpenDelete(false)}
                    icon={<DeleteCard />}
                    title="Delete account"
                    text="Are you sure you want to delete your account ?"
                />
            </CustomDialog>
        </div>

    )
}


const Setting = ({ icon, title,onClick }) => {
    return (
        <div
          onClick={onClick}
            className='cursor-pointer p-6 flex items-center justify-between bg-[var(--card)] rounded-xl'>
            <div className='flex items-center gap-x-3'>
                <div>
                    {icon}
                </div>
                <div>
                    <p>{title}</p>
                </div>
            </div>
            <div>
                <ChevronRight />
            </div>

        </div>
    )
}

export default Settings