import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <span>
            Hey There,s <br /> I'm Md Saif.
          </span>
          <span>
            I Design Beautiful Simple <br /> Things, And I Love What I do
          </span>
        </div>
        {/* Lower Elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>

          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>FRONT-END DEVELOPER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
