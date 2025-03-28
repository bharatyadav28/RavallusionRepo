
'use client'
import { CrossIcon, Elipse83, EllipseOfSearch, Recent } from '@/lib/svg_icons'
import React, { useEffect, useRef, useState } from 'react'

import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '@/store/slice/general'
import { setSearchHistory } from '@/store/slice/general'

const SearchDialog = ({ setSearchDialog }) => {
    const { searchValue, searchHistory } = useSelector((state) => state.general);
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const storedHistory = localStorage.getItem("searchHistory");
        if (storedHistory) {
            dispatch(setSearchHistory(JSON.parse(storedHistory)));
        }
    }, []);

    return (
        <div className='p-7 md:p-10 rounded-[28px] bg-[#181F2B]'>

            <div className='flex items-center justify-between mb-7'>
                <p className='text-lg font-semibold'>Search</p>
                <div className='cursor-pointer' onClick={() => setSearchDialog(false)}>
                    <CrossIcon />
                </div>
            </div>

            <SearchInput
                ref={inputRef}
                searchHistory={searchHistory}
                setSearchHistory={setSearchHistory}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setSearchDialog={setSearchDialog} />
            {
                searchHistory && [...searchHistory].reverse().slice(0, 8).map((item, i) => (
                    <div key={i} className='flex items-center gap-x-4 mb-4 mt-7'>
                        <Recent />
                        <p className='text-sm cursor-pointer' onClick={() => { dispatch(setSearchValue(item)); inputRef.current.focus() }}>{item}</p>
                    </div>
                ))
            }
        </div >
    )
}

export const SearchInput = ({ ref, setSearchDialog, searchValue, setSearchValue, headerSearch = false, searchHistory, setSearchHistory }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        dispatch(setSearchValue(e.target.value));
    };

    const handleClear = () => {
        dispatch(setSearchValue(''));
    };

    const handleSearch = () => {
        router.push(`/dashboard/search?search=${searchValue}`);
        if (!searchHistory.find((item) => item === searchValue) && searchValue?.trim() !== '') {
            addToSearchHistory(searchValue);
        }
        if (!headerSearch) {
            setSearchDialog(false);
        }
    }

    const addToSearchHistory = (newSearch) => {
        const updatedHistory = [...searchHistory, newSearch];
        dispatch(setSearchHistory(updatedHistory));
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    };

    return (
        <div className='relative w-full border border-gray-600 px-11 flex '>
            <SearchIcon size={19} className='absolute top-4 left-3' />
            <input
                ref={ref}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
                type="text" className=' outline-none w-full py-3 bg-transparent' value={searchValue} onChange={handleInputChange} />
            {/* <div className='absolute top-5 left-1/2 -translate-x-1/2 z-0'>
                <Elipse83 />
            </div> */}
            {
                searchValue && (
                    <X size={19} className='absolute right-4 top-4 cursor-pointer' onClick={handleClear} />
                )
            }
        </div>
    )
}

export default SearchDialog;