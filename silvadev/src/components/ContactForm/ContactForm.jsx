"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import InputForm from "./InputFields";

function ContactForm() {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [unSuccessSubmit, setUnSuccessSubmit] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.name.trim() === "") {
      errors.name = "*Įveskite vardą arba įmonę.";
    }
    if (inputValues.email.trim() === "" || !inputValues.email.includes("@")) {
      errors.email = "*Įveskite teisingą el. paštą.";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(() => validateValues(inputFields));
    setSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      setSuccessSubmit(false);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setSuccessSubmit(true);
            form.current.reset();
          },
          (error) => {
            setUnSuccessSubmit(true);
          }
        );
    }
  }, [errors]);

  return (
    <div
      className={`md:h-[31rem] max-sm:bg-colWaterLeaf  z-20 h-[39rem] flex max-md:flex-col justify-center md:justify-end text-right max-md:items-end items-center border-y-[1px]  border-colJetBlack pl-4 py-5 pr-4 md:p-12 xl:p-24 2xl:p-36  ${
        showForm ? "bg-colWaterLeaf" : "bg-colBlack"
      }`}
    >
      <div className="max-md:hidden">
        {!showForm && (
          <h2
            className="textH1 text-colBlack md:text-colWaterLeaf mb-5 cursor-pointer	"
            onClick={() => setShowForm(true)}
          >
            Parašyk <br /> mums
          </h2>
        )}
      </div>
      <div className="md:hidden ">
        {!successSubmit && (
          <h2 className="textH1 mb-10 text-colBlack ">
            Parašyk <br /> mums
          </h2>
        )}
      </div>

      {!successSubmit && (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className={`text-colBlack flex flex-col justify-center gap-4 w-full ${
            showForm ? "visible" : "md:hidden"
          }`}
        >
          <InputForm
            handleChange={handleChange}
            errors={errors}
            unSuccessSubmit={unSuccessSubmit}
          />
        </form>
      )}

      {successSubmit && (
        <div className="flex flex-col justify-center items-center w-full text-colBlack gap-9">
          <Image
            src="/successMark.svg"
            alt="Arrow icon"
            height={72}
            width={115}
          />
          <p>Žinutė sėkmingai išsiųsta!</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
