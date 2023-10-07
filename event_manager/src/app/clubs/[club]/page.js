import clubs from "@/app/DB/clubs.json";

const ClubPage = ({params}) => {
    let image = clubs.find((club) => (club.title == params.club)).image;

    return (
        <div>
            <img src={image} className="h-52 w-52"/>
        </div>
    )
}

export default ClubPage;