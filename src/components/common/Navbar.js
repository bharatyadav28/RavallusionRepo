import { CustomButton } from "./CustomButton";

const Navbar = () => {
  return (
    <div>
      <nav className="p-5 w-full flex justify-between items-center backdrop-blur-lg navbar fixed top-0 z-10">
        <div className="md:ml-[5%] ">
          <i className="text-2xl font-medium">Ravallusion</i>
        </div>
        <CustomButton className="mr-5">Login</CustomButton>
        <div className=" bg-white fixed bottom-0"></div>
      </nav>
    </div>
  );
};

export default Navbar;
