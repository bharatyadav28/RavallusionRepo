import { CustomButton } from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center backdrop-blur-lg navbar shadow-md ">
      <div className="md:ml-[5%] ">
        <i className="text-2xl font-medium">Ravallusion</i>
      </div>
      <CustomButton className="mr-5">Login</CustomButton>
    </nav>
  );
};

export default Navbar;
