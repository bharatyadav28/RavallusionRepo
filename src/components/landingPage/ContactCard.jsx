import { Email, MapIcon, Phone } from '@/lib/svg_icons'
import React from 'react'

const contactDetailData = [
    {
        icon: <Phone />,
        title: "Phone number",
        text: "+91 9369680068"
    },
    {
        icon: <Email />,
        title: "Email",
        text: "Ravallusion@gmail.com"
    },
    {
        icon: <MapIcon />,
        title: "Address",
        text: "85-40-4/4, S1, Sri Shaswatha Nivas, JN Road, Rajahmundry, East Godavari, Andhra Pradesh, India, 533101"
    },
]
const ContactCard = () => {
    return (
        <div className='p-5 bg-[var(--card)] rounded-xl'>
            <div className='mb-8'>
                <h1 className='text-3xl font-semibold leading-snug text-white'>We are already ready to help you!</h1>
                <p className='text-gray-200 mt-2 font-thin'>Were are always there to help you</p>
            </div>

            <div className='flex flex-col gap-y-6'>
                {
                    contactDetailData.map((item, i) =>
                        <ContactDetail key={i} icon={item.icon} title={item.title} text={item.text} />
                    )
                }
            </div>

        </div>
    )
}

const ContactDetail = ({ icon, title, text }) => {
    return (
        <div className='flex items-start gap-x-3'>
            <div className='rounded-full p-3 bg-gray-700 items-center flex justify-center'>
                {icon}
            </div>
            <div>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className='w-60 font-thin text-gray-300'>{text}</p>
            </div>
        </div>
    )
}

export default ContactCard