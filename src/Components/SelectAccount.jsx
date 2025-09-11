import React from "react";
import { Link } from "react-router";

const SelectAccount = () => {
  const accountTypes = [
    {
      id: "student",
      title: "I'm a student",
      description: "Access learning resources",
      icon: "/student.png",
      route: "/create/student-account",
    },
    {
      id: "teacher",
      title: "I'm a teacher",
      description: "Create and manage courses",
      icon: "/tutor.png",
      route: "/create/tutor-account",
    },
  ];

  return (
    <div className='min-h-screen bg-white flex items-center justify-center px-6'>
      <div className='w-full max-w-2xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='font-clash text-accent text-4xl font-bold mb-3'>
            Create Account
          </h1>
          <p className='font-clash text-textmuted text-lg'>
            Select your account type to continue
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-2 gap-6'>
          {accountTypes.map((account) => (
            <Link key={account.id} to={account.route} className='group block'>
              <div className='border-2 border-textmuted/20 rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 bg-white'>
                {/* Icon */}
                <div className='w-16 h-16 mx-auto mb-4 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300'>
                  <img
                    src={account.icon}
                    alt={account.title}
                    className='w-10 h-10 object-contain'
                  />
                </div>

                {/* Content */}
                <h3 className='font-clash text-textmain text-xl font-semibold mb-2'>
                  {account.title}
                </h3>
                <p className='font-clash text-textmuted text-sm mb-6'>
                  {account.description}
                </p>

                {/* Button */}
                <div className='inline-flex items-center px-6 py-3 bg-primary text-white font-clash font-medium rounded-xl hover:bg-primary/90 transition-colors duration-200'>
                  Continue
                  <svg
                    className='ml-2 w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className='font-clash text-textmuted/70 text-sm text-center mt-8'>
          You can change your account type later in settings
        </p>
      </div>
    </div>
  );
};

export default SelectAccount;
