import Image from "next/image";

const MovieDetail = async ({ params }) => {
    const { movie } = params;

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    );
    const res = await data.json();
    console.log(res);
    const { title, overview, release_date, runtime, status, backdrop_path } = res;

    const imagePath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="text-lg">{release_date}</div>
            <div>
                Runtime: <span className="font-semibold">{runtime} minutes</span>
            </div>
            <div className="bg-green-600 inline-block my-2 py-2 px-3 text-sm rounded-md">
                {status}
            </div>

            <Image
                className="w-full my-12"
                src={imagePath}
                width={1000}
                height={1000}
                priority
                alt={title}
            />

            <p>{overview}</p>
        </div>
    );
};

export default MovieDetail;
