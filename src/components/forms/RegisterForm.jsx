"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// const baseUrl = 'https://backend.getlinked.ai';
// const getCategories = async () => {
//   const res = await fetch(`${baseUrl}/hackathon/categories-list`);

//   console.log(await res.json());
// };

// const use

const RegisterForm = () => {
  const categories = [
    {
      id: 1,
      name: "MOBILE",
    },
    {
      id: 2,
      name: "WEB",
    },
    {
      id: 3,
      name: "UI/UX",
    },
  ];
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "select",
    groupSize: "select",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(formData);
    const checkInput = values.some((value) => {
      if (value === "" || value === "select") {
        setError(true);
        return true;
      }
      return false;
    });
    if (!checkInput) {
      setSuccess(true);
      setFormData({
        teamName: "",
        phone: "",
        email: "",
        projectTopic: "",
        category: "select",
        groupSize: "select",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <form
        className="reg-form flex flex-col md:flex-row md:flex-wrap md:justify-between md:gap-0 md:gap-y-5 gap-5 text-sm "
        onSubmit={handleSubmit}
      >
        <div className="reg-flex-col">
          <label htmlFor="teamName">Team’s Name</label>
          <input
            className="reg-input"
            type="text"
            name="teamName"
            id="teamName"
            placeholder="Enter the name of your group"
            value={formData.teamName}
            onChange={handleInputChange}
          />
        </div>
        <div className="reg-flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            className="reg-input"
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="reg-flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="reg-input"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="reg-flex-col">
          <label htmlFor="projectTopic">Project Topic</label>
          <input
            className="reg-input"
            type="text"
            name="projectTopic"
            id="projectTopic"
            placeholder="What is your group project topic"
            value={formData.projectTopic}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="reg-flex-col  w-3/5 ">
            <label htmlFor="projectTopic">Category</label>
            <select
              className="custom-select"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="select" selected disabled>
                Select your category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="reg-flex-col w-2/5 ">
            <label htmlFor="projectTopic">Group Size</label>

            <select
              className="custom-select"
              name="groupSize"
              id="groupSize"
              value={formData.groupSize}
              onChange={handleInputChange}
            >
              <option value="select" selected disabled>
                select
              </option>
              <option value="3">3 </option>
              <option value="5">5 </option>
            </select>
          </div>
        </div>
        <div className="text-[10px] md:text-xs w-full">
          <p className=" text-light italic">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreed"
              id="agreed"
              onChange={(e) => setTermsAgreed(e.target.checked)}
            />
            <p>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>
        {error && (
          <p className="italic text-red-500">
            {
              " **Please all fields are required (You can't leave any field blank)** "
            }
          </p>
        )}
        <button
          disabled={!termsAgreed}
          className="primary-btn disabled:opacity-70 w-[172px] h-[53px] mx-auto md:w-full "
        >
          Submit
        </button>
      </form>
      {success && <SuccessMessage />}
    </>
  );
};
export default RegisterForm;

const SuccessMessage = () => {
  return (
    <div className="fixed top-0 left-0 w-screen min-h-screen h-full flex justify-center items-center px-10 bg-[rgba(21,14,40,0.93)] z-50">
      <div className="w-full max-w-sm md:max-w-lg rounded-xl  border border-light p-10 bg-[rgba(255,255,255,0.03)]">
        <div className="max-w-[150px] md:max-w-[250px] mx-auto">
          <Image
            src={"/img/congratulation.png"}
            width={427}
            height={321}
            alt="done"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text-center font-semibold">
          <p className="md:text-[2rem]">
            Congratulations you have successfully Registered!
          </p>
          <p className="text-xs font-medium md:font-semibold md:text-sm">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <Link className="primary-btn h-[53px] mt-10" href={"/"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
