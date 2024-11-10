import Image from "next/image"; 
import React from "react";
import Link from 'next/link';
const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20">
            <div className="mb-8">
                <Image
                    src="/Images/jpg.png"
                    alt="A descriptive image" 
                    width={300} 
                    height={200} 
                    className="rounded-full"
                    priority 
                />
            </div>
            <h1 className="text-6xl font-semibold text-stone-50 mt-8">
                Hello <br /> I am <br /> FAIZA QURESHI
            </h1>
            <div className="flex gap-8 mt-16 justify-center">
                <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-black transition-all"><Link href="/about">About</Link>
                </button>
                <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-black transition-all"><Link href="/contact">Contact</Link>
                </button>
            </div>
        </section>
    );
};

export default Hero;
