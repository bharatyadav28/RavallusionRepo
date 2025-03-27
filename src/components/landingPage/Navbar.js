import Link from "next/link";
import { CustomButton } from "../common/CustomButton";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 !w-full z-[1000] md:px-[8%] 2xl:px-[9%] backdrop-blur-lg ">
      <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[gray]/50 to-transparent"></div>
      <nav className="p-5 w-full flex justify-between items-center backdrop-blur-lg navbar  z-10">
        <Link href="/">
          <i className="text-2xl 2xl:text-3xl font-medium">Ravallusion</i>
        </Link>

        <Link href={'/login'}>
          <CustomButton className="mr-5 py-5 px-6 text-base 2xl:text-xl !m-0"
            style={{
              background: "linear-gradient(0deg, rgba(163, 127, 255, 0.15) 0%, rgba(163, 127, 255, 0.15) 100%), #030A14"}}
          >
          <User className=" !w-[19px] !h-[19px]" />
          <span className="hidden md:block text-sm font-semibold">Login</span>
        </CustomButton>
      </Link>

    </nav>
      {/* <div className="h-[1px] bg-gradient-to-r from-transparent via-[gray]/50 to-transparent"></div> */ }
    </div >
  );
};

export default Navbar;
