"use client";
import React, { useEffect } from "react";
import "./style.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // our goal heading (bottom to top)
    gsap.from(".main-heading h1", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".main-heading h1",
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });

    // left to right (card-wrapper1)
    gsap.from(".card-wrapper1", {
      x: -100, // 200 se chhota rakha
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".card-wrapper1",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    // right to left (card-wrapper2)
    gsap.from(".card-wrapper2", {
      x: 100, // 200 se chhota rakha
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".card-wrapper2",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    // bottom to top (middle)
    gsap.from(".middle", {
      y: 100, // 200 se chhota rakha
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".middle",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="main-section">
      <div className="main-heading">
        <h1>Our Goal</h1>
      </div>

      <div className="main-section-wrapper">
        {/* left */}
        <div className="left">
          <div className="card-wrapper card-wrapper1">
            <div className="card-content card-content1">
              <h1>Our Fabrics</h1>
              <Image
                src="https://searchforfabric.com/cdn/shop/articles/the_importance_of_high_quality_fabric_for_clothing_a_guide_900x.png?v=1717559432"
                alt=""
                width={50}
                height={50}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt quis maiores, temporibus itaque maxime, ex officia reiciendis modi eius recusandae dolorem. Odit possimus, libero dolores deleniti aut iusto? Officiis?
              </p>
            </div>
            <div className="waves">
              <div className="waves1 wave"></div>
              <div className="waves2 wave"></div>
              <div className="waves3 wave"></div>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="middle">
          <div className="animated-circle">
            <div className="svg-circle1">
              <div className="svg-circle2"></div>
              <div className="svg-circle3"></div>
            </div>
          </div>
          <div className="middle-content">
            <h1>We Provide</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              necessitatibus? Harum esse distinctio, beatae id quaerat dolorum
              veniam suscipit tempora, mollitia voluptas, officia tempore sint
              incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas voluptatum facere ad velit libero necessitatibus nostrum esse aspernatur, repellat, dignissimos obcaecati magnam quas sint ea amet vitae excepturi incidunt!
            </p>
            <button>Grab Your First Order <img src="https://cdn-icons-png.flaticon.com/512/3236/3236907.png" /></button>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <div className="card-wrapper card-wrapper2">
            <div className="card-content card-content1">
              <h1>Our Designs</h1>
              <Image
                src="https://img.freepik.com/free-photo/vintage-batik-floral-pattern-illustration_53876-104123.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                width={50}
                height={50}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt quis maiores, temporibus itaque maxime, ex officia reiciendis modi eius recusandae dolorem. Odit possimus, libero dolores deleniti aut iusto? Officiis?
              </p>
            </div>
            <div className="waves">
              <div className="waves1 wave"></div>
              <div className="waves2 wave"></div>
              <div className="waves3 wave"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
