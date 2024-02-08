"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio | V-0.0.1
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Bem-vindo ao
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Gandara Verso{" "}
                        </span>
                        project experience
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    Olá! Sou o Gandara, um estudante de Engenharia de Software apaixonado por desenvolvimento de software e segurança cibernética. Estou animado para compartilhar meus projetos e conhecimentos com você.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                    href="https://www.linkedin.com/in/gandara-silva"
                    target='_blank'
                >
                    Saiba mais no Linkedin
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/planetsscript.png"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;