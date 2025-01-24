"use client";
import { useRef } from "react";
import { CustomButton } from "./CustomButton";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

const { cn } = require("@/lib/utils");

export const TextInput = (props) => {
  const {
    type = 'text',
    children,
    className,
    onChange,
    value,
    id,
    label,
    icon,
    placeholder,
    required,
  } = props;
  const classes = cn(
    "text-sm bg-transparent flex-grow outline-none",
    className
  );
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label htmlFor={id} className="text-xs">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>
      <div className="flex items-center gap-3 bg-[var(--input)] py-3 px-2 rounded-xl ">
        <span>{icon}</span>
        <input
          type={type}
          {...props}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classes}
        />
      </div>
    </div>
  );
};

export const UploadInput = (props) => {
  const {
    children,
    className,
    onChange,
    value,
    id,
    label,
    icon,
    placeholder,
    required,
  } = props;

  const uploadRef = useRef(null);
  const classes = cn(
    "text-sm bg-transparent flex-grow outline-none hidden",
    className
  );

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    onChange(file);
  };

  const handleClick = () => {
    uploadRef.current.click();
  };
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label className="text-xs">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>
      <div className="flex items-center gap-3 bg-[var(--input)] !py-2 px-2 rounded-xl ">
        <span id={id}>{icon}</span>
        <span className="flex-grow text-sm text-white/60">{value}</span>
        <CustomButton
          className="bg-transparent !m-0 !p-4 !text-xs"
          htmlFor={id}
          type="button"
          onClick={handleClick}
        >
          {placeholder}
        </CustomButton>
        <input
          onChange={handleChange}
          className={classes}
          type="file"
          ref={uploadRef}
        />
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const {
    children,
    className,
    onChange,
    value,
    id,
    label,
    icon,
    placeholder,
    required,
    rows,
    cols,
  } = props;
  const classes = cn(
    "text-sm bg-transparent flex-grow outline-none resize-none",
    className
  );
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label htmlFor={id} className="text-xs ">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>
      <div className="flex items-center gap-3 bg-[var(--input)] !py-3 px-1 rounded-xl ">
        <span>{icon}</span>
        <textarea
          {...props}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classes}
          type="text"
          rows={rows}
          cols={cols}
        />
      </div>
    </div>
  );
};

export const CheckBoxInput = (props) => {
  const { className, onChange, value, id, label, required } = props;
  const classes = cn(
    "text-sm outline-none border-white border-2 !bg-transparent w-4 h-4",
    className
  );
  return (
    <div className="flex gap-[0.375rem] items-center">
      <Checkbox {...props} className={classes} id={id} />
      <label htmlFor={id} className="text-sm text-white/60 cursor-pointer">
        {label}
        {required && <span className="text-red-700 text-xs"> *</span>}
      </label>
    </div>
  );
};


export const SelectInput = (props) => {
  const {
    type = "text",
    children,
    className,
    onChange,
    value,
    id,
    label,
    icon,
    placeholder,
    required,
    options,
  } = props;

  // Classes for the input/select field
  const classes = cn(
    "text-sm bg-transparent flex-grow outline-none",
    className
  );

  return (
    <div className="flex flex-col gap-[0.375rem]">
      {/* Label */}
      <label htmlFor={id} className="text-xs">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>

      {/* Input or Select based on type */}
      <div className="flex items-center gap-2 bg-[var(--input)] py-3 px-2 rounded-xl">
        {/* Optional icon */}
        {icon && <span>{icon}</span>}

        {type === "select" ? (
          // Dropdown for type "select"
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${classes} bg-[var(--input)] text-white appearance-none border-0 outline-none rounded-md px-1 `}
          >
            <option value="" disabled className="text-gray-400 bg-[var(--input)] pt-8 border-0">
              {placeholder}
            </option>
            {options?.map((option, index) => (
              <option
                key={index}
                value={option.value}
                className="text-white bg-[var(--input)] py-2 "
              >
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            {...props}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={classes}
          />
        )}
      </div>
    </div>
  );
};



export const SearchInput = (props) => {
  const {
    className,
    onChange,
    value,
    id,
    label,
    placeholder,
    required,
    suggestions = [],
    icon,
  } = props;

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (inputValue) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  const classes = cn(
    "text-sm bg-transparent flex-grow outline-none",
    className
  );

  return (
    <div className="flex flex-col gap-[0.375rem] relative">
      {/* Label */}
      <label htmlFor={id} className="text-xs">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>

      {/* Input Field */}
      <div className="flex items-center gap-3 bg-[var(--input)] py-3 px-2 rounded-xl">
        {icon && <span>{icon}</span>}
        <input
          type="text"
          id={id}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={classes}
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute bg-[var(--card)] border border-gray-700 rounded-lg mt-1 z-10 w-full text-sm">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
