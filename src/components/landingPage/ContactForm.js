"use client";

import {
  emailIcon,
  indiaFlag,
  locationIcon,
  professionIcon,
  uploadIcon,
  userIcon,
} from "@/lib/svg_icons";
import {
  CheckBoxInput,
  TextArea,
  TextInput,
  UploadInput,
} from "../common/CustomInputs";
import { SubmitButton } from "../common/CustomButton";
import { useState } from "react";
import { submitQuery } from "@/lib/serverAction";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "../common/LoadingSpinner";
import CustomCombobox from "../common/CustomCombobox";


const ContactForm = () => {
  const { toast } = useToast();
  const formData = new FormData();
  const [errors, setErrors] = useState("");
  const [formInputs, setFormInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    profession: "",
    address: "",
    message: "",
    file: null,
    privacy: false
  });
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formInputs.profession || formInputs.profession=="" ) {
     const newErrors  = "This field is required.";
      setErrors(newErrors);
    return;
  }
   
    setLoading(true);

    Object.entries(formInputs).forEach(([key, value]) => {
      if (key === "first_name" || key === "last_name") return;
      formData.append(key, value);
    });
    formData.append("name", `${formInputs.first_name} ${formInputs.last_name}`);

    const res = await submitQuery(formData);
    setLoading(false);

    if (res.success) {
      setFormInputs({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        profession: "",
        address: "",
        message: "",
        file: null,
        privacy: false
      });
      toast({
        variant: "default",
        title: res.data.message,
        className: "bg-green-500 text-white",
      });
    } else {
      toast({
        variant: "destructive",
        title: res.message,
      });
    }
  };

  const handleMobileChange = (data) => {
    if (/^\d{0,10}$/.test(data)) {
      setFormInputs({ ...formInputs, mobile: data });
    }
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 w-full sm:w-[80%] md:w-[40rem] "
      >
        <h1 className='text-4xl font-semibold text-white hidden xl:block'>Any Queries?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <TextInput
            label="Your First Name"
            id="first_name"
            placeholder="First Name"
            icon={userIcon}
            required={true}
            value={formInputs.first_name}
            onChange={(data) =>
              setFormInputs({ ...formInputs, first_name: data })
            }
          />
          <TextInput
            label="Your Last Name"
            id="last_name"
            placeholder="Last Name"
            icon={userIcon}
            required={true}
            value={formInputs.last_name}
            onChange={(data) => setFormInputs({ ...formInputs, last_name: data })}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextInput
            label="Your Email Name"
            id="email"
            type={"email"}
            placeholder="Email address"
            icon={emailIcon}
            required={true}
            value={formInputs.email}
            onChange={(data) => setFormInputs({ ...formInputs, email: data })}
          />
          <TextInput
            type={'number'}
            label="Your Phone Number"
            id="phone_no"
            placeholder="Phone number"
            icon={indiaFlag}
            required={true}
            value={formInputs.mobile}
            onChange={handleMobileChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
          <CustomCombobox
            label={"Your Profession"}
            id={"profession"}
            required={true}
            icon={professionIcon}
            value={formInputs.profession}
            onChange={(data) => setFormInputs({ ...formInputs, profession: data }, setErrors(""))}
          />
{errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
</div>
          <TextInput
            label="Your Address"
            id="address"
            placeholder="Address"
            icon={locationIcon}
            value={formInputs.address}
            onChange={(data) => setFormInputs({ ...formInputs, address: data })}
          />


        </div>
        <UploadInput
          placeholder="Upload file"
          icon={uploadIcon}
          label="Upload Your File(JPG, PNG, PDF and Etc..)"
          id="upload-file"
          value={formInputs.file?.name || "Upload file"}
          onChange={(data) => setFormInputs({ ...formInputs, file: data })}
        />
        <TextArea
          label="Message"
          id="message"
          placeholder="Leave us a message..."
          required={true}
          rows={3}
          value={formInputs.message}

          onChange={(data) => setFormInputs({ ...formInputs, message: data })}
        />
        <CheckBoxInput
          label="You agree to our friendly privacy policy."
          id="privacy"
          required={true}
          checked={formInputs.privacy}
          onChange={(data) => setFormInputs({ ...formInputs, privacy: data })}
        />
        <SubmitButton className="!mt-[8px] text-base !py-5">
          Submit {isLoading && <LoadingSpinner />}
        </SubmitButton>
      </form >
  );
};

export default ContactForm;
