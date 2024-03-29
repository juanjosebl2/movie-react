import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from './MovieDetails.module.css';


export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner size={60} />
    }

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    console.log(movie)

    const calculateAverage = (voteAverage) => {
        const dividedValue = voteAverage / 2;
        const roundedValue = Math.round(dividedValue);
        return roundedValue;
    };

    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if(i<count){
                stars.push(<span key={i} className={`${styles.checked} fa fa-star`} />);
            } else {
                stars.push(<span key={i} className="fa fa-star" />);
            }
        }
        return stars;
    };

    return (
        <div className={styles.detailsContainer}>
            <img className={` ${styles.col} ${styles.movieImage} `} src={imageUrl} alt={movie.title} />
            <div className={` ${styles.col} ${styles.movieDetails} `}>
                <p className={styles.firstItem}>
                    <strong> Tittle: </strong>  {movie.title}
                </p>
                <p>
                    <strong> Gengers: </strong>
                    {movie.genres.map(genre => genre.name).join(", ")}

                </p>
                <p>
                    <strong> Description: </strong>  {movie.overview}
                </p>
                <p>
                    <strong> Rating: </strong> {renderStars(calculateAverage(movie.vote_average))}
                </p>
            </div>
        </div>
    );
}