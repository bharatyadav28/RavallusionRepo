import { CustomButton } from "./CustomButton";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full z-[1000]">
      <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[gray] to-transparent"></div>
      <nav className="p-5 w-full flex justify-between items-center backdrop-blur-lg navbar  z-10">
        <div className="md:ml-[5%] ">
          <i className="text-2xl font-medium">Ravallusion</i>
        </div>
        <CustomButton className="mr-5">Login</CustomButton>
      </nav>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[gray] to-transparent"></div>
    </div>
  );
};

export default Navbar;
