import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-12">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            After finishing with the Computer Sciences program at Fanshawe, I
            went on a different path by getting into Cable/Fibre work. Now I am
            back getting back into web development, have my own web design
            business on the side, and now reaching for bigger things!
          </p>
          <p className="py-2 text-gray-600">
            Web development is a huge passion of mine, and now I am expanding my
            skillset by learning the MERN stack (MongoDB/Express/React/Node), as
            well as utilizing Firebase to create a wide variety of web
            applications. This can include simple websites like this, e-commerce
            sites for stores, restaurant ordering apps, and more.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <a href="/#projects">Check out my most recent projects.</a>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80"
            alt="computer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
