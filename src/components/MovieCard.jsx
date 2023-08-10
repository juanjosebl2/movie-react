import styles from './MovieCard.module.css';
import {Link} from "react-router-dom";

export function MovieCard({movie}){
    
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    if(!movie.poster_path) return '';

    return (
        <Link to={"/movies/" + movie.id}>
            <li className={styles.movieCard}> 
                <img with={300} height={450} className={styles.movieImage}  src={imageUrl} alt={movie.title} />
                <div> {movie.title}  </div>
            </li>
        </Link>
    );
}