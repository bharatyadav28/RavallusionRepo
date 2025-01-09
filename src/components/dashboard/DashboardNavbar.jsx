"use client";

import { BulbIcon, CrownIcon, EllipseOfSearch, Gear, HamburgerMenu } from '@/lib/svg_icons'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, X, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const DashboardNavbar = () => {
  const pathname = usePathname();
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [show, setShow] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (pathname === "/dashboard/player-dashboard") {
      setShow(true);
    }
  }, [pathname]);

  return (
    <div className='bg-[#181F2B] w-full p-4 lg:px-8 lg:py-4 flex items-center justify-between relative rounded-lg'>
      {openSidebar && <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
      {show ? (
        <div className='flex gap-x-7 items-center'>
          <ArrowLeft />
          <div>
            <h1 className='text-lg font-semibold mb-1'>Opening file</h1>
            <p className='text-xs text-[#CDCED1]'>Photoshop interface  <span className='ml-2'>&#183; 1 Basic interface</span></p>
          </div>
        </div>
      ) :
        (<h1 className='text-2xl italic font-bold'>Ravallusion</h1>)
      }


      <div className='flex gap-x-2 items-center'>

        <div className='p-3 border border-gray-600 relative cursor-pointer'>
          <EllipseOfSearch />
          <SearchIcon size={24} />
        </div>

        <BoxComponent show={show} icon={<CrownIcon />} title={"Advanced"} title1={"Photoshop"} title2={"Premier pro"} />


        <BoxComponent show={show} icon={<Gear />} title={"Beginner"} title1={"Photoshop"} title2={"Premier pro"} />


        <BoxComponent show={show} icon={<BulbIcon />} title={"Introductory"} introductory={true} />


        <ProfileComponent setIsOpenProfile={setIsOpenProfile} isOpenProfile={isOpenProfile} />


        <div onClick={() => setOpenSidebar(true)} className='p-3 border relative cursor-pointer lg:hidden border-[var(--neon-purple,#C99BFD)] '>
          <HamburgerMenu width={24} />
        </div>

      </div>
    </div>
  )
}

const SideBar = ({ openSidebar, setOpenSidebar }) => {
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

  const backdropVariants = {
    open: { opacity: 1, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" },
  };
  const show = false
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
        initial="closed"
        animate={openSidebar ? "open" : "closed"}
        variants={backdropVariants}
        onClick={() => setOpenSidebar(false)}
      />

      <motion.div className=" absolute bg-[var(--Surface)] w-72 pt-12 pb-8 px-4 h-screen top-0 left-0 z-20 lg:hidden"
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
          <BoxComponentMobile show={show} icon={<CrownIcon />} title={"Advanced"} title1={"Photoshop"} title2={"Premier pro"} />
          <BoxComponentMobile show={show} icon={<Gear />} title={"Beginner"} title1={"Photoshop"} title2={"Photoshop"} />
          <BoxComponentMobile show={show} icon={<BulbIcon />} title={"Introductory"} introductory={true} />

          <BoxComponentMobile show={show} icon={<div className='bg-gray-300 rounded-full w-7 h-7 relative'>
            <Image
              src={'/URL_of_image_for_FX_Console_Plugin.jpeg'}
              alt='Profile pic'
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            /> </div>} title={"Profile"} title1={"Advance"} title2={"Beginner"} />
        </div>
      </motion.div>
    </>
  )
}


const ProfileComponent = ({ isOpenProfile, setIsOpenProfile }) => {
  return (
    <div className='ml-3 bg-gray-300 rounded-full w-11 h-11 relative hidden lg:block cursor-pointer' onClick={() => setIsOpenProfile((prev) => !prev)}>
      <Image
        src={'/URL_of_image_for_FX_Console_Plugin.jpeg'}
        alt='Profile pic'
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />

      {isOpenProfile && (<BoxDropdown title1={"Advance"} title2={"Beginner"} className={"overflow-visible !-left-28 !top-[58px] border-none px-3 py-2 z-10 before:content-[''] before:absolute before:-top-[9px] before:right-4 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#040C19] before:z-10"} />
      )}
    </div>
  )
}

const BoxComponent = ({ icon, title, introductory, title1, title2, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-3 lg:flex flex-col border  border-[var(--neon-purple,#C99BFD)] relative cursor-pointer hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          {icon}
          <span className="text-sm font-semibold">{show && !isOpen ? "" : title}</span>
        </div>
        {introductory ? (
          <span className="text-[9px] text-orange-300 rounded-sm bg-red-950 px-2 py-[1px] ml-2">Free</span>
        ) : (
          <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer ml-3">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
        )}
      </div>

      {isOpen && (
        <BoxDropdown title1={title1} title2={title2} setIsOpen={setIsOpen} />
      )}


    </div>
  );
};


const BoxComponentMobile = ({ icon, title, introductory, title1, title2, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-3 lg:flex flex-col border w-auto border-[var(--neon-purple,#C99BFD)] relative cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          {icon}
          <span className="text-sm font-semibold">{show && !isOpen ? "" : title}</span>
        </div>
        {introductory ? (
          <span className="text-[9px] text-orange-300 rounded-sm bg-red-950 px-2 py-[1px] ml-2">Free</span>
        ) : (
          <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer ml-3">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
        )}
      </div>

      {isOpen && (
        <BoxDropdown className={"relative border-none bg-[#040C19] mt-3 ml-0"} title1={title1} title2={title2} />
      )}


    </div>
  );
};


const BoxDropdown = ({ className = '', title1, title2, setIsOpen }) => {
  return (
    <motion.div
      className={`${className} absolute flex flex-col gap-y-2 top-full left-0 right-0 min-w-full -mx-[1px]
        border-x-[1px] border-b border-[var(--neon-purple,#C99BFD)] bg-[#040C19] px-4 py-2 z-10 overflow-hidden`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Link href="/dashboard/player-dashboard" className="text-xs text-white flex justify-between"  onClick={() => setIsOpen(false)}>
        {title1} <ArrowRight size={21} />
      </Link>
      <Link href="/dashboard/player-dashboard" className="text-xs text-white flex justify-between" onClick={() => setIsOpen(false)}>
        {title2} <ArrowRight size={21}  />
      </Link>
    </motion.div>
  );
};



export default DashboardNavbar