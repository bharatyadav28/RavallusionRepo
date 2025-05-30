import Link from "next/link";
import { CustomButton } from "../common/CustomButton";
import { User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 !w-full z-[1000] md:px-[8%] 2xl:px-[9%] backdrop-blur-lg ">
      <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[gray]/50 to-transparent"></div>
      <nav className="p-5 w-full flex justify-between items-center backdrop-blur-lg navbar  z-10">
        <div className="flex gap-2 items-center text-xl font-semibold">
          <Link href="/">
            {/* <i className="text-2xl 2xl:text-3xl font-medium">Ravallusion</i> */}
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div>Ravallusion Academy</div>
        </div>

        <Link href={"/login"}>
          <Button
            variant="default"
            className="primary-btn bg-transparent border-2 border-[var(--neon-purple)] mr-5 py-5 px-6 text-base 2xl:text-xl rounded-xl"
          >
            <User className=" !w-[19px] !h-[19px]" />
            <span className="hidden md:block text-sm font-semibold">Login</span>
          </Button>
        </Link>
      </nav>
      {/* <div className="h-[1px] bg-gradient-to-r from-transparent via-[gray]/50 to-transparent"></div> */}
    </div>
  );
};

export default Navbar;
