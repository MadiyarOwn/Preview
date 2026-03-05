import Image from "next/image";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative overflow-visible pt-16 md:pt-20">

      <Container className="relative">
        <div className="grid items-center gap-12  lg:gap-10">
          <div className="text-center">
            
            <div className="mt-6 text-gradient-brand">
              <h1 className="mt-6 text-hero text-center ">
                  THE BEST WEBSITE EVER
                  <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                      Scalable.
                  </span>
              </h1>
            </div>

            <div className="mt-4 mx-auto max-w-[39rem]">
              <p className=" text-lead  text-white">
                Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security.
                Proof of Stake, its consensus algorithm enables unlimited speeds.
              </p>
            </div>

            <div className="mt-8 flex  mx-auto  justify-center gap-3 sm:flex-row ">
              <a
                href="#cta"
                className="inline-flex rounded-full bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] p-[2px]"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white">
                  Get started
                </span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-black px-8 py-3 text-white hover:bg-white hover:text-black"
              >
                Read more
              </a>
            </div>

          </div>

          <div className="relative mx-auto -mt-10 md:-mt-15 lg:-mt-18 w-full  -z-10 max-w-auto">
            <div className="pointer-events-none absolute inset-0 -z-10 [--glow-gap:clamp(3rem,10vw,10rem)]">
              <div className="absolute left-1/2 top-[70px]  -translate-x-[calc(100%+var(--glow-gap))] 
              h-[168px] w-[168px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px] rounded-full bg-[#8593E8]/70 blur-[200px]" />
              <div className="absolute left-1/2 top-0 -translate-x-1/2  rounded-full bg-[#5D6EF3]/60 blur-[250px]   
              h-[160px] w-[160px]  md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px]"   />
              <div className="absolute left-1/2 top-[70px]  translate-x-[var(--glow-gap)]  rounded-full bg-[#FC4FF6]/60 blur-[200px] 
              h-[168px] w-[168px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]" />
            </div>

            <Image
              src="/mainPhoto.webp"
              alt="Hero preview"
              width={1200}
              height={700}
              priority
              className="mx-auto w-full h-auto select-none"
            />
          </div>
        </div>
      </Container>

      
      
    </section>
  );
}