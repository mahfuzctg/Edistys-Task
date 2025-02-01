import React, { useState } from "react";
import Banner from "../../reUsable/Banner/banner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      {/* Banner Section */}
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-gray-300 py-20">
        <Banner />

        {/* Form Wrapper */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-[50%] max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div className="flex flex-col md:flex-row md:space-x-6 gap-6">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 relative"
                  >
                    First Name
                    <span className="text-[#1066D5] absolute right-0 top-0">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full p-3 border border-[#406590] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406590]"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 relative"
                  >
                    Last Name
                    <span className="text-[#1066D5] absolute right-0 top-0">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full p-3 border border-[#406590] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406590]"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-6 gap-6">
                <div className="w-full">
                  <label
                    htmlFor="jobTitle"
                    className="block text-gray-700 relative"
                  >
                    Job Title
                    <span className="text-[#1066D5] absolute right-0 top-0">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter your job title"
                    className="w-full p-3 border border-[#406590] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406590]"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="company"
                    className="block text-gray-700 relative"
                  >
                    Company
                    <span className="text-[#1066D5] absolute right-0 top-0">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full p-3 border border-[#406590] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406590]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 relative">
                  Email
                  <span className="text-[#1066D5] absolute right-0 top-0">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-[#406590] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406590]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 relative"
                >
                  Message
                  <span className="text-[#1066D5] absolute right-0 top-0">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows={4}
                  className="w-full p-3 border border-[#406590] rounded-md focus:outline-none focus:ring-2 focus:ring-[#406590]"
                  required
                ></textarea>
              </div>

              <p className="text-sm text-[#406590] mt-2">
                By submitting this form, you confirm that you agree to the
                processing of your personal data by AnyTech as described in the
                privacy policy.
              </p>

              <button
                type="submit"
                className="mt-4 w-full py-2 bg-[#FF8144] text-white font-semibold rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#406590]"
              >
                Submit {">"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
