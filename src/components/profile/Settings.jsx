"use client";
import { Delete, DeleteCard } from '@/lib/svg_icons'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import CustomDialog from '../common/CustomDialog'
import AccountControlCard from '../dashboard/AccountControlCard'
import { useDeleteAccountMutation } from '@/store/Api/auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Settings = () => {
    const router = useRouter();
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [deleteAccount, { isLoading }] = useDeleteAccountMutation();
    
    const handleDeleteAccount = async () => {
        try {
            const res = await deleteAccount().unwrap();
            if (res.success) {
                router.push('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || "Failed to delete account")
        }
    }
    return (
        <div className='pt-4 md:pt-0'>
            <h1 className='text-lg font-semibold mb-7'>Settings</h1>

            <Setting icon={<Delete />} title={"Delete Account"} onClick={() => setIsOpenDelete(true)} />

            <CustomDialog open={isOpenDelete} close={() => setIsOpenDelete(false)}>
                <AccountControlCard
                    onClick={handleDeleteAccount}
                    isLoading={isLoading}
                    onCancel={() => setIsOpenDelete(false)}
                    icon={<DeleteCard />}
                    title="Delete account"
                    text="Are you sure you want to delete your account ?"
                />
            </CustomDialog>
        </div>

    )
}


const Setting = ({ icon, title, onClick }) => {
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