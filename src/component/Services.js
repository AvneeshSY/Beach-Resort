import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info: "Lorem is the best"
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem is the best"
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Lorem is the best"
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem is the best"
        }
    ]);

    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;
