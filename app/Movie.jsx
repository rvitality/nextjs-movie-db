import Link from "next/link";
import Image from "next/image";

const Movie = ({ id, title, poster_path, release_date }) => {
    const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <div>
            <h3 className="font-bold">{title}</h3>
            <h4>{release_date}</h4>

            <Link href={`/${id}`}>
                <Image src={imagePath} width={800} height={800} alt={title} priority />
            </Link>
        </div>
    );
};

export default Movie;
