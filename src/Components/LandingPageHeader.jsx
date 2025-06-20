import Button from "./Button";

export default function LandingPageHeader() {

    return (
        <header className="bg-white flex justify-center items-center py-6 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-20 ">
            <div className="w-[90%] md:w-[85%] flex justify-between items-center mx-auto text-center">
                <img src="/landingPageLogo.png" alt="logo" className="w-[7rem] h-[3rem]" />
                {/* h-[3.855rem] w-[7.63125rem] */}
                <ul className="hidden md:flex justify-between items-center cursor-pointer font-clash gap-6 font-medium text-lg">
                    <li className="transition-colors hover:text-accent">Home</li>
                    <li className="transition-colors hover:text-accent">About Us</li>
                    <li className="transition-colors hover:text-accent">Courses</li>
                    <li className="transition-colors hover:text-accent">Admission</li>
                    <li className="transition-colors hover:text-accent">Resources</li>
                    <li className="transition-colors hover:text-accent">Contact</li>
                </ul>
                <Button className=" transition-colors rounded-lg font-clash hover:bg-[#009688]">Login/Register</Button>
            </div>
        </header>
    )
}