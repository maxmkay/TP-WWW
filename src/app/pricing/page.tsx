import MediaPlayer from "@/components/MediaPlayer";
import Marketing from "@/components/Marketing";
import Extension from "@/components/Extension";
import PricingList from "@/components/PricingList";
export default function Home() {
  return (
    <>
      <div className="d-flex flex-col">
        <PricingList />
        <MediaPlayer />
        <Extension
          title="Change your investing <br /> trajectory now!"
          removeBorder={true}
        />
        <Marketing />
      </div>
    </>
  );
}
