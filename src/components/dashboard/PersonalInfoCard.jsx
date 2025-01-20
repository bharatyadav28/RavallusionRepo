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

const PersonalInfoCard = () => {
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

    return (
        <div className='fixed z-10 inset-0 bg-black/20 backdrop-blur-md md:absolute md:backdrop-blur-0 '>
            <div className="
        shadow-lg fixed md:absolute w-full left-1/2 transform md:transform-none md:-translate-x-0 -translate-x-1/2 -bottom-1 md:w-2/3 lg:w-4/5 md:left-14 md:-top-6 z-20" style={{
                    backgroundImage: "url('/strap-gradient.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "12px"
                }}>

                <div className='rounded-t-xl '>
                    <div className="flex items-center justify-between border-b border-[#FFFFFF26] p-4">
                        <h1 className="text-lg font-medium">Personal Information</h1>
                        <div className="cursor-pointer p-1 rounded-full border border-gray-500" onClick={() => dispatch(setShowProfileCard())}>
                            <X size={19} />
                        </div>
                    </div>

                    <div className="p-4 ">
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

                <div className='p-4 bg-[#19202C]'>
                    <PersonalInfo label="Name" content={name} onClick={() => setIsOpenName(true)} />
                    <PersonalInfo label="Phone number" content={phone} onClick={() => setIsOpenPhone(true)} />
                    <PersonalInfo label="Email id" content="Kishore@gmail.com" />
                </div>

                <div className="bg-[#19202C]  p-4 border-t border-[#FFFFFF26] rounded-b-xl">
                    <AccountControl
                        icon={<Delete />}
                        title="Delete account"
                        onClick={() => setIsOpenDelete(true)}
                    />
                    <AccountControl
                        icon={<Logout />}
                        title="Logout"
                        onClick={() => setIsOpenLogout(true)}
                    />
                </div>



                {/* Dialogs */}
                <CustomDialog open={isOpenLogout} close={() => setIsOpenLogout(false)}>
                    <AccountControlCard
                        onClick={() => setIsOpenLogout(false)}
                        icon={<LogoutCard />}
                        title="Log Out"
                        text="Are you sure you want to logout?"
                    />
                </CustomDialog>

                <CustomDialog open={isOpenDelete} close={() => setIsOpenDelete(false)}>
                    <AccountControlCard
                        onClick={() => setIsOpenDelete(false)}
                        icon={<DeleteCard />}
                        title="Delete account"
                        text="Are you sure you want to delete your account?"
                    />
                </CustomDialog>

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
                        content={phone}
                        onClick={() => setIsOpenPhone(false)}
                        onSave={(value) => {
                            handleSave('phone', value);
                            setIsOpenPhone(false);
                        }}
                    />
                </CustomDialog>
            </div>
        </div>
    );
};

const PersonalInfo = ({ label, content, onClick }) => {
    return (
        <div className="py-1">
            <label htmlFor="name" className="text-[10px] text-gray-400">
                {label}
            </label>
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{content}</p>
                {label !== 'Email id' && (
                    <div className="cursor-pointer" onClick={onClick}>
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
