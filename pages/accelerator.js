import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Accelerator() {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>BUIDL Accelerator | Women Build Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        {preferedColorScheme === "light" && (
          <link rel="icon" href="/favicon.ico" />
        )}
        {preferedColorScheme === "dark" && (
          <link rel="icon" href="/favicon-white.ico" />
        )}
      </Head>
      <Navbar preferedColorScheme={preferedColorScheme} />
      <header className="my-8 sm:my-32 max-w-6xl mx-auto flex flex-wrap-reverse md:flex-nowrap gap-4 justify-center items-center">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
            WBW3 PRESENTS
          </h1>
          <h2 className="font-poppins-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 md:mb-12">
            BUIDL ACCELERATOR
          </h2>
          <a
            href="https://form.typeform.com/to/rXJh1w4H"
            className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border-4 border-black dark:border-white border-solid rounded-3xl text-xl md:text-2xl lg:text-3xl px-16 py-2"
          >
            APPLY NOW
          </a>
        </div>
        <div className="w-40 h-40 md:w-96 md:h-96 relative mb-4 md:mb-0">
          <Image
            src="/images/rocket.png"
            alt="rocket"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </header>

      <section className="mb-12 flex flex-col sm:flex-row justify-around gap-4 max-w-6xl mx-auto">
        <div className="sm:w-1/2 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
          <div className="text-dark-teal font-poppins-bold text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
            OUR WHY
          </div>
          <h2 className="font-poppins-semi-bold text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8">
            Our Mission
          </h2>
          <p className="text-base md:text-lg">
            Provide direct funding and resources to women and nonbinary engineers working on dope shit.
          </p>
        </div>

        <div className="sm:w-1/2 text-lg md:text-xl lg:text-2xl bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
          <p className="mb-4 text-center font-poppins-semi-bold">
            Accelerator powered by
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center justify-around space-y-8 md:space-y-0">
            <div className="flex flex-col items-center">
              <Image
                alt="Encode Logo"
                src="/logos/encode_club_white.svg"
                height="128px"
                width="128px"
                className={preferedColorScheme !== "light" ? "" : "white-logo"}
              />
              <p className="text-center text-sm font-poppins-semi-bold mt-4">
                Encode Club
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="Women Build Web3 Logo"
                src={preferedColorScheme !== "light" ? "/logos/logo-white.png" : "/logos/Logo-Fill.png"}
                height="128px"
                width="128px"
              />
              <p className="text-center text-sm font-poppins-semi-bold mt-4">
                Women Build Web3
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
          ABOUT
        </div>
        <h2 className="font-poppins-semi-bold text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8">
          What is it?
        </h2>
        <p className="text-base md:text-lg">
          The <span className="font-poppins-semi-bold">BUIDL Accelerator</span>{" "}
          aims to support projects where 50% or more of the technical team are
          women and non-binary people. This no-strings-attached accelerator will
          provide funding starting at $5K, and up to $30K per team, distributed
          as they meet self-defined milestones. This accelerator is open
          to teams and projects that have not raised significant VC funding.
          Projects can be new or existing.
        </p>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 sm:w-1/3 flex flex-col">
          <div className="text-dark-teal font-poppins-bold">
            Applications open
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            SEPTEMBER 27TH
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 sm:w-1/3 flex flex-col">
          <div className="text-dark-teal font-poppins-bold">
            Accelerator begins
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            OCTOBER 13TH
          </div>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 sm:w-1/3 flex flex-col">
          <div className="text-dark-teal font-poppins-bold">
            Accelerator ends
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            DECEMBER 22ND
          </div>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
          FOR YOU
        </div>
        <h2 className="font-poppins-semi-bold text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8">
          Who can apply?
        </h2>
        <p className="text-base md:text-lg mb-2">
          Be purr-pared! Teams must have at least 50% of their technical team identify as women or nonbinary. Additionally, teams must meet one of the following to be considered eligible:
        </p>
        <ul className="list-disc text-base md:text-lg pl-8 space-y-2">
          <li>
            Completion of the 30 Days of Web3 program prior to September 22nd.
          </li>
          <li>
            Have an existing project to be reviewed for technical assessment. 
          </li>
        </ul>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
          JOIN US
        </div>
        <h2 className="font-poppins-semi-bold text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8">
          Why you should apply:
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-between border-y-2 border-white py-12 mb-12">
          <h3 className="w-1/2 text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            Global Community
          </h3>
          <p className="text-base md:text-lg md:w-1/2">
            We work directly with our community of developers from around the
            world to identify promising early-stage projects.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between border-b-2 border-white pb-12 mb-12">
          <h3 className="w-1/2 text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            Dedicated Curriculum
          </h3>
          <p className="text-base md:text-lg md:w-1/2 ">
            We’re here to support our founders through a series of 12 workshops
            covering impactful topics.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between border-b-2 border-white pb-12 mb-12">
          <h3 className="w-1/2 text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            Virtual Events
          </h3>
          <p className="text-base md:text-lg md:w-1/2">
            The events take place virtually, insuring that the Accelerator is
            accessible to teams all across the globe!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <h3 className="w-1/2 text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            Weekly Sessions
          </h3>
          <p className="text-base md:text-lg md:w-1/2">
            We host weekly workshops and one-on-one sessions to connect teams to the right resources, problem solve, and answer questions.
          </p>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto flex flex-col sm:flex-row gap-8">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 sm:w-1/2">
          <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            Overview:
          </h3>

          <ul className="list-disc pl-8 text-base md:text-lg">
            <li className="mb-4">
              We just want to fund dope shit. That&apos;s it. That&apos;s the tweet.
            </li>
            <li className="mb-4">Weekly workshops and one-on-one sessions</li>
            <li className="mb-4">
              Our team will be here to help you with everything from technical
              building, design, product testing and fundraising
            </li>
            <li className="mb-4">
              Assisted by mentors, leading investors, and entrepreneurs in the
              space
            </li>
          </ul>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 sm:w-1/2">
          <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-poppins-semi-bold">
            Workshops:
          </h3>
          <ul className="list-disc pl-8 text-base md:text-lg">
            <li className="mb-4">Welcome</li>
            <li className="mb-4">Startup Method</li>
            <li className="mb-4">Design</li>
            <li className="mb-4">Marketing</li>
            <li className="mb-4">Grants</li>
            <li className="mb-4">Hiring</li>
            <li className="mb-4">Product Market Fit</li>
            <li className="mb-4">Fundraising</li>
            <li className="mb-4">AMA</li>
            <li className="mb-4">VC Panel</li>
            <li className="mb-4">Pitch Practice</li>
            <li className="mb-4">Pitch Day</li>
          </ul>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
          WHO WE ARE
        </div>
        <h2 className="font-poppins-semi-bold text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8">
          Women Build Web3
        </h2>
        <p className="text-base md:text-lg">
          Women Build Web3 is a global collective of women and non-binary
          developers learning and building in web3. We help developers unlock
          their potential by providing education, opportunities, and funding and
          connecting them with a network of peers.
        </p>
        <div className="mt-8 w-ful flex justify-center">
          <Link href="/about">
            <a className="text-base md:text-lg border-t-2 border-dotted px-4 sm:px-16 md:px-32 pt-4">
              Learn more
            </a>
          </Link>
        </div>
      </section>

      <section className="pt-8 mb-6 max-w-6xl mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
          OUR TRUSTED PARTNER
        </div>
        <h2 className="font-poppins-semi-bold text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8">
          Encode
        </h2>
        <p className="text-base md:text-lg">
          Encode is a web3 education community. We help ambitious, talented
          people achieve their personal and professional goals together. We do
          this through awesome programmes with the leading protocols in crypto.
          We then help you get a job or raise funding.
        </p>
        <div className="mt-8 w-ful flex justify-center">
          <a
            href="https://www.encode.club/accelerate"
            className="text-base md:text-lg border-t-2 border-dotted px-4 sm:px-16 md:px-32 pt-4"
          >
            Learn more
          </a>
        </div>
      </section>

      <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
