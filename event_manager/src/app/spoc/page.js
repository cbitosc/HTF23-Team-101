import clubs from "@/app/DB/clubs.json";
import CircularImage from "@/components/CircularImage";
import Carousel from "@/components/carousel";
import events from "@/app/DB/events.json";
import Navbar from "@/components/header/Navbar";
import RoundedImage from "@/components/RoundedImage";

const spoc = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className="text-3xl mt-5 mb-7">Current CLubs</h1>
            <Carousel cards={clubs}/>
            </div>
        </div>
    )
}

export default spoc;