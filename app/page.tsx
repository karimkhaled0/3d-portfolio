import BackgroundCircles from "@/components/BackgroundCircles";
import Human from "@/components/Human";
import Moon from "@/components/Moon";
import ScrollBarCanvas from "@/components/ScrollBarCanvas";
import Image from "next/image";

export default function Home() {
  return (
    <ScrollBarCanvas>
      <div className="h-screen">
        <div className="absolute top-[60%] z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 ">
          <Image src={"/clouds2.png"} alt="cloud" width={500} height={500} />
        </div>
        <div className="absolute top-[48%] z-0 left-[49%] transform -translate-x-1/2 -translate-y-1/2 bg-white h-[400px] w-[400px] rounded-full" />
        <div className="absolute top-[50%] z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px]">
          <Human />
        </div>
        <div className="absolute top-[60%] left-[55%] z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-20 ">
          <Image src={"/clouds.png"} alt="cloud" width={500} height={500} />
        </div>
      </div>
      <div>
        <h1>Hi</h1>
      </div>
    </ScrollBarCanvas>
  );
}
