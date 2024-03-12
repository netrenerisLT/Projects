"use client";
import React, { useState, useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import emailjs from '@emailjs/browser';


function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();
  const stylesFormInput =
    "w-full py-2.5 px-4 ring-2 ring-inset ring-colBlack focus:ring-colWhite bg-colTransparent placeholder-colBlack outline-none";
  const [successEmail, setSuccessEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorEmail(false);
    setSuccessEmail(false);

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
          setSuccessEmail(true);
          form.current.reset();
        },
        (error) => {
          setErrorEmail(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div classNameName="flex flex-col text-colBlack">
      {!showForm && (
        <h2
          className="textH2 text-colBlack mb-5"
          onClick={() => setShowForm(!showForm)}
        >
          Parašyk <br /> mums
        </h2>
      )}
      {showForm && (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 text-colBlack "
        >
          <input
            type="text"
            placeholder="Vardas / Įmonė"
            className={stylesFormInput}
            name="user_name"
          />
          <input
            type="email"
            placeholder="El. Paštas"
            className={stylesFormInput}
            name="user_email"
          />
          <input
            type="text"
            placeholder="Telefono Numeris"
            className={stylesFormInput}
            name="user_phone"
          />
          <textarea
            placeholder="Žinutė"
            rows="6"
            className={stylesFormInput}
            name="user_message"
          ></textarea>
          <button className="flex items-center gap-4">
            <p>Siųsti</p>
            <Image
              src="/blackArrow.svg"
              alt="Arrow icon"
              height={20}
              width={30}
            />
          </button>
          {successEmail && <span>Žinutė išsiųsta!</span>}
          {errorEmail && <span>Žinutė neišsiųsta, bandykite vėliau!</span>}
        </form>
      )}
    </div>
  );
}

export default ContactForm;
