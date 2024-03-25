import { tsParticles } from "@tsparticles/engine";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import Particle from "@/components/Particle";
// import icon from "@/public/deer.svg"
import Image from "next/image";
import ParticlesContainer from "@/components/Bg";
import { ImageResponse } from "next/server";

export default function Home() {
  // // (async () => {
  // //   await loadPolygonMaskPlugin(tsParticles);
  // // })();
  // (async () => {
  //   await loadPolygonMaskPlugin(tsParticles);

  //   await tsParticles.load({
  //     id: "tsparticles",
  //     options: {
  //       /* options */
  //     },
  //   });
  // })();

  return (
    <main className="flex min-h-screen  flex-col w-screen h-screen relative	 items-center justify-between ">
      <div className="">
        <Image src="/hero2.png" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="mix-blend-difference">
        <ParticlesContainer></ParticlesContainer>
      </div>
    </main>
  );
}
