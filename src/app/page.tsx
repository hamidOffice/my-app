import Image from "next/image";
import girl from "@/images/hero-grils..png";
export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center pt-12 mt-28 relative w-full h-[80vh] md:h-auto  md:flex-row md:justify-between items-center px-8 lg:px-20 bg-[#f8f6e9]">

        <div className="absolute inset-0 hero-section bg-cover bg-center opacity-5"></div>


        <div className="w-full text-center  md:w-1/2 space-y-6 relative z-10 md:text-left">
          <h1 className="text-2xl lg:text-4xl  font-bold text-[#082f49] leading-tight">
            Welcome To Kotton Soft LLC 
            Where Talent Knows No Boundaries!
          </h1>
          <p className="text-sm md:text-lg text-[#333]">
            Join a thriving community of freelancers from all over the world.
            Discover endless opportunities to collaborate, showcase your skills,
            and build your freelance career. Whether you’re a seasoned pro or just
            starting out, our platform connects you with the world’s top talent.
            Get ready to unleash your potential and connect with like-minded
            professionals from across the globe.
          </p>

          <div className="flex justify-center gap-4 items-center md:justify-start">
            <button className="cursor-pointer w-40 bg-[var(--primary)] text-white p-2 md:p-4  rounded-md hover:bg-[#C40000]">
              Start Now
            </button>
            <p className="text-[var(--primary)] text-xl p-3 cursor-pointer">+1-650-257-2414</p>
          </div>
        
        </div>


        <div className="hidden w-[400px] relative   justify-end md:flex ">
          <div className="  inset-0 bg-red-600 w-1/3 h-full right-0 clip-path-triangle opacity-90"></div>

          {/* Image */}
          <Image
            src={girl} // Replace with your actual image
            alt="Freelancer"
            width={500}
            height={240}
            className="relative z-10 object-contain "
          />
        </div>
      </section>
    </>
  );
}
