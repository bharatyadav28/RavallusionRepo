"use client";
import React, { useState } from "react";
import { Trophy } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Dot } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomPieChart } from "../common/CustomPieChart";
import Celebration from "./Celebration";
import CertificateForm from "./CertificateForm";

function YourProgress() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-1 items-center px-2">
            <CustomPieChart>
              <div className="p-4">
                <Trophy className="relative z-10 w-5 h-5" />
              </div>
            </CustomPieChart>
            <div className="text-md font-semibold md:block hidden text-nowrap">
              {" "}
              Your Progress
            </div>
            <div>
              <ChevronDown size={22} />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black border-none mt-[0.7rem] rounded-xl !mr-[13rem]">
          <div className="text-[#fff] px-5 pt-5 pb-3 ">
            <div className="flex text-lg gap-2">
              <div className="font-bold ">Course Progress</div>
              <div className="self-center opacity-80">
                <Dot />
              </div>
              <div className="opacity-80 ">Advance</div>
            </div>

            <div className="mt-4 flex gap-2 items-center">
              <div>
                <CustomPieChart>
                  {" "}
                  <div className="py-4 m-8 text-xl"> 25%</div>{" "}
                </CustomPieChart>
              </div>

              <div className="flex flex-col">
                <div className="font-semibold">53 of 350 complete.</div>
                {false && (
                  <div className="text-sm ">
                    Finish the course to get certificate{" "}
                  </div>
                )}
                {true && <Celebration />}
                {true && (
                  <div>
                    <div className="text-sm mt-1 break-all text-[#FFEA47]">
                      🥳 🎉 Congratulations you completed a course
                    </div>
                    <button
                      className="p-0 m-0 text-[#2C68F6] mt-2 font-medium"
                      onClick={() => setOpenDialog(true)}
                    >
                      Download certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>sdsd</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>

      <CertificateForm open={openDialog} setOpen={setOpenDialog} />
    </>
  );
}

export default YourProgress;
