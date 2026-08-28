import "./Contact.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validation/formSchema";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  });


const onSubmit = async (data) => {
  setSubmitStatus("");

  try {
    await axios.post(
      "https://formspree.io/f/moeaglgg",
      data
    );

    setSubmitStatus("success");
    reset();

    setTimeout(() => {
      setSubmitStatus("");
    }, 4000);

  } catch (error) {
    console.error("Form submission error:", error);
    setSubmitStatus("error");

    setTimeout(() => {
      setSubmitStatus("");
    }, 4500);
  }
};


  return (
    <main className="contact">

      {/* ================================
          HERO
      ================================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            LET'S
            <br />
            <span>TALK.</span>
          </h1>

          <p>
            Have a question, want to make a reservation,
            <br />
            or simply want to say hello?
          </p>

        </div>

        <div className="contact-hero-circle">
          <span>WE'D LOVE</span>
          <strong>TO HEAR<br />FROM YOU</strong>
        </div>

      </section>


      {/* ================================
          CONTACT INFO + FORM
      ================================= */}

      <section className="contact-main">

        {/* INFO */}

        <div className="contact-info">

          <div className="contact-section-title">
            <span>01</span>

            <div>
              <small>CONTACT</small>

              <h2>
                Come say
                <br />
                <em>hello.</em>
              </h2>
            </div>
          </div>


          <div className="contact-details">

            <div className="contact-detail">

              <div className="contact-icon">
                <i className="ri-map-pin-line"></i>
              </div>

              <div>
                <span>ADDRESS</span>

                <p>
                  123 Main Street,
                  <br />
                  Downtown City
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                <i className="ri-phone-line"></i>
              </div>

              <div>
                <span>PHONE</span>

                <p>
                  +1 234 567 890
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                <i className="ri-mail-line"></i>
              </div>

              <div>
                <span>EMAIL</span>

                <p>
                  hello@restaurant.com
                </p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                <i className="ri-time-line"></i>
              </div>

              <div>
                <span>OPENING HOURS</span>

                <p>
                  Mon – Fri: 11:00 – 23:00
                  <br />
                  Sat – Sun: 10:00 – 00:00
                </p>
              </div>

            </div>

          </div>


          {/* SOCIAL */}

          <div className="contact-social">

            <span>FOLLOW US</span>

            <div>

              <a href="#1">
                <i className="ri-instagram-line"></i>
              </a>

              <a href="#2">
                <i className="ri-facebook-fill"></i>
              </a>

              <a href="#3">
                <i className="ri-twitter-x-line"></i>
              </a>

            </div>

          </div>

        </div>


        {/* FORM */}

        <div className="contact-form-wrapper">

          <div className="contact-form-heading">

            <span>02</span>

            <div>
              <small>SEND A MESSAGE</small>

              <h2>
                How can we
                <br />
                <em>help?</em>
              </h2>
            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className="contact-form-row">

              <div className="contact-field">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your Name..."
                  {...register("name")}
                />

                {errors.name && (
                  <span className="form-error">
                    {errors.name.message}
                  </span>
                )}

              </div>


              <div className="contact-field">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your Email..."
                  {...register("email")}
                />

                {errors.email && (
                  <span className="form-error">
                    {errors.email.message}
                  </span>
                )}

              </div>

            </div>


            <div className="contact-field">

              <label htmlFor="subject">
                SUBJECT
              </label>

              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                {...register("subject")}
              />

              {errors.subject && (
                <span className="form-error">
                  {errors.subject.message}
                </span>
              )}

            </div>


            <div className="contact-field">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message here..."
                {...register("message")}
              ></textarea>

              {errors.message && (
                <span className="form-error">
                  {errors.message.message}
                </span>
              )}

            </div>


            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}

              {!isSubmitting && <span>→</span>}
            </button>


            {submitStatus === "success" && (
              <p className="form-success">
                Your message has been sent successfully.
              </p>
            )}


            {submitStatus === "error" && (
              <p className="form-error">
                Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>

      </section>


      {/* ================================
          LOCATION
      ================================= */}

      <section className="contact-location">

        <div className="contact-location-content">

          <span className="contact-section-label">
            FIND US
          </span>

          <h2>
            Your table
            <br />
            <em>is waiting.</em>
          </h2>

          <p>
            Come visit us and enjoy good food,
            good company and a warm atmosphere.
          </p>

          <Link
            to="/shop"
            className="contact-location-link"
          >
            VIEW OUR MENU
            <span>→</span>
          </Link>

        </div>


        <div className="contact-map">

          <div className="contact-map-grid"></div>

          <div className="contact-map-pin">

            <i className="ri-map-pin-fill"></i>

            <span>
              OUR RESTAURANT
            </span>

          </div>

        </div>

      </section>


      {/* ================================
          CTA
      ================================= */}

      <section className="contact-cta">

        <span>
          HAVE A GOOD TIME
        </span>

        <h2>
          GOOD FOOD.
          <br />
          <em>GOOD PEOPLE.</em>
        </h2>

        <Link
          to="/shop"
          className="contact-cta-button"
        >
          EXPLORE MENU
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default Contact;




