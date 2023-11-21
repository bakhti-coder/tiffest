"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Youtube } from "lucide-react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Style = {
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: isSticky ? "#121212e6" : "transparent",
    WebkitBackdropFilter: isSticky ? "blur(0.13rem)" : "none",
    backdropFilter: isSticky ? "blur(0.13rem)" : "none",
  };

  const NavLink = [
    {
      name: "Новости",
      href: "#Новости",
    },
    {
      name: "Кинопоказы",
      href: "#Кинопоказы",
    },
    {
      name: "Лица",
      href: "#Лица",
    },
    {
      name: "Медиаx",
      href: "#Медиаx",
    },
    {
      name: "История",
      href: "#История",
    },
    {
      name: "Локации",
      href: "#Локации",
    },
  ];

  return (
    <header style={Style} className={`fixed top-0 right-0 left-0 py-5`}>
      <nav className="container max-w-1600">
        <div className="flex justify-between items-center">
          <div>
            <Image src="/images/logo.svg" width={90} height={76} alt="logo" />
          </div>
          <div>
            <ul className="flex ">
              {NavLink.map((el, i) => (
                <li key={i} className="ml-8 text-xl text-silver font-[600]">
                  <Link
                    href={"#Новости"}
                    className="link link-underline link-underline-black"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <Instagram
              strokeWidth="1.5"
              width={32}
              height={32}
              color="#C7C7C7"
              className=" ml-2 "
            />
            <Facebook
              strokeWidth="1.5"
              width={32}
              height={32}
              color="#C7C7C7"
              className="ml-2 "
            />
            <Youtube
              strokeWidth="1.5"
              width={32}
              height={32}
              color="#C7C7C7"
              className="ml-2 "
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
