import clubs from "@/app/DB/clubs.json";
import CircularImage from "@/components/CircularImage";
import Carousel from "@/components/carousel";
import events from "@/app/DB/events.json";
import Navbar from "@/components/header/Navbar";
import Editor from "@/components/editor";

const ClubPage = ({params}) => {
    let image = clubs.find((club) => (club.title == params.club)).image;
    let title = params.club;

    return (
        <div>
            <Navbar/>
        
        <div className="mt-10">
            {/* <img src={image} className="h-52 w-52"/> */}
            <CircularImage imageUrl={image} />
            <h1 className="text-3xl absolute left-[22rem] top-[17rem]">{title.charAt(0).toUpperCase() + title.slice(1,title.length)}</h1>
            <Editor 
            club={params.club}
            isReadOnly={true}
            text={"This is a sample text"}
            />
            <div className="mt-[3rem]">
                <h1 className="text-3xl">Upcomming Events</h1>

                <Carousel cards={events}/>
            </div>

        </div>
        </div>
    )
}

export default ClubPage;