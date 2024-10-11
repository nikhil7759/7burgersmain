import React from "react";
import CardStack from "./ui/CardStack";
import { cn } from "../utils/cn";

const Testimonials = () => {
  return (
    <div className="w-full bg-[#F4EBDC]">
      <div className="w-[80%] py-12 m-auto">
        <h1 className="font-migra  text-[30px]  md:text-[20px] lg:text-[55px] leading-[40px] md:leading-[20px] lg:leading-[55px] text-font-blue text-center w-full">
          They fell for our charm, <br /> will you?
        </h1>
        <div class="p-0 pt-[3rem] flex items-center justify-center w-full md:p-12">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",

    content: (
      <p className="basker">
        "I’m a burger fanatic, and this place did not disappoint! The bun was
        soft and toasted just right, while the grilled onions added a delicious
        sweetness. I’m already planning my next visit!"
      </p>
    ),
  },
  {
    id: 1,
    name: "Nikhil",

    content: (
      <p className="basker test">
        "Wow! This burger blew my mind. It was massive, and every bite was
        packed with flavor. The special sauce is to die for. Highly recommend it
        for anyone who loves a great burger!"
      </p>
    ),
  },
  {
    id: 2,
    name: "Ankit",

    content: (
      <p className="basker">
        "Hands down the best burger joint in town! The patty was cooked to
        perfection, and the fresh ingredients really made a difference. I tried
        the veggie burger, and it was so good, I forgot it wasn’t meat!"
      </p>
    ),
  },
];

export default Testimonials;
