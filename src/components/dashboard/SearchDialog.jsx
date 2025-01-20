
'use client'
import { CrossIcon, Elipse83, EllipseOfSearch, Recent } from '@/lib/svg_icons'
import React, { useState } from 'react'

import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchDialog = ({ setSearchDialog }) => {
    const router = useRouter();
    return (
        <div className='p-10 rounded-[28px] bg-[#181F2B]'>

            <div className='flex items-center justify-between mb-7'>
                <p className='text-lg font-semibold'>Search</p>
                <div className='cursor-pointer' onClick={() => setSearchDialog(false)}>
                    <CrossIcon />
                </div>
            </div>

            <SearchInput />

            {
                [...Array(9)].map((_, i) => (
                    <div key={i} className='flex items-center gap-x-4 mb-4 mt-7'>
                        <Recent />
                        <p className='text-sm cursor-pointer' onClick={() => { router.push('/dashboard/search'), setSearchDialog(false) }}>Photoshop interface</p>
                    </div>
                ))
            }
        </div >
    )
}

export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
    };
    return (
        <div className='relative w-full border border-gray-600 px-11 flex '>
            <SearchIcon size={19} className='absolute top-4 left-3' />
            <input type="text" className=' outline-none w-full py-3 bg-transparent' value={searchValue} onChange={handleInputChange} />
            <div className='absolute top-5 left-1/2 -translate-x-1/2'>
                <Elipse83 />
            </div>
            <X size={19} className='absolute right-4 top-4 cursor-pointer' onClick={handleClear} />
        </div>
    )
}

export default SearchDialog;