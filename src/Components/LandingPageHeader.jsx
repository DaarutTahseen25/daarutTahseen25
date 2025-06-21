// import Button from "./Button";

export default function LandingPageHeader() {

    return (
        <header className="bg-white flex justify-center items-center py-6 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-20 ">
            <div className="w-[90%] lg:w-[85%] flex justify-between gap-2 items-center mx-auto text-center">
                <img src="/landingPageLogo.png" alt="logo" className="w-[5rem] lg:w-[7rem] lg:h-[3rem]" />
                {/* h-[3.855rem] w-[7.63125rem] */}
                <ul className="hidden md:flex justify-between items-center cursor-pointer font-clash gap-4 lg:gap-6 font-medium text-sm lg:text-lg">
                    <li className="transition-colors hover:text-accent">Home</li>
                    <li className="transition-colors hover:text-accent">About Us</li>
                    <li className="transition-colors hover:text-accent">Courses</li>
                    <li className="transition-colors hover:text-accent">Admission</li>
                    <li className="transition-colors hover:text-accent">Resources</li>
                    <li className="transition-colors hover:text-accent">Contact</li>
                </ul>
                <button className=" focus:outline-none transition-all rounded-lg px-4 py-2 text-sm lg:text-base md:inline-flex items-center justify-center shadow font-medium font-clash hover:bg-[#009688] hidden cursor-pointer bg-primary text-white hover:bg-primarydark ">Login/Register</button>
            </div>
        </header>
    )
}