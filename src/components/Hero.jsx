import React from 'react'

/**
 * Node modules
 */
import { useState } from "react";

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
    const [lookingForWork, setLookingForWork] = useState(true);

    return (
        <section
            id='home'
            className="pt-28 lg:pt-36"
        >
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg ">
                            <img
                                src="public/images/avatar.png"
                                width={40}
                                height={40}
                                alt="Portrait"
                                className='img-cover'
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className={`relative w-2 h-2 rounded-full ${lookingForWork ? "bg-green-400" : "bg-red-500"}`}>
                                <span className={`absolute inset-0 rounded-full ${lookingForWork ? "bg-green-400" : "bg-rose-400"} animate-ping`}></span>
                            </span>

                            Disponible pour travailler
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg-max-w-[15] mt-5 mb-8 lg:mb-10">
                        Étudiant en Génie Logiciel de première année
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="CV.pdf"
                            label="Télécharger CV"
                            icon="download"
                            download="CV"
                            target="_blank"
                        />

                        <ButtonOutline
                            href="#about"
                            label="Défiler ver le bas"
                            icon="arrow_downward"
                        />
                    </div>

                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/images/avatar.png"
                            width={656}
                            height={800}
                            alt="Gaetan Lohier"
                            className='w-full'
                        />
                    </figure>
                </div>

            </div>

        </section>
    )
}

export default Hero