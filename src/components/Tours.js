import React from "react";
import Title from "./Title";
import { tourData } from "./data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle={"tours"}></Title>

      <div className="section-center featured-center">
        {tourData.map((dt) => {
          const { id, image, icon, text, title, price, location, duration } =
            dt;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">august 26th, 2020</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
