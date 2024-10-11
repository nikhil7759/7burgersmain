// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Card from "./Card";

// function ScrollSection() {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // console.log(windowWidth)

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         // translateX:  windowWidth > 800 ? -windowWidth * 2 : windowWidth > 500 ? -windowWidth * 3 : windowWidth > 400 ? -windowWidth * 6 : -windowWidth * 7,
//         translateX : -2720 + windowWidth,
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: `center center`,
//           end: `1000 300`,
//           scrub: 0.6,
//           pin: true,
//           markers: false,
//         },
//       }
//     );
//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <section className="overflow-hidden w-full mb-[40px]">
//       <div ref={triggerRef}>
//         <div
//           ref={sectionRef}
//           className="relative flex  gap-4 flex-row"
//         >

//           <div className="flex  items-center justify-center pl-[40px]">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center">
//             <Card/>
//           </div>
//           <div className="flex  items-center justify-center pl-0">
//             <Card/>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default ScrollSection;
import React from "react";

const ScrollSection = () => {
  return (
    <>
      <section class="w-fit mx-auto grid grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-14 sm:gap-y-20 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center mt-10 mb-5">
        <div class="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="/K fry Supreme.jpg"
              alt="Product"
              class="h-60 sm:h-80 w-72 p-2 sm:p-0 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-full sm:w-72">
              <span
                class="text-gray-400 mr-3 uppercase text-xs"
                className="basker_main"
              >
                K-Fry Supreme Burger
              </span>
              <p
                class="text-lg font-bold text-black truncate block capitalize"
                className="basker des"
              >
                A flavorful fusion of crispy chicken, tangy BBQ sauce, with
                spring onions and fresh crunchy lettuce.
              </p>
              <div class="flex items-center">
                <p
                  class="text-lg font-semibold text-black cursor-auto my-3"
                  className="basker_main"
                >
                  ₹220
                </p>

                <div class="ml-auto"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="/Seven Seas Og Chicken,.jpg"
              alt="Product"
              class="h-60 sm:h-80 w-72 p-2 sm:p-0 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-full sm:w-72">
              <span
                class="text-gray-400 mr-3 uppercase text-xs"
                className="basker_main"
              >
                Seven Seas OG Chicken Burger
              </span>
              <p
                class="text-lg font-bold text-black truncate block capitalize"
                className="basker des"
              >
                Crispy and juicy chicken patty with our OG sauce, masala slaw,
                hamburger chips, and fresh lettuce nestled between two soft
                buns.
              </p>
              <div class="flex items-center">
                <p
                  class="text-lg font-semibold text-black cursor-auto my-3"
                  className="basker_main"
                >
                  ₹220
                </p>

                <div class="ml-auto"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="/Hawana Pulled.jpg"
              alt="Product"
              class="h-60 sm:h-80 w-72 p-2 sm:p-0 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-full sm:w-72">
              <span
                class="text-gray-400 mr-3 uppercase text-xs"
                className="basker_main"
              >
                Hawana Pulled Chicken Burger
              </span>
              <p
                class="text-lg font-bold text-black truncate block capitalize"
                className="basker des"
              >
                A gourmet delight with Havana mayo, sautéed onions, masala slaw,
                pulled chicken, hamburger chips, pickled onions, and fresh
                lettuce.
              </p>
              <div class="flex items-center">
                <p
                  class="text-lg font-semibold text-black cursor-auto my-3"
                  className="basker_main"
                >
                  ₹220
                </p>

                <div class="ml-auto"></div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="/Truffalator Veg.jpg"
              alt="Product"
              class="h-60 sm:h-80 w-72 p-2 sm:p-0 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-full sm:w-72">
              <span
                class="text-gray-400 mr-3 uppercase text-xs"
                className="basker_main"
              >
                Truffalator Burger
              </span>
              <p
                class="text-lg font-bold text-black truncate block capitalize"
                className="basker des"
              >
                A gourmet delight with rich truffle mayo, crispy mushroom patty,
                and a bold olive and sundried tomato tapenade for an earthy,
                savory bite!
              </p>
              <div class="flex items-center">
                <p
                  class="text-lg font-semibold text-black cursor-auto my-3"
                  className="basker_main"
                >
                  ₹220
                </p>

                <div class="ml-auto"></div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default ScrollSection;
