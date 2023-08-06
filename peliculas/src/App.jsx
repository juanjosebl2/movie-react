import styles from "./App.module.css"
import {
    BrowserRouter as Router, Routes, Route, Link
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){
    return ( 
        <Router> 
            <div className={styles.titleInput}>
                <header> 
                    <Link to="/"><h1 className={styles.title}> Peliculas </h1>  </Link>
                </header>

            </div>
            <main>
                <Routes>
                    <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
                    <Route path="/" element={<LandingPage/>}/>                                            
                </Routes>
            </main>
        </Router>
    );
}