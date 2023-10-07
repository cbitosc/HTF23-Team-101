import clubs from "@/app/DB/clubs.json";
import CircularImage from "@/components/CircularImage";
import Carousel from "@/components/carousel";
import events from "@/app/DB/events.json";

const ClubPage = ({params}) => {
    let image = clubs.find((club) => (club.title == params.club)).image;

    return (
        <div className="mt-10">
            {/* <img src={image} className="h-52 w-52"/> */}
            <CircularImage imageUrl={image} />
            <h1 className="text-3xl absolute left-[22rem] top-[10rem]">{params.club}</h1>

            <div className="mt-[3rem]">
                <h1 className="text-3xl">Upcomming Events</h1>

                <Carousel cards={events}/>
            </div>

        </div>
    )
}

export default ClubPage;