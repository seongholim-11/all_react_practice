import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWQwODM1ODMyNmJmYmVmMTc0ODdiYTk1M2E4NjIzOSIsInN1YiI6IjY0YzA4MzczMmYxYmUwMDBjYTI2YTAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NIF40iO6QnUW10WtpWE6W3XgZQtrT-sknHW4n0KOdY",
            },
        };
        fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&region=KR",
            options
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setData(response.results);
            })
            .catch((err) => console.error(err));
    }, []);
    console.log("🚀 ~ file: App.jsx:7 ~ App ~ data:", data);
    return (
        <div>
            <div className="app-container">
                {data.map((item) => {
                    return (
                        <Movie
                            title={item.title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
