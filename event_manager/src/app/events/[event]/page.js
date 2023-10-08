import clubs from "@/app/DB/clubs.json";
import CircularImage from "@/components/CircularImage";
import Carousel from "@/components/carousel";
import events from "@/app/DB/events.json";
import Navbar from "@/components/header/Navbar";
import RoundedImage from "@/components/RoundedImage";
import Editor from "@/components/editor";

const ClubPage = ({params}) => {
    const eventTitle = params.event.replace(/%20/g, ' ');
    let image = events.find((event) => (events.title == params.events)).image;

    return (
        <div>
            <Navbar/>
        
        <div className="mt-10">
            {/* <img src={image} className="h-52 w-52"/> */}
            <RoundedImage imageUrl={image} />
            
            {/* remove % in params.event */}
            <h1 className="text-3xl absolute left-[35rem] top-[10rem]">{eventTitle}</h1>

           <div className="absolute top-[7rem] left-[27rem]">
            <Editor 
            club={params.club}
            isReadOnly={true}
            text={"This is a sample text"}
            />
            </div>
            <div className="mt-[3rem]">
                <h1 className="text-3xl">Upcomming Events</h1> 

                <Carousel cards={events}/>
            </div>

        </div>
        </div>
    )
}

export default ClubPage;