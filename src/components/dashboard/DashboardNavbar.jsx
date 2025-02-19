"use client";

import { BulbIcon, CrownIcon, EllipseOfSearch, Gear, HamburgerMenu, NeonElipse } from '@/lib/svg_icons'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, X, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import CustomDialog from '../common/CustomDialog';
import SearchDialog, { SearchInput } from './SearchDialog';
import { setShowProfileCard } from '@/store/slice/general';
import { useDispatch, useSelector } from 'react-redux';


const DashboardNavbar = () => {

  const pathname = usePathname();
  const router = useRouter();
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [show, setShow] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchDialog, setSearchDialog] = useState(false);
  const [urlpath, setUrlPath] = useState('');
  const introductoryVideosCount = useSelector((state) => state.general.introductoryVideosCount);
  const bookmarkCount = useSelector((state) => state.general.bookmarkCount);


  useEffect(() => {
    if (pathname === "/dashboard") {
      setShow(false);
      setUrlPath('dashboard')
    }
    else if (pathname == '/dashboard/introductory') {
      setShow(true);
      setUrlPath('introductory')
    }
    else if (pathname == '/dashboard/player-dashboard') {
      setShow(true);
      setUrlPath('playerDashboard')
    }
    else if (pathname == '/dashboard/bookmarked-videos') {
      setShow(true);
      setUrlPath('bookmarked')
    }
    else if (pathname == '/dashboard/search') {
      setShow(true);
      setUrlPath('search')
    }
    else if (pathname == '/dashboard/profile') {
      setShow(true);
      setUrlPath('profile')
    }
    else {
      setShow(true)
    }
  }, [pathname]);


  return (
    <div className={`${urlpath == 'dashboard' ? "rounded-none" : "rounded-xl"} bg-[#181F2B] w-full p-4 lg:px-8 lg:py-4 flex items-center justify-between relative`}>
      {openSidebar && <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} urlpath={urlpath} />}
      {show ? (
        <div className='flex gap-x-5 lg:gap-x-7 items-center w-2/3 lg:w-1/2'>
          <button className='cursor-pointer' onClick={() => router.back()}
          > <ArrowLeft /></button>

          <div className='flex-grow'>
            {
              urlpath == 'introductory' && (
                <>
                  <h1 className='text-lg font-semibold mb-1'>Introductory videos</h1>
                  <p className='text-xs text-[#CDCED1]'>{introductoryVideosCount} Videos</p>
                </>
              )
            }
            {
              urlpath == 'playerDashboard' && (
                <>
                  <h1 className='text-lg font-semibold mb-1'>Opening file</h1>
                  <p className='text-xs text-[#CDCED1]'>Photoshop interface  <span className='ml-2'>&#183; 1 Basic interface</span></p>
                </>
              )
            }
            {
              urlpath == 'bookmarked' && (
                <>
                  <h1 className='text-lg font-semibold mb-1'>Bookmarked videos</h1>
                  <p className='text-xs text-[#CDCED1]'>{bookmarkCount} Videos</p>
                </>
              )
            }
            {
              urlpath == 'profile' && (
                <>
                  <h1 className='text-lg font-semibold mb-1'>Profile</h1>
                  <p className='text-xs text-[#CDCED1]'>Advanced</p>
                </>
              )
            }
            {
              urlpath == 'search' && (
                <SearchInput />
              )
            }

          </div>
        </div>
      ) :
        (<h1 className='text-2xl italic font-bold'>Ravallusion</h1>)
      }


      <div className='flex gap-x-2 items-center'>

        <div className='p-3 border border-gray-600 relative cursor-pointer' onClick={() => setSearchDialog(true)}>
          <EllipseOfSearch />
          <SearchIcon size={24} />
        </div>

        <BoxComponent show={show} icon={<CrownIcon />} title={"Advanced"} title1={"Photoshop"} title2={"Premier pro"} href={'/dashboard/player-dashboard'} />


        <BoxComponent show={show} icon={<Gear />} title={"Beginner"} title1={"Photoshop"} title2={"Premier pro"} href={'/dashboard/player-dashboard'} />


        <BoxComponent show={show} icon={<BulbIcon />} title={"Introductory"} introductory={true} href={'/dashboard/introductory'} />


        <ProfileComponent setIsOpenProfile={setIsOpenProfile} isOpenProfile={isOpenProfile} urlpath={urlpath} />


        <div onClick={() => setOpenSidebar(true)} className='p-3 border relative cursor-pointer lg:hidden border-[var(--neon-purple)] bg-[#040C19] '>
          <EllipseOfSearch />
          <HamburgerMenu width={24} />
        </div>

        <CustomDialog open={searchDialog} close={() => setSearchDialog(false)}>
          <SearchDialog setSearchDialog={setSearchDialog} />
        </CustomDialog>

      </div>
    </div>
  )
}

const SideBar = ({ openSidebar, setOpenSidebar, urlpath }) => {
  const sidebarVariants = {
    open: {
      x: 0, // Sidebar slides into view
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
    closed: {
      x: "-100%", // Sidebar slides out of view
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  const show = false;
  const backdropVariants = {
    open: { opacity: 1, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" },
  };
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
        initial="closed"
        animate={openSidebar ? "open" : "closed"}
        variants={backdropVariants}
        onClick={() => setOpenSidebar(false)}
      />

      <motion.div className="absolute bg-[var(--Surface)] w-72 pt-12 pb-8 px-4 h-screen top-0 left-0 z-20 lg:hidden"
        initial="closed"
        animate={openSidebar ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-2xl italic font-bold">Ravallusion</h1>

          <div onClick={() => setOpenSidebar(false)}>
            <X />
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <BoxComponentMobile href={"/dashboard/player-dashboard"} show={show} icon={<CrownIcon />} title={"Advanced"} title1={"Photoshop"} title2={"Premier pro"} />
          <BoxComponentMobile href={"/dashboard/"} show={show} icon={<Gear />} title={"Beginner"} title1={"Photoshop"} title2={"Photoshop"} />
          <BoxComponentMobile href={"/dashboard/introductory"} show={show} icon={<BulbIcon />} title={"Introductory"} introductory={true} />

          <BoxComponentMobile setOpenSidebar={setOpenSidebar} profileMobile={urlpath === 'profile' ? true : false} show={show} icon={<div className='bg-gray-300 rounded-full w-7 h-7 relative'>
            <Image
              src={'/URL_of_image_for_FX_Console_Plugin.jpeg'}
              alt='Profile pic'
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            /> </div>} title={"Profile"} title1={"Advance"} title2={"Beginner"} href={"/dashboard/profile"} />
        </div>
      </motion.div>
    </>
  )
}


const ProfileComponent = ({ isOpenProfile, setIsOpenProfile, urlpath }) => {
  const dispatch = useDispatch();

  return (
    <div className='ml-3 bg-gray-300 rounded-full w-11 h-11 relative hidden lg:block cursor-pointer'
      onClick={() => {
        if (urlpath !== 'profile') {
          setIsOpenProfile((prev) => !prev);
        }
        else {
          dispatch(setShowProfileCard())
        }
      }}
    >
      <Image
        src={'/URL_of_image_for_FX_Console_Plugin.jpeg'}
        alt='Profile pic'
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />

      {isOpenProfile && urlpath !== 'profile' && (<ProfileDropdown href={'/dashboard/profile'} title1={"Advance"} title2={"Beginner"} />
      )}

    </div>
  )
}

const ProfileDropdown = ({ title1, title2, href }) => {
  return (
    <motion.div
      className={"absolute top-14 right-0 overflow-hidden w-36 border-b border-x bg-[#040C19] border-[var(--neon-purple)] px-4 py-2 z-10 before:content-[''] before:absolute before:-top-[9px] before:right-4 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#040C19] before:z-10"}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex flex-col gap-y-2">
        <Link href={href} className="text-xs text-white flex justify-between items-center  gap-x-4">
          {title1} <ArrowRight size={21} />
        </Link>
        <Link href={href} className="text-xs text-white flex justify-between items-center gap-x-4">
          {title2} <ArrowRight size={21} />
        </Link>
      </div>
    </motion.div>
  );
};


const BoxComponent = ({ icon, title, introductory, title1, title2, show, href }) => {
  const [isOpenBoxDropdown, setIsOpenBoxDropdown] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (introductory) {
      router.push('/dashboard/introductory');
    } else {
      setIsOpenBoxDropdown((prev) => !prev);
    }
  };

  return (

    <div className="relative hidden lg:block">
      <div
        onClick={handleClick}
        className={`px-4 py-3 flex flex-col bg-[#040C19] border-x border-t ${isOpenBoxDropdown ? '' : 'border-b'
          } border-[var(--neon-purple)] cursor-pointer relative`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            {icon}
            <span className="text-sm font-semibold">
              {show && !isOpenBoxDropdown ? "" : title}
            </span>
          </div>

          {introductory ? (
            <span className="text-[9px] text-orange-300 rounded-sm bg-red-950 px-2 py-[1px] ml-2">
              Free
            </span>
          ) : (
            <div className="cursor-pointer ml-3">
              {isOpenBoxDropdown ? <ChevronUp /> : <ChevronDown />}
            </div>
          )}

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
            <NeonElipse />
          </div>
        </div>
      </div>

      {isOpenBoxDropdown && (
        <BoxDropdown
          href={href}
          title1={title1}
          title2={title2}
          setIsOpenBoxDropdown={setIsOpenBoxDropdown} 
        />
      )}
    </div>
  );
};


const BoxComponentMobile = ({ setOpenSidebar, profileMobile, icon, title, introductory, title1, title2, show, href }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch();

  const handleClick = () => {
    if (introductory) {
      router.push('/dashboard/introductory');
    }
    else if (profileMobile) {
      dispatch(setShowProfileCard());
      setOpenSidebar(false);
    }
    else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className={`px-4 py-3 flex flex-col bg-[#040C19] border-x border-t ${isOpen ? '' : 'border-b'
          } border-[var(--neon-purple)] cursor-pointer relative`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            {icon}
            <span className="text-sm font-semibold">{show && !isOpen ? "" : title}</span>
          </div>
          {introductory ? (
            <span className="text-[9px] text-orange-300 rounded-sm bg-red-950 px-2 py-[1px] ml-2">Free</span>
          ) : (
            <div className="cursor-pointer ml-3">
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
          )}
        </div>

        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center'>
          <NeonElipse />
        </div>

        {isOpen && (
          <BoxDropdown title1={title1} title2={title2} href={href} setOpenSidebar={setOpenSidebar} />
        )}
      </div>
    </div>
  );
};

// const BoxDropdown = ({ className = '', title1, title2, href }) => {

//   return (
//     <motion.div
//       className={`${className} absolute flex flex-col gap-y-2 top-full left-0 right-0 min-w-full -mx-[1px]
//         border-x-[1px] border-b border-[var(--neon-purple,#C99BFD)] bg-[#040C19] px-4 py-2 z-10 overflow-hidden`}
//       initial={{ height: 0, opacity: 0 }}
//       animate={{ height: 'auto', opacity: 1 }}
//       transition={{ duration: 0.3, ease: 'easeInOut' }}
//     >
//       <Link href={href} className="text-xs text-white flex justify-between">
//         {title1} <ArrowRight size={21} />
//       </Link>
//       <Link href={href} className="text-xs text-white flex justify-between">
//         {title2} <ArrowRight size={21} />
//       </Link>
//     </motion.div>
//   );
// };


const BoxDropdown = ({ title1, title2, href, setOpenSidebar,setIsOpenBoxDropdown }) => {
  const router = useRouter();
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  }
  const handleClick = ()=>{
    router.push(href);
    setIsOpenBoxDropdown(false);
  }
  return (
    <motion.div
      className="absolute top-full left-0 right-0 w-full border-x border-b border-[var(--neon-purple)] bg-[#040C19] px-4 py-2 z-10 overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-y-2">
        <button className="text-xs text-white flex justify-between items-center" onClick={handleClick}>
          {title1} <ArrowRight size={21} />
        </button>

        <button className="text-xs text-white flex justify-between items-center"  onClick={handleClick}>
          {title2} <ArrowRight size={21} />
        </button>
      </div>
    </motion.div>
  );
};

export default DashboardNavbar;