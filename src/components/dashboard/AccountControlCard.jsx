
import React from 'react'
import { Button } from '../ui/button';

const AccountControlCard = ({ title, icon, text,onClick }) => {
    return (
        <div className='flex items-center justify-center'>
            <div
                className="w-5/6 mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
                style={{
                    background:
                        "radial-gradient(circle at top, #D94004 -120%, transparent 50%), #091926",
                }}
            >
                {icon}
                <div className='my-7'>
                    <h2 className='text-center text-3xl font-bold mb-4'>{title}</h2>
                    <p className='text-sm text-center'>{text}</p>
                </div>

                <div className='flex items-center gap-x-4'>
                    <Button className="px-7 py-5 border border-gray-400" onClick={onClick} >Cancel</Button>
                    <Button variant={'destructive'} className=" px-7 py-5" onClick={onClick} >Confirm</Button>
                </div>

            </div>
        </div>
    )
}

export default AccountControlCard;