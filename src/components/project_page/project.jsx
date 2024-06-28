import React from "react";
import Project_card from "../cards/project_card";
import { project } from "../../../data/data.js";

const Project = () => {
  return (
    <>
      <section className="mt-[40px] mb-[30px] bg-no-repeat bg-cover bg-center bg-[url('/public/assets/project_hero_bg.jpg')]">
        <div className="container max-w-[1260px]">
          <div className="pt-[180px] pb-[90px] text-center">
            <h1 className="font-Custom text-[70px] leading-tight text-white">
              Our Project
            </h1>
          </div>
        </div>
      </section>
      <section className="mb-[30px]">
        <div className="container max-w-[1260px]">
          <div className="text-center">
            <nav className="mb-[38px] w-full px-[165px]">
              <ul className="flex items-center justify-between rounded-[18px] border-[1px] border-brown">
                <li>
                  <button className="font-Jost text-[18px] hover:text-white font-semibold leading-tight tracking-[0.02rem] py-[26px] px-[66px] hover:bg-brown transition w-[219px] rounded-[18px]">
                    Bathroom
                  </button>
                </li>
                <li>
                  <button className="font-Jost text-[18px] hover:text-white font-semibold leading-tight tracking-[0.02rem] py-[26px] px-[66px] hover:bg-brown transition w-[219px] rounded-[18px]">
                    Bed Room
                  </button>
                </li>
                <li>
                  <button className="font-Jost text-[18px] hover:text-white font-semibold leading-tight tracking-[0.02rem] py-[26px] px-[66px] hover:bg-brown transition w-[219px] rounded-[18px]">
                    Kitchan
                  </button>
                </li>
                <li>
                  <button className="font-Jost text-[18px] hover:text-white font-semibold leading-tight tracking-[0.02rem] py-[26px] px-[60px] hover:bg-brown transition w-[219px] rounded-[18px]">
                    Living Area
                  </button>
                </li>
              </ul>
            </nav>
            <ul className="grid grid-cols-2 gap-x-[50px] gap-y-[38px] text-left">
              {project.map((item) => (
                <Project_card key={item.id} id={item.id} title={item.title} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
