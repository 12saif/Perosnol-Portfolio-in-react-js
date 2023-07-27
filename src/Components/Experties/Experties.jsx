import React from "react";
import css from "./Experties.module.scss";
import { projectExperience } from "./../../utils/data";

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddongs ypaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <span>{exp.name}</span>
                <span>{exp.projects}</span>
              </div>
            );
          })}
        </div>
        <div className={css.rightSide}></div>
      </div>
    </section>
  );
};

export default Experties;
