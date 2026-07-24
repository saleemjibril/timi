"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const EMAIL = "ololadegrace.ot@gmail.com";

export default function ContactMe() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_email: EMAIL,
          },
          publicKey
        );
      } else {
        const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      }

      reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact">
      <div className="contact__inner">
        <div className="contact__intro">
          <h1 className="contact__intro__title">Contact me</h1>
          <p className="contact__intro__subtitle">
            I&apos;m all in for fresh challenges and creative adventures. Got
            something in mind or just curious to connect? Let&apos;s make it
            happen.{" "}
            <span>I&apos;m open and ready to collaborate!</span>
          </p>
          <a href={`mailto:${EMAIL}`} className="contact__intro__email">
            Email
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M16.1649 3.00002C16.0968 2.993 16.0281 2.993 15.9599 3.00002H1.95995C1.87022 3.0014 1.78108 3.01485 1.69495 3.04002L8.91995 10.235L16.1649 3.00002Z"
                fill="#1A1A1A"
              />
              <path
                d="M16.905 3.69495L9.62497 10.9449C9.4376 11.1312 9.18415 11.2357 8.91997 11.2357C8.65578 11.2357 8.40233 11.1312 8.21497 10.9449L0.999966 3.74995C0.977786 3.83147 0.966025 3.91547 0.964966 3.99995V13.9999C0.964966 14.2652 1.07032 14.5195 1.25786 14.7071C1.4454 14.8946 1.69975 14.9999 1.96497 14.9999H15.965C16.2302 14.9999 16.4845 14.8946 16.6721 14.7071C16.8596 14.5195 16.965 14.2652 16.965 13.9999V3.99995C16.961 3.89577 16.9407 3.79286 16.905 3.69495ZM2.64997 13.9999H1.95497V13.2849L5.58997 9.67995L6.29497 10.3849L2.64997 13.9999ZM15.955 13.9999H15.255L11.61 10.3849L12.315 9.67995L15.95 13.2849L15.955 13.9999Z"
                fill="#1A1A1A"
              />
            </svg>
          </a>
        </div>

        <div className="contact__card">
          <form
            className="contact__form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label className="contact__form__field">
              <span className="contact__form__label">
                Name<span className="contact__form__required">*</span>
              </span>
              <input
                type="text"
                placeholder="Enter full name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="contact__form__error">
                  {errors.name.message}
                </span>
              )}
            </label>

            <label className="contact__form__field">
              <span className="contact__form__label">
                Email address<span className="contact__form__required">*</span>
              </span>
              <input
                type="email"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className="contact__form__error">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label className="contact__form__field">
              <span className="contact__form__label">
                Message<span className="contact__form__required">*</span>
              </span>
              <textarea
                placeholder="Type your message here"
                rows={4}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="contact__form__error">
                  {errors.message.message}
                </span>
              )}
            </label>

            <button
              type="submit"
              className="contact__form__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
              <Image
                src="/assets/icons/rightArrow.svg"
                width={24}
                height={24}
                alt=""
              />
            </button>

            {status === "sent" && (
              <p className="contact__form__status contact__form__status--ok">
                Thanks — your message is on its way.
              </p>
            )}
            {status === "error" && (
              <p className="contact__form__status contact__form__status--error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
