'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import {
    Delete,
    DeleteCard,
    Logout,
    LogoutCard,
    OutlinePencil,
    YellowPencil,
} from '@/lib/svg_icons';
import CustomDialog from '../common/CustomDialog';
import EditInfo from './EditPersonalInfo';
import AccountControlCard from './AccountControlCard';
import { useDispatch } from 'react-redux';
import { setShowProfileCard } from '@/store/slice/general';
import { motion } from 'framer-motion';

const PersonalInfoCard = ({ showProfileCard }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('Ramesh');
    const [phone, setPhone] = useState('9369680068');
    const [profilePic, setProfilePic] = useState('/profilepic.jpeg');

    const [isOpenName, setIsOpenName] = useState(false);
    const [isOpenPhone, setIsOpenPhone] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenLogout, setIsOpenLogout] = useState(false);

    // Function to handle saving updated name or phone
    const handleSave = (field, value) => {
        if (field === 'name') setName(value);
        if (field === 'phone') setPhone(value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfilePic(imageUrl);
        }
    };
    // const variants = {
    //     initial: {
    //         x: window.innerWidth >= 1024 ? '100%' : '-50%',
    //         y: window.innerWidth >= 1024 ? 0 : '100%',
    //         left: '50%',
    //     },
    //     animate: {
    //         x: window.innerWidth >= 1024 ? '-38%' : '-50%',
    //         y: 0,
    //         left: '50%',
    //         transition: {
    //             duration: 0.8,
    //             ease: "easeOut"
    //         }
    //     },
    //     exit: {
    //         x: window.innerWidth >= 1024 ? '100%' : '-50%',
    //         y: window.innerWidth >= 1024 ? 0 : '100%',
    //         left: '50%',
    //         transition: {
    //             duration: 0.8,
    //             ease: "easeIn"
    //         }
    //     }
    // };
    return (
        <div
            className=" w-full z-20"
            // style={{
            //     backgroundImage: "url('/strap-gradient.png')",
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center",
            //     borderRadius: "12px"
            // }}
            
            >

            <div className='pt-4 md:pt-0'>
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold">Personal Information</h1>
                    {/* <div className="cursor-pointer p-1 rounded-full border border-gray-500" onClick={() => dispatch(setShowProfileCard())}>
                        <X size={19} />
                    </div> */}
                </div>

                <div className="p-5">
                    <div className="flex items-center justify-center">

                        <div className="relative w-32 h-32 rounded-full">
                            <Image
                                src={profilePic}
                                alt="profilepic"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '50%' }}
                            />
                            <div className="absolute bottom-1 right-0 cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <OutlinePencil />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='p-4'>
                <PersonalInfo label="Name" content={name} onClick={() => setIsOpenName(true)} />
                <PersonalInfo label="Phone number" content={phone} onClick={() => setIsOpenPhone(true)} />
                <PersonalInfo label="Email id" content="Kishore@gmail.com" />
            </div>


            <CustomDialog open={isOpenName} close={() => setIsOpenName(false)}>
                <EditInfo
                    label="Name"
                    content={name}
                    onClick={() => setIsOpenName(false)}
                    onSave={(value) => {
                        handleSave('name', value);
                        setIsOpenName(false);
                    }}
                />
            </CustomDialog>

            <CustomDialog open={isOpenPhone} close={() => setIsOpenPhone(false)}>
                <EditInfo
                    label="Phone"
                    type='number'
                    content={phone}
                    onClick={() => setIsOpenPhone(false)}
                    onSave={(value) => {
                        handleSave('phone', value);
                        setIsOpenPhone(false);
                    }}
                />
            </CustomDialog>
        </div >
    );
};

const PersonalInfo = ({ label, content, onClick }) => {
    return (
        <div className="py-1">
            <label htmlFor="name" className="text-[10px] text-gray-400 important">
                {label}
            </label>
            <div className="flex items-center justify-between relative">
                <p className="text-sm font-medium border border-gray-500 p-4 w-full rounded-xl ">{content}</p>
                {label !== 'Email id' && (
                    <div className="cursor-pointer absolute right-3" onClick={onClick}>
                        <YellowPencil />
                    </div>
                )}
            </div>
        </div>
    );
};


const AccountControl = ({ icon, title, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`py-3 flex items-center gap-x-3 cursor-pointer ${title === 'Logout' && 'text-red-600'
                }`}
        >
            {icon}
            <p className="text-sm font-semibold">{title}</p>
        </div>
    );
};

export default PersonalInfoCard;
