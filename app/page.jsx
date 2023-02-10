import Movie from "./Movie";

export default async function Home() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const res = await data.json();
    return (
        <main>
            <div className="grid grid-cols-fluid gap-16">
                {res.results.map(movie => (
                    <Movie {...movie} />
                ))}
            </div>
        </main>
    );
}
