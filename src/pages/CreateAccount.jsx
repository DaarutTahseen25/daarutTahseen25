import { Outlet } from "react-router";

const CreateAccount = () => {
  return (
<<<<<<< HEAD
    <div className="w-screen  grid grid-cols-1 lg:grid-cols-2">
=======
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2">
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
      {/* Left Side - Always static */}
      <div className="bg-secondary text-center flex flex-col justify-center items-center gap-4 px-8 py-10 lg:p-12">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[8rem] lg:w-[10rem] h-[4rem] lg:h-[6rem] cursor-pointer"
        />
<<<<<<< HEAD
        <p className="text-accent text-[30px] sm:text-[40px] font-medium leading-[100%] font-clash text-center">
          Join Us now!
        </p>
        <p className="font-bricolade text-[20px] font-[400px] text-center">
=======
        <p className="text-accent text-xl lg:text-2xl font-medium font-bricolage">
          Join Us now!
        </p>
        <p className="font-clash lg:text-xl">
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
          Become Part of an online growing community dedicated to preserving and
          spreading Islamic knowledge with excellence.
        </p>
      </div>

      {/* Right Side - Scrollable on large screens, aligned to top */}
      <div className="bg-bglight h-full px-5 py-6 lg:overflow-y-auto lg:h-screen">
        <div className="w-full min-h-screen flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
