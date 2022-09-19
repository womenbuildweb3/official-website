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
      <header className="my-40 sm:my-44 max-w-6xl mx-auto">
        <h1 className="font-poppins-bold text-5xl lg:text-6xl leading-tight mb-4">
          WBW3 PRESENTS
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-tight mb-12">
          BUIDL ACCELERATOR PROGRAM
        </h2>
        <a
          href="https://form.typeform.com/to/rXJh1w4H"
          className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border-8 border-black dark:border-white border-solid rounded-3xl text-2xl lg:text-3xl px-16 py-2"
        >
          APPLY NOW
        </a>
      </header>

      <section className="mb-12 flex flex-col sm:flex-row justify-around gap-4 max-w-6xl mx-auto">
        <div className="sm:w-1/2 text-2xl bg-zinc-800 rounded-lg p-8">
          <p>
            <span className="font-poppins-semi-bold">Our mission:</span> To help
            the best women and non-binary built hackathon and early-stage
            projects through support and direct funding.
          </p>
        </div>

        <div className="sm:w-1/2 text-2xl bg-zinc-800 rounded-lg p-8">
          <p className="mb-4 text-center font-poppins-semi-bold">
            Accelerator powered by
          </p>
          <div className="flex justify-around">
            <div>
              <Image
                className=""
                alt="Women Build Web3 Logo"
                src="/logos/encode_club_white.svg"
                height="114px"
                width="114px"
              />
              <p className="text-center text-sm font-poppins-semi-bold">
                Encode Club
              </p>
            </div>
            <div>
              <Image
                className=""
                alt="Women Build Web3 Logo"
                src="/logos/logo-white.png"
                height="114px"
                width="114px"
              />
              <p className="text-center text-sm font-poppins-semi-bold">
                Women Build Web3
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-xl sm:text-3xl mb-2 sm:mb-4">
          INFORMATION
        </div>
        <h2 className="font-poppins-semi-bold text-4xl sm:text-5xl mb-4 sm:mb-8">
          What is it?
        </h2>
        <p className="text-lg">
          The <span className="font-poppins-semi-bold">BUIDL Accelerator</span>{" "}
          aims to support projects where 51% or more of the technical team are
          women and non-binary people. This no-strings-attached accelerator will
          provide funding starting at $5K, and up to $30K per team, distributed
          as they meet self-defined milestones. This 3-month accelerator is open
          to teams and projects that have not raised significant VC funding.
          Projects can be new or existing.
        </p>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <div className="bg-zinc-800 rounded-lg p-8 sm:w-1/3 flex flex-col">
          <div className="text-dark-teal font-poppins-bold">
            Applications open
          </div>
          <div className="text-lg md:text-2xl font-poppins-semi-bold">
            SEPTEMBER 25TH
          </div>
        </div>

        <div className="bg-zinc-800 rounded-lg p-8 sm:w-1/3 flex flex-col">
          <div className="text-dark-teal font-poppins-bold">
            Accelerator begins
          </div>
          <div className="text-lg md:text-2xl font-poppins-semi-bold">
            OCTOBER 6TH
          </div>
        </div>

        <div className="bg-zinc-800 rounded-lg p-8 sm:w-1/3 flex flex-col">
          <div className="text-dark-teal font-poppins-bold">
            Accelerator ends
          </div>
          <div className="text-lg md:text-2xl font-poppins-semi-bold">
            DECEMBER 22ND
          </div>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-xl sm:text-3xl mb-2 sm:mb-4">
          INFORMATION
        </div>
        <h2 className="font-poppins-semi-bold text-4xl sm:text-5xl mb-4 sm:mb-8">
          Who can apply?
        </h2>
        <p className="text-lg">
          Be purr-pared! The following requirements must be met for an
          application to be considered eligible:
        </p>
        <ul className="list-disc text-lg pl-8">
          <li>
            Completion of the 30 Days of Web3 program prior to September 16th
          </li>
          <li>
            Eligible applicants must have teams comprised of 51% women and
            non-binary people
          </li>
        </ul>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-800 rounded-lg p-8">
        <h2 className="mb-8 text-4xl md:text-5xl text-dark-teal font-poppins-semi-bold">
          Why you should apply:
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-between border-b-2 border-white pb-12 mb-12">
          <h3 className="w-1/2 text-5xl font-poppins-semi-bold">
            Global Community
          </h3>
          <p className="text-lg md:w-1/2">
            We work directly with our community of developers from around the
            world to identify promising early-stage projects.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between border-b-2 border-white pb-12 mb-12">
          <h3 className="w-1/2 text-5xl font-poppins-semi-bold">
            Dedicated Curriculum
          </h3>
          <p className="text-lg md:w-1/2 ">
            We’re here to support our founders through a series of 12 workshops
            covering impactful topics.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between border-b-2 border-white pb-12 mb-12">
          <h3 className="w-1/2 text-5xl font-poppins-semi-bold">
            Virtual Events
          </h3>
          <p className="text-lg md:w-1/2">
            The events take place virtually, insuring that the Accelerator is
            accessible to teams all across the globe!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <h3 className="w-1/2 text-5xl font-poppins-semi-bold">
            Weekly Sessions
          </h3>
          <p className="text-lg md:w-1/2">
            We host weekly workshops and one-on-one sessions with our founders
            and their teams over this 12-week accelerator.
          </p>
        </div>
      </section>

      <section className="pt-8 mb-12 max-w-6xl mx-auto flex flex-col sm:flex-row gap-8">
        <div className="bg-zinc-800 rounded-lg p-8 sm:w-1/2">
          <h3 className="mb-4 text-xl md:text-2xl font-poppins-semi-bold">
            Overview:
          </h3>
          <ul className="list-disc pl-8 md:text-lg">
            <li className="mb-4">
              Accelerate your project to become a startup
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
            <li className="mb-4">
              After the accelerator, we help you go full-time and raise funding
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800 rounded-lg p-8 sm:w-1/2">
          <h3 className="mb-4 text-xl md:text-2xl font-poppins-semi-bold">
            Workshops:
          </h3>
          <ul className="list-disc pl-8 md:text-lg">
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

      <section className="pt-8 mb-12 max-w-6xl mx-auto bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-xl sm:text-3xl mb-2 sm:mb-4">
          WHO WE ARE
        </div>
        <h2 className="font-poppins-semi-bold text-4xl sm:text-5xl mb-4 sm:mb-8">
          About Women Build Web3
        </h2>
        <p className="text-lg">
          Women Build Web3 is a global collective of women and non-binary
          developers learning and building in web3. We help developers unlock
          their potential by providing education, opportunities, and funding and
          connecting them with a network of peers.
        </p>
        <div className="mt-8 w-ful flex justify-center">
          <Link href="/about">
            <a className="text-lg border-t-2 border-dotted px-4 sm:px-16 md:px-32 pt-4">
              Learn more
            </a>
          </Link>
        </div>
      </section>

      <section className="pt-8 mb-6 max-w-6xl mx-auto bg-zinc-800 rounded-lg p-8">
        <div className="text-dark-teal font-poppins-bold text-xl sm:text-3xl mb-2 sm:mb-4">
          OUR TRUSTED PARTNER
        </div>
        <h2 className="font-poppins-semi-bold text-4xl sm:text-5xl mb-4 sm:mb-8">
          About Encode
        </h2>
        <p className="text-lg">
          Encode is a web3 education community. We help ambitious, talented
          people achieve their personal and professional goals together. We do
          this through awesome programmes with the leading protocols in crypto.
          We then help you get a job or raise funding.
        </p>
        <div className="mt-8 w-ful flex justify-center">
          <a
            href="https://www.encode.club/accelerate"
            className="text-lg border-t-2 border-dotted px-4 sm:px-16 md:px-32 pt-4"
          >
            Learn more
          </a>
        </div>
      </section>

      <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
