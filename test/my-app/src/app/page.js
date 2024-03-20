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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black relative">
      <div className="w-96 h-96 relative opacity-50	">
        
        <Image src="/beburbulu.png" fill />
      </div>
      <ParticlesContainer></ParticlesContainer>
    </main>
  );
}
