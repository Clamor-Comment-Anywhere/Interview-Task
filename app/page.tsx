import React from "react";
import firefox from "@/public/assets/Firefox.png";
import edge from "@/public/assets/Edge.png";
import chrome from "@/public/assets/Chrome.png";
import '@/styles/globals.css'

import Image from "next/image";
import Link from "next/link";
import Card from "./landing_page/cards";
import Comment from "@/public/assets/comment.png";
import Incognito from "@/public/assets/mdi_incognito.png";
import VoiceLine from "@/public/assets/mingcute_voice-line.png";
import SampleImage from "@/public/assets/image 1.png";
import Navbar from "./components/Navbar";

const LandingPage: React.FC = () => {
  return (
    <>
    <Navbar/>
        <section className="m-4 box-border h-auto p-4  flex flex-col w-full justify-center  items-center">
     <div className="flex justify-center border-textColor border-l-0 border-t-2 border-b-4 border-r-0 w-full  ">
      <div className="">
      <h1 className="text-4xl font-bold font-sans  mt-9 p-4">Comment <span className="text-buttons-primary ">Anywhere</span> with Clamor <br/> A Private, Anonymous Web Layer</h1>
      <p>It is your voice, everywhere. Join us in making the web truly <span className="underline">conversational</span> .</p>
     <div className="flex justify-center m-8">
      <button className="px-4 py-2 border-custom-border border-1 bg-buttons-primary shadow-custom-button rounded-md">
        <p className="text-text-light-mode text-center text-2xl fontFamily-lexend "> Get Clamour Now</p>

</button>  </div> 
 
 <div className="flex gap-6 justify-center">
        <Link href="/">
        <Image className="rounded-full" src={chrome} alt="chrome"/>
        </Link>
        <Link href="/">
        <Image className="rounded-full" src={firefox} alt="firefox"/>
        </Link>
        <Link className="no-underline"  href="/">
        <Image className="rounded-full" src={edge} alt="edge"/>
        </Link>
     </div>  
      </div>
    
    </div>
     <div>
     <h1 className="text-4xl font-bold font-sans  mt-9 p-4 flex justify-center">Why Clamour?</h1>
<div className="display flex">
<Card>
     <Image src={Comment} alt="comment" />

        <h2 className="text-xl font-semibold font-mega">COMMENT ANYWHERE</h2>
        <p className="text-gray-700">Comment anywhere, <br/> on any page and any <br/> website.</p>
      </Card> <Card>
      <Image className="logo" src={Incognito} alt="Clamor Logo" />

        <h2 className="text-xl font-semibold">COMMENT PRIVATELY</h2>
        <p className="text-gray-700">Comment privately,<br/> anytime with full <br/> confiedentiality.</p>
      </Card> <Card>
      <Image className="logo" src={VoiceLine} alt="Clamor Logo" />

        <h2 className="text-xl font-semibold">VOICE YOUR OPINION</h2>
        <p className="text-gray-700">Voice your opinion, <br/> make your thoughts <br/> heard, you matter</p>
      </Card>
</div>
    
<div className="bg-custom-card shadow-custom-card box-border border-4 border-black border-opacity-100 m-4 p-16 flex  justify-between ">

  <p>Explore our browser extension that adds a personal <br/> touch to your web experience. Share your thoughts on <br/> any page and who knows? Maybe you’ll find some <br/> helpful tips or tricks as well.</p>
  <Image src={SampleImage} alt="sample image" />

    </div>

     </div>
    </section>
    </>
  );
};

export default LandingPage;