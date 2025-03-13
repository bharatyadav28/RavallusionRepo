"use client"
import { Assignment, AssignmentFilled, BookmarkBold, BookmarkBoldUnfilled, CrownFilled, CrownIcon, HamburgerMenu, Logout, SettingFilled, User, UserFilled } from '@/lib/svg_icons'
import React from 'react'
import { MenuItem } from './ProfileSidebar'
import { Settings, X } from 'lucide-react'
import {  motion } from 'framer-motion'

const MobileProfileHeader = ({ title, setShowMobileSidebar }) => {
    return (
        <div className='p-4 flex items-center gap-x-2 border-t border-gray-600 bg-[var(--card)] w-full'>
            <button onClick={() => setShowMobileSidebar(true)}>
                <HamburgerMenu width={29} height={29} />
            </button>

            <p className='text-lg font-semibold'>{title}</p>

        </div>
    )
}

export const MobileProfileSidebar = ({ activeItem, setActiveItem, setShowMobileSidebar, setIsOpenLogout }) => {
    return (
        <motion.div 
        className={"fixed inset-0 bg-black/50 backdrop-blur-sm z-10"}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.3}}
        onClick={() => setShowMobileSidebar(false)}
        >
            <motion.div
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 400, transition: { duration: 0.3 } }}
                className='fixed bottom-0 w-full bg-[#040C19] rounded-t-[30px] flex flex-col gap-y-3 px-6 pt-5 pb-7 items-center justify-center'>
                <button className='self-end' onClick={() => setShowMobileSidebar(false)}>
                    <X size={28} />
                </button>
                <MenuItem setShowMobileSidebar={setShowMobileSidebar} icon={<User />} icon1={<UserFilled />} title="Personal Information" activeItem={activeItem} setActiveItem={setActiveItem} />
                <MenuItem setShowMobileSidebar={setShowMobileSidebar} icon={<CrownIcon />} icon1={<CrownFilled />} title="My subscription" activeItem={activeItem} setActiveItem={setActiveItem} />
                <MenuItem setShowMobileSidebar={setShowMobileSidebar} icon={<Assignment />} icon1={<AssignmentFilled />} title="My assignments" activeItem={activeItem} setActiveItem={setActiveItem} />
                <MenuItem setShowMobileSidebar={setShowMobileSidebar} icon={<BookmarkBoldUnfilled />} icon1={<BookmarkBold width={25} height={25} />} title="Bookmarked videos" activeItem={activeItem} setActiveItem={setActiveItem} />
                <MenuItem setShowMobileSidebar={setShowMobileSidebar} icon={<Settings />} icon1={<SettingFilled />} title="Settings" activeItem={activeItem} setActiveItem={setActiveItem} />
                <hr className='w-full border-gray-700' />
                <MenuItem setShowMobileSidebar={setShowMobileSidebar} icon={<Logout />} icon1={<Logout />} title="Logout" setIsOpenLogout={setIsOpenLogout} />
            </motion.div>
        </motion.div>
    )
}

export default MobileProfileHeader;