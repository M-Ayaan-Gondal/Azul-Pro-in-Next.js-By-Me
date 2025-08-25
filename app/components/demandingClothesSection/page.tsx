"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Page() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // initial state (avoid flash & keep smooth)
      gsap.set(".page-one .product", { y: 70, opacity: 0 });

      gsap.from(".heading h1", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".heading h1",
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });

      // timeline triggers once when the grid enters
      gsap.to(".page-one .product", {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 0.9,
        stagger: { each: 0.16, from: "start" }, // 1→2→3→4→5
        scrollTrigger: {
          trigger: ".page-one",
          start: "top 78%",
          end: "bottom 60%",
          once: true, // play one time
          // markers: true, // (debug)
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="demandingSection">
      <div className="heading">
        <h1>Our Most Demanding Clothes</h1>
      </div>

      <div className="products-container">
        <div className="page-one">
          <div className="product product1">
            <div className="image">
              <div className="on-hover">
                <button>Place Order Now</button>
              </div>
            </div>
            <div className="details">
              <div className="product-name"><h2>Kaftan</h2></div>
              <div className="product-rating">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/859/726/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png" alt="" />
                <p>90+ Reviews</p>
              </div>
              <div className="product-price"><h3>From $10</h3></div>
            </div>
          </div>

          <div className="product product2">
            <div className="image"><div className="on-hover"><button>Place Order Now</button></div></div>
            <div className="details">
              <div className="product-name"><h2>Long Shirt</h2></div>
              <div className="product-rating">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/859/726/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png" alt="" />
                <p>40+ Reviews</p>
              </div>
              <div className="product-price"><h3>From $8</h3></div>
            </div>
          </div>

          <div className="product product3">
            <div className="image"><div className="on-hover"><button>Place Order Now</button></div></div>
            <div className="details">
              <div className="product-name"><h2>Brown kaftan</h2></div>
              <div className="product-rating">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/859/726/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png" alt="" />
                <p>100+ Reviews</p>
              </div>
              <div className="product-price"><h3>From $20</h3></div>
            </div>
          </div>

          <div className="product product4">
            <div className="image"><div className="on-hover"><button>Place Order Now</button></div></div>
            <div className="details">
              <div className="product-name"><h2>3-Pc frok</h2></div>
              <div className="product-rating">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/859/726/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png" alt="" />
                <p>200+ Reviews</p>
              </div>
              <div className="product-price"><h3>From $22</h3></div>
            </div>
          </div>

          <div className="product product5">
            <div className="image"><div className="on-hover"><button>Place Order Now</button></div></div>
            <div className="details">
              <div className="product-name"><h2>long frok</h2></div>
              <div className="product-rating">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/859/726/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png" alt="" />
                <p>67+ Reviews</p>
              </div>
              <div className="product-price"><h3>From $9</h3></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
