import React from "react";
import { Inputarea, Textarea } from "../components/components";

const Contact = () => {
  const paragraphStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 3, // Limit to 3 lines
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis", // Adds ellipsis (...) at the end of truncated text
  };

  return (
    <div className="">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-neutral-800 mb-8">
        Contact Us
      </h1>
      <p
        className="text-base sm:text-lg text-neutral-600 text-center mb-8"
        style={paragraphStyle}
      >
        Have questions or need legal insights? Reach out to us! We're here to
        help. This is some additional text to make sure the paragraph exceeds
        three lines so we can see the effect of the line clamping.
      </p>

      {/* Contact Form */}
      <form className="space-y-4">
        <Inputarea label={"Fullname"} placeholder={"Jhon Doe"} required />
        <Inputarea
          label={"Email"}
          placeholder={"jhondoe@example.com"}
          required
        />
        <Inputarea label={"Subject"} placeholder={"Legal Inquiry"} required />
        <Textarea label={"Message"} placeholder={"Your message..."} required />
        <div>
          <button
            type="submit"
            className="cursor-pointer w-full mt-6 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="w-full h-[1px] bg-neutral-200 my-[50px]"></div>

      <div>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 bg-neutral-100">
            <h3 className="text-xl font-semibold text-neutral-800">
              Office Address
            </h3>
            <p className="text-base text-neutral-600 mt-2">
              123 Legal Street, Suite 456
              <br />
              Law City, LC 7890
              <br />
              Country
            </p>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 bg-neutral-100">
            <h3 className="text-xl font-semibold text-neutral-800">
              Contact Details
            </h3>
            <p className="text-base text-neutral-600 mt-2">
              <strong>Phone:</strong> +1 (123) 456-7890
              <br />
              <strong>Email:</strong> info@legalinsights.com
              <br />
              <strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
