import { Link } from "react-router-dom";
import "./About.css";
import aboutImage from "../../assest/about.png";

const About = () => {
  return (
    <main className="about">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-label">
            OUR STORY
          </span>

          <h1>
            FOOD MADE
            <br />
            <span>WITH HEART.</span>
          </h1>

          <p>
            Good ingredients, honest cooking,
            <br />
            and food worth gathering around.
          </p>

        </div>


        <div className="about-hero-mark">
          <span>EST.</span>
          <strong>2024</strong>
        </div>

      </section>



      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro">

        <div className="about-intro-label">
          <span>01</span>
          <span>WHO WE ARE</span>
        </div>


        <div className="about-intro-content">

          <h2>
            More than just
            <br />
            <em>a meal.</em>
          </h2>

          <div className="about-intro-text">

            <p>
              We believe great food has the power to bring
              people together. That's why every dish we make
              starts with quality ingredients, thoughtful
              preparation and a genuine love for what we do.
            </p>

            <p>
              From casual lunches to long dinners with friends,
              our goal is simple: create food and moments
              you'll want to come back to.
            </p>

          </div>

        </div>

      </section>



      {/* =========================================
          STORY
      ========================================= */}

      <section className="about-story">

        <div className="about-story-image">

          <img
            src={aboutImage}
            alt="Fresh food prepared with care"
          />

          <div className="about-image-tag">
            <span>MADE</span>
            <strong>FRESH</strong>
          </div>

        </div>


        <div className="about-story-content">

          <span className="about-section-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Simple ingredients.
            <br />
            <em>Beautiful food.</em>
          </h2>

          <p>
            We don't believe food needs to be complicated
            to be memorable. The best dishes often begin
            with simple ingredients treated with care.
          </p>

          <p>
            That's the philosophy behind our kitchen.
            We focus on fresh produce, quality ingredients
            and flavors that feel familiar while still
            giving you something to remember.
          </p>


          <Link
            to="/shop"
            className="about-story-link"
          >
            EXPLORE OUR MENU
            <span>→</span>
          </Link>

        </div>

      </section>



      {/* =========================================
          VALUES
      ========================================= */}

      <section className="about-values">

        <div className="about-values-header">

          <span className="about-section-label">
            WHAT MATTERS TO US
          </span>

          <h2>
            Our values.
          </h2>

        </div>


        <div className="about-values-grid">


          <article className="about-value">

            <span className="about-value-number">
              01
            </span>

            <div className="about-value-icon">
              <i className="ri-leaf-line"></i>
            </div>

            <h3>
              Fresh Ingredients
            </h3>

            <p>
              We choose fresh, quality ingredients
              and let them speak for themselves.
            </p>

          </article>



          <article className="about-value">

            <span className="about-value-number">
              02
            </span>

            <div className="about-value-icon">
              <i className="ri-restaurant-line"></i>
            </div>

            <h3>
              Honest Cooking
            </h3>

            <p>
              Simple techniques, careful preparation
              and food made the way it should be.
            </p>

          </article>



          <article className="about-value">

            <span className="about-value-number">
              03
            </span>

            <div className="about-value-icon">
              <i className="ri-heart-3-line"></i>
            </div>

            <h3>
              Made With Care
            </h3>

            <p>
              Every plate leaves our kitchen with
              the same attention we would give our own table.
            </p>

          </article>

        </div>

      </section>



      {/* =========================================
          STATS
      ========================================= */}

      <section className="about-stats">

        <div className="about-stat">
          <strong>20+</strong>
          <span>DISHES</span>
        </div>

        <div className="about-stat">
          <strong>10+</strong>
          <span>YEARS OF PASSION</span>
        </div>

        <div className="about-stat">
          <strong>100%</strong>
          <span>MADE WITH CARE</span>
        </div>

        <div className="about-stat">
          <strong>1</strong>
          <span>BIG LOVE FOR FOOD</span>
        </div>

      </section>



      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-cta">

        <span className="about-section-label">
          COME HUNGRY
        </span>

        <h2>
          Something delicious
          <br />
          <em>is waiting for you.</em>
        </h2>

        <Link
          to="/shop"
          className="about-cta-button"
        >
          VIEW OUR MENU
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default About;