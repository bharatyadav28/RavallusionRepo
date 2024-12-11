"use client";
import { useRef } from "react";
import { CustomButton } from "./CustomButton";
import { Checkbox } from "../ui/checkbox";

const { cn } = require("@/lib/utils");

export const TextInput = (props) => {
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
  const classes = cn(
    "text-lg bg-transparent flex-grow outline-none",
    className
  );
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label htmlFor={id} className="text-sm">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>
      <div className="flex items-center gap-3 bg-[var(--input)] py-5 px-3 rounded-xl ">
        <span>{icon}</span>
        <input
          {...props}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classes}
          type="text"
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
    "text-lg bg-transparent flex-grow outline-none hidden",
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
      <label className="text-sm">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>
      <div className="flex items-center gap-3 bg-[var(--input)] py-[13px] px-3 rounded-xl ">
        <span id={id}>{icon}</span>
        <span className="flex-grow text-lg text-white/60">{placeholder}</span>
        <CustomButton
          className="bg-transparent !m-0 !p-4 !text-sm"
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
    "text-lg bg-transparent flex-grow outline-none resize-none",
    className
  );
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label htmlFor={id} className="text-sm ">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>
      <div className="flex items-center gap-3 bg-[var(--input)] py-[13px] px-1 rounded-xl ">
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
    "text-lg outline-none border-white border-2 !bg-transparent w-5 h-5",
    className
  );
  return (
    <div className="flex gap-[0.375rem] items-center">
      <Checkbox {...props} className={classes} id={id} />
      <label
        htmlFor={id}
        className="text-base sm:text-lg text-white/60 cursor-pointer"
      >
        {label}
        {required && <span className="text-red-700 text-xs"> *</span>}
      </label>
    </div>
  );
};
