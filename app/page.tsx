import Image from "next/image";
import localFont from 'next/font/local'
import Snowflakes from "./snowflake";
import { Comfortaa } from 'next/font/google'

const superCool = localFont({ src: '../public/fonts/supercool.ttf' })
const Snow = localFont({ src: '../public/fonts/snow.ttf' })
const comfortaa = Comfortaa({subsets: ['greek'], weight: "700"});

//B8E7F9
export default function Home() {
  return (
    <div>
      <Snowflakes/>
      <Image src="https://contribute.hackclub.com/images/flag-orpheus-top.png" alt="Hack Club Flag" width={150} height={150} className="absolute -top-2 left-0"/>
      <header className="bg-[#A4DDF4] text-white py-20 text-center mt-20">
        <h1 className={`text-9xl font-bold mb-10 ${superCool.className}`}> Boba Drops</h1>
        <div className={`flex flex-row justify-center items-center gap-20 ${Snow.className}`}>
          <p className="text-4xl">Build a site </p>
          <p className="text-4xl">Get free boba</p>
        </div>
        <a href="https://forms.hackclub.com/t/tLf8GYVBqSus" className="mt-12 inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-xl shadow-md">Get your boba</a>
      </header>

      <main className=" bg-[#A4DDF4] p-6">
        <section id="about" className={`mb-12 flex justify-center items-center flex-col ${comfortaa.className}`}>
          <h2 className="text-3xl font-bold mb-8">What?</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-[url('https://raw.githubusercontent.com/hackclub/boba-drops/main/images/boba_card1.png')] h-64 w-[28rem] bg-cover p-4 rounded-3xl shadow-md relative">
            <h3 className="text-3xl font-bold mb-2 absolute top-5 left-5">1</h3>
            <p className="text-white text-xl absolute bottom-0 right-5 mb-4"><a href="https://workshops.hackclub.com/personal_website/">Build a website (click here)</a></p>
          </div>
          <div className="bg-[url('https://raw.githubusercontent.com/hackclub/boba-drops/main/images/boba_card2.png')] h-64 w-[28rem] bg-cover p-4 rounded-3xl shadow-md relative">
            <h3 className="text-3xl font-bold mb-2 absolute top-5 left-5">2</h3>
            <p className="text-white text-xl absolute bottom-0 right-5 mb-4">Host it on GitHub</p>
          </div>
          <div className="bg-[url('https://raw.githubusercontent.com/hackclub/boba-drops/main/images/boba_card3.png')] h-64 w-[28rem] bg-cover p-4 rounded-3xl shadow-md relative">
            <h3 className="text-3xl font-bold mb-2 absolute top-5 left-5">3</h3>
            <p className="text-white text-xl absolute bottom-0 right-5 mb-4">Buy yourself boba!</p>
          </div>
          <div className="bg-[url('https://raw.githubusercontent.com/hackclub/boba-drops/main/images/boba_card4.png')] h-64 w-[28rem] bg-cover p-4 rounded-3xl shadow-md relative">
            <h3 className="text-3xl font-bold mb-2 absolute top-5 left-5">4</h3>
            <p className="text-white text-xl absolute bottom-0 right-5 mb-4">Enjoy!</p>
          </div>
          </div>
        </section>
        <section className={`bg-[#84dcff] w-full py-12 `}>
          <header className={` text-white text-3xl font-bold text-center py-8 ${superCool.className}`}>
            Hello, world!
          </header>

          <div className={`px-4 py-8 max-w-4xl mx-auto ${comfortaa.className} font-bold`}>
            <p className="text-lg mb-8">The web is special. You can share what you’ve done– strut your stuff. It&apos;s a rite of passage to carve out your own corner of the web & declare &quot;Hello, world! I&apos;m here!&quot; Now, go out and make something cool.</p>

            <div className="text-xl font-bold mt-8">
              Take a sip...
            </div>
            <p className="text-lg mt-2 mb-8">Never made a site? Build one in your club, hackathon, or by yourself. For inspiration, check out:</p>

            <div className="space-y-4 text-left">
              <ul className="list-disc list-inside">
                <li><a href="https://glitchyfuzzy.github.io/recipe-book/" className="text-blue-500 font-semibold hover:underline">A recipe book</a></li>
                <li><a href="https://sampoder.github.io/" className="text-blue-500 font-semibold hover:underline">Sam&apos;s site</a></li>
                <li><a href="#" className="text-blue-500 font-semibold hover:underline">this website itself</a></li>
                <li><a href="https://maxwofford.github.io/" className="text-blue-500 font-semibold hover:underline">Max&apos;s Website</a></li>
              </ul>
            </div>

            <div className="text-xl font-bold mt-12">
              Spill the boba...
            </div>
            <p className="text-lg mt-2 mb-8">Share your site out in the world to get $5 for buying yourself boba.</p>
          </div>
        </section>
        {/* <section id="services" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700">We offer a range of high-quality services to meet your needs.</p>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">Feel free to get in touch with us for more information.</p>
        </section> */}
      </main>

      <footer className="bg-[#A4DDF4] text-white text-center p-4 fixed bottom-0 w-full">
        <p>Made with ❤ by Mohamad</p>
      </footer>

    </div>
  );
}
