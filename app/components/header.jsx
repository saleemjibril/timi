"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {

  return (

    <header className="header">
      <div className="header__inner">
        <div className="header__inner__logo"><Image src="/assets/icons/logo.svg" width={33} height={51} /></div>

        <nav>

          <div className="header__inner__links">
            <a href="#">Projects</a>
            <a href="#">Experience</a>
            <a href="#">Socials</a>
            <a href="#">Resume</a>
          </div>
          <Image src="/assets/icons/lightMode.svg" width={24} height={24} />
          <button>Contact me</button>
        </nav>


      </div>
    </header>

  );
}