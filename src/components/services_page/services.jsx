import React from "react";
import Cards from "../cards/card";
import { service } from "../../../data/data.js";

const Services = () => {
  return (
    <>
      <section className="mt-[30px] bg-no-repeat bg-cover bg-center bg-[url('/public/assets/services_hero_bg.jpg')]">
        <div className="container max-w-[1260px]">
          <div className="pt-[180px] pb-[90px] text-center">
            <h1 className="font-Custom text-[70px] leading-tight text-white">
              Services
            </h1>
          </div>
        </div>
      </section>
      <section className="pt-[70px] pb-[30px]">
        <div className="container max-w-[1260px]">
          <ul className="text-center grid grid-cols-3 gap-x-[42px] gap-y-[10px] px-[22px]">
            {service.map((item) => (
              <Cards
                className="py-[80px]"
                key={item.id}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
