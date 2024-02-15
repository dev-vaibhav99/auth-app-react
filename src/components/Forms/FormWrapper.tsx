import React from "react";

interface Props {
  children: React.ReactNode;
  error: string;
  name: string;
}

const FormWrapper: React.FC<Props> = ({ children, error, name }) => {
  return (
    <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12 flex-grow h-screen w-screen">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto lg:w-6/12 md:w-7/12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <p className="text-red-500">{error}</p>
            <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
            </div>
            <div className="divide-y divide-gray-200">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
