import Link from "next/link";
import Image from "next/image";
import MediaPlayer from "@/components/MediaPlayer";
import Extension from "@/components/Extension";
import Marketing from "@/components/Marketing";
import SliderCard from "@/components/SliderCard";

export default function Home() {
  return (
    <div className="d-flex flex-col">
      <main className="flex-shrink-0 ">
        <Extension
          title="Analyze an investment <br /> property with a single <br /> click"
          removeBorder={false}
        />
        <MediaPlayer />
        <SliderCard />
        <Marketing />
      </main>
    </div>
  );
}
