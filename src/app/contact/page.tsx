"use client";

import { ContactCard } from "./_components/ContactCard";
import { ContactForm } from "./_components/ContactForm";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const AnimatedDiv = animated("div");


export default function ContactPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const headingAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(-50px)" },
        to: {
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(-50px)",
        },
        config: { tension: 170, friction: 24 },
        delay: 100,
    });

    const subheadingAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(-50px)" },
        to: {
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(-50px)",
        },
        config: { tension: 170, friction: 24 },
        delay: 400,
    });

    return (
        <div className="relative py-32 lg:py-64 px-4 md:px-10 lg:px-16">
            {/* Orange gradient background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-500/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-20">
                <div className="w-full lg:w-1/2">
                    <AnimatedDiv style={headingAnimation}>
                        <h1 className="text-3xl md:text-4xl font-bold">
                            LET'S BUILD SOMETHING <br className="hidden md:block" /> GREAT TOGETHER
                        </h1>
                    </AnimatedDiv>
                    <AnimatedDiv style={subheadingAnimation}>
                        <p className="text-base font-semibold mt-4">
                            Have questions or ready to start your project? Get in touch <br className="hidden md:block" />
                            with our team—we're here to help every step of the way.
                        </p>
                    </AnimatedDiv>
                </div>

                <div className="w-full lg:w-1/2">
                    <ContactForm />
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 md:pt-24 lg:pt-32">
                <ContactCard title="EMAIL" value="info@cityprofessionaltrades.com" />
                <ContactCard title="PHONE NUMBER" value="(416)838-3970" />
                <ContactCard title="LOCATION" value="974 The Queensway Etobicoke, ON M8Z 1P6" />
            </div>
        </div>
    );
}
