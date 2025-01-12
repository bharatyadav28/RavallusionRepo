import { CrossIcon, RoundCross, RoundCrossFill, RoundPause, UploadIcon } from '@/lib/svg_icons';
import React from 'react'
import { CustomButton, GlowButton } from '../common/CustomButton';
import { Button } from '../ui/button';
import Image from 'next/image';



const SubmitAssignment = () => {
  return (
    <div className='p-6 bg-[#181F2B] w-full rounded-2xl'>
      {/* // <div className='p-6 bg-[#2c6ad5] absolute w-1/2'> */}

      <div className='flex items-center justify-between '>
        <div >
          <h1 className='text-lg '>Assignment submission</h1>
          <p className='text-xs text-gray-400'>Add your documents here, and you can upload up to 5 files max</p>
        </div>

        <CrossIcon />
      </div>

      <div className='my-4 bg-[var(--Surface)] p-4 items-center flex justify-center border border-dashed border-[var(--neon-purple)] flex-col'>
        <UploadIcon />
        <h1 className='text-lg mt-3'>Drag your file(s) to start uploading</h1>

        <div className="flex items-center my-2">

          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-0 right-0 border-t border-transparent">
              <div className="h-px bg-gradient-to-l from-white via-gray-400 to-black"></div>
            </div>
          </div>

          <span className="mx-4 text-gray-300">OR</span>

          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-0 right-0 border-t border-transparent">
              <div className="h-px bg-gradient-to-r from-white via-gray-400 to-black"></div>
            </div>
          </div>
        </div>


        <Button variant={"neonOutline"}>
          Browse files
        </Button>

      </div>

      <p className='text-sm'>Only support .jpg, .png and .svg and zip files</p>

      <h1 className='text-md font-semibold my-4'>Uploaded File</h1>

      <FileToUpload />
      <FileToUpload />
      <FileToUpload />
      <FileToUpload />


      <div className='p-4 flex items-center justify-between rounded-xl border border-gray-400'>

        <div>
          <p className='text-sm font-semibold'>Uploading...</p>
          <p className='text-[10px] text-gray-300'>65%  • 30 seconds remaining</p>
        </div>


        <div className='flex items-center gap-x-1'>
          <RoundPause />

          <RoundCrossFill />
        </div>
      </div>

      <div className='flex items-center gap-x-4 justify-end mt-4'>
        <Button variant="outline">
          Cancel
        </Button>
        <Button className="bg-[var(--neon-purple)] py-5">
          Submit
        </Button>
      </div>

    </div>
  )
}


const FileToUpload = () => {
  return (
    <div className='p-4 flex items-center justify-between rounded-xl border border-gray-400 mb-2'>
      <div className='flex items-center gap-x-2'>
        <Image src={'/zip img.png'} alt='zip img' width={36} height={36} />
        <div>
          <p className='text-sm font-semibold'>assets.zip</p>
          <p className='text-[10px] text-gray-300'>5.3MB</p>
        </div>
      </div>
      <RoundCross />
    </div>
  )
}

export default SubmitAssignment;