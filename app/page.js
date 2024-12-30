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
        <h1 className={`text-9xl font-bold mb-10 ${superCool.className}`}> Winter Wonderland</h1>
        <div className={`flex flex-row justify-center items-center ${Snow.className}`}>
          <p className="text-4xl">Experience the festivites of winter </p>
        </div>
        <a href="https://www.winterwonderlandsj.com/" className="mt-12 inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-xl shadow-md">More Info!</a>
      </header>

      <main className="bg-gradient-to-b from-[#A4DDF4] to-[#E8F7FB] p-8">
        <section
          id="about"
          className={`mb-12 flex flex-col md:flex-row justify-center items-center gap-8 ${comfortaa.className}`}
        >
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-white-800">
              About
            </h2>
            <p className="text-white text-lg leading-relaxed text-center md:text-left">
              Winter Wonderland is a cherished holiday attraction in Downtown San Jose, offering enchanting experiences and festive surprises for all ages. Featuring dazzling lights, thrilling rides, and a magical atmosphere, this seasonal event runs from 
              <span className="font-semibold">November 29 to January 1, 2025</span>. Together with Christmas in the Park and Downtown Ice, Winter Wonderland transforms downtown San Jose into a vibrant holiday destination brimming with cheer, laughter, and seasonal joy.
            </p>

          </div>

          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/610dba0a753f75568967437a/1629240726667-GPSEANVC3HLRJ1ZOPJ24/lit.jpg"
              alt="Winter Wonderland SJ"
              className="rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#84dcff] to-[#a4ddf4] w-full py-12">
          <header className={`text-white text-4xl font-bold text-center py-8 ${superCool.className}`}>
            Experience the Magic of Winter Wonderland
          </header>

          <div className={`px-6 py-8 max-w-4xl mx-auto ${comfortaa.className}`}>
            <p className="text-white text-lg leading-relaxed mb-8 text-center">
              Winter Wonderland San Jose is the perfect destination to celebrate the holiday season! With dazzling lights, fun-filled activities, and holiday cheer, it’s a must-visit spot for families, friends, and everyone who loves the magic of winter.
            </p>

            <div className="text-2xl font-bold mt-8 text-center text-white">
              What to Expect
            </div>
            <p className="text-white text-lg leading-relaxed mt-2 mb-8 text-center">
              From twinkling light displays to carnival rides and festive treats, Winter Wonderland has something for everyone:
            </p>

            <div className="space-y-4 text-center">
              <ul className="list-disc list-inside text-white text-lg">
                <li>Exciting carnival rides for kids and adults alike</li>
                <li>Holiday-themed food and drinks to warm your spirits</li>
                <li>Photo opportunities with larger-than-life decorations</li>
                <li>Live performances and music to spread holiday cheer</li>
              </ul>
            </div>

            <div className="text-2xl font-bold mt-12 text-center text-white">
              Plan Your Visit
            </div>
            <p className="text-white text-lg leading-relaxed mt-2 mb-8 text-center">
              Winter Wonderland runs from <span className="font-semibold text-[#ffecb3]">November 29 to January 1, 2025</span>. Located in the heart of Downtown San Jose, it’s easily accessible and part of the larger holiday festivities, including Christmas in the Park and Downtown Ice.
            </p>
          </div>
        </section>


      </main>

      <footer className="bg-[#A4DDF4] text-white text-center p-4 fixed bottom-0 w-full">
        <p>Made with ❤ by Mohamad</p>
      </footer>

    </div>
  );
}
