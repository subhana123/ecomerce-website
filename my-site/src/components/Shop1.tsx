import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function Shop1(){
    return(
        
             <section
      className={`${poppins.className} relative w-full  flex items-center justify-center  mt-20 max-sm:mt-14 p-8 text-black `}
    >
      <Image
        src="/icons/Shop.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 -z-10"
      />
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-70"></div>

      {/* Text Content */}
      <div className=" text-center flex flex-col justify-center  max-w-sm  lg:text-left max-sm:mr-11 place-items-center ">
      <Image
        src="/icons/shoplogo.png"
        alt="Background"
        width={77}
        height={77}
        quality={100}
        className="" 
      />
        <h1 className="text-4xl lg:text-5xl font-semibold mb-3 text-nowrap  ">
           Shop 
        </h1>
        
        <button className="  text-xl py-2 flex justify-center  ">
          <Link className="font-semibold" href="/shop">  Home &gt; <span className="font-light">Shop</span> </Link>
        </button>
      </div>
      
    </section>
        
    )
}