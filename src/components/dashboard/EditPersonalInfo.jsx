import { X } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const EditInfo = ({ label, content, onClick, onSave, type = 'text', isLoading }) => {
    const [inputValue, setInputValue] = useState(content);

    const handleSave = () => {
        onSave(inputValue);
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className="w-full md:w-4/5 p-10 rounded-[28px]"
                style={{
                    background: "rgba(13, 33, 61, 0.35)",
                    backdropFilter: "blur(104.0999984741211px)",
                }}
            >
                <div className="flex items-center justify-between mb-7">
                    <h1 className="text-lg">Enter details</h1>
                    <div className="cursor-pointer" onClick={onClick}>
                        <X />
                    </div>
                </div>


                <div className='mb-5'>
                    <label className='text-gray-100 text-sm mb-[6px]' htmlFor="name">{label}</label>
                    <Input
                        type={type}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full py-5 px-3 border-2 rounded-[12px] border-gray-500 mt-1 input-shadow" />
                </div>

                <div className='flex items-center gap-x-20'>

                    <Button className="px-7 py-6 w-full border border-gray-500 hover:bg-gray-700 font-semibold" onClick={onClick}>Cancel</Button>
                    <Button className="hover:bg-[var(--neon-purple)] px-7 py-6 bg-purple-400 w-full font-semibold " onClick={handleSave}>{isLoading ? "Updating..." : "Save"}</Button>

                </div>


            </div>
        </div>
    );
};

export default EditInfo;
