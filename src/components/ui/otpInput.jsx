import React from 'react';

const OTPInput = () => {

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value.slice(-1); // Keep only the last digit
        }
    };
    return (
        <div className="flex space-x-2">
            {[...Array(6)].map((_, index) => (
                <input
                    key={index}
                    type="number"
                    className="outline-none w-10 h-10 md:w-12 md:h-12 text-center bg-[#091528] text-white border border-gray-400 rounded-md font-semibold"
                    maxLength={1}
                    onInput={(e) => handleInputChange(e, index)}
                />
            ))}
        </div>
    );
};

export default OTPInput;
