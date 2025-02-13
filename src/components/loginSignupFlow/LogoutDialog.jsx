import { LogoutCard } from '@/lib/svg_icons'
import React from 'react'
import { Button } from '../ui/button'

const LogoutDialog = ({setIsOpenLogout,onClick,switchDeviceLoading}) => {
    return (
          <div className='flex items-center justify-center'>
                    <div
                        className="w-5/6 mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col backdrop-blur-lg"
                        style={{
                            background:
                                "radial-gradient(circle at top, #D94004 -120%, transparent 50%), #091926",
                        }}
                    >
                        <LogoutCard />
                        <div className='my-7'>
                            <h2 className='text-center text-2xl font-bold mb-4'>You arleady loggedIn other devices</h2>
                            <p className='text-sm text-center'>Do you want to logout</p>
                        </div>
        
                        <div className='flex items-center gap-x-4'>
                            <Button className="px-7 py-5 border border-gray-400 hover:bg-gray-700" onClick={()=>setIsOpenLogout(false)}>Cancel</Button>
                            <Button variant={'destructive'} className=" px-7 py-5 hover:bg-red-900" onClick={onClick}>{switchDeviceLoading?"Loading..": "Confirm"}</Button>
                        </div>
        
                    </div>
                </div>
    )
}

export default LogoutDialog