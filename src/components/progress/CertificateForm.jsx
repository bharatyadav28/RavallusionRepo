import React, { useState } from "react";

import CustomDialog from "../common/CustomDialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function CertificateForm({ open, setOpen }) {
  const [name, setName] = useState("");
  return (
    <CustomDialog open={open} close={() => setOpen(false)}>
      <div className="flex items-center justify-center my-8">
        <div
          className="w-full md:w-4/5 p-10 rounded-[28px]"
          style={{
            background: "rgba(13, 33, 61, 0.35)",
            backdropFilter: "blur(104.0999984741211px)",
          }}
        >
          <div className="flex flex-col gap-3 items-start justify-between mb-7">
            <h1 className="text-xl font-semibold">Enter details</h1>
            <p className="opacity-80">
              Please provide us your name to get certificate
            </p>
          </div>

          <div className="mb-5">
            <label
              className="text-gray-100 font-semibold mb-[6px]"
              htmlFor="name"
            >
              {"Name"}
            </label>
            <Input
              type={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-6 px-3 border-2 rounded-[12px] border-gray-500 mt-1 input-shadow "
            />
            <div className="mt-2 text-[0.875rem] opacity-80">
              Please enter your name carefully. This will be used on your
              certificate and cannot be changed later.
            </div>
          </div>

          <div className="flex justify-end mt-1">
            <Button
              className="hover:bg-[var(--neon-purple)] px-10 py-6 glow-btn font-semibold w-max rounded-lg "
              //   onClick={handleSave}
            >
              {false ? "Updating..." : "Get Certificate"}
            </Button>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
}

export default CertificateForm;
