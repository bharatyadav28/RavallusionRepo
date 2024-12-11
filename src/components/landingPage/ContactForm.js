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

const ContactForm = () => {
  // const formData = new FormData();
  const [formInputs, setFormInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    profession: "",
    address: "",
    message: "",
    file: null,
  });

  const submitQuery = async (data) => {
    try {
      const res = await fetch("https://revallusion.onrender.com/api/v1/query", {
        method: "POST",
        body: data,
      });
      const message = await res.json();
    } catch (error) {
      console.log(error);
    }
    console.log(message);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    const formData = {
      name: formInputs.first_name + " " + formInputs.last_name,
      email: formInputs.email,
      mobile: formInputs.mobile,
      profession: formInputs.profession,
      address: formInputs.address,
      file: formInputs.file,
      message: formInputs.message,
    };
    // formData.append("name", formInputs.first_name + " " + formInputs.last_name);
    // formData.append("email", formInputs.email);
    // formData.append("mobile", formInputs.mobile);
    // formData.append("profession", formInputs.profession);
    // formData.append("address", formInputs.address);
    // formData.append("message", formInputs.message);
    // formData.append("file", formInputs.file);
    console.log(formData);
    submitQuery(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:gap-5 sm:py-[3.75rem] w-full sm:w-[80%] md:w-[50rem] "
    >
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
          placeholder="Email address"
          icon={emailIcon}
          required={true}
          value={formInputs.email}
          onChange={(data) => setFormInputs({ ...formInputs, email: data })}
        />
        <TextInput
          label="Your Phone Number"
          id="phone_no"
          placeholder="Phone number"
          icon={indiaFlag}
          required={true}
          value={formInputs.mobile}
          onChange={(data) => setFormInputs({ ...formInputs, mobile: data })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInput
          label="Your Profession"
          id="profession"
          placeholder="Profession"
          icon={professionIcon}
          value={formInputs.profession}
          onChange={(data) =>
            setFormInputs({ ...formInputs, profession: data })
          }
        />
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
        value={formInputs.file}
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
      />
      <SubmitButton className="mt-[10px]">Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;
