import React, { useEffect, useState } from 'react'
import axios from '../api/request';

import { useParams } from 'react-router-dom'

const MovieDetailsPage = () => {
    const [movieDetailInfo, setMovieDetailData] = useState({
        adult: false,
        backdrop_path: '/zb6fM1CX41D9rF9hdgclu0peUmy.jpg',
        genre_ids: (3)[(18, 36, 10752)],
        id: 424,
        original_language: 'en',
        original_title: "Schindler's List",
        overview:
            'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
        popularity: 71.218,
        poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        release_date: '1993-12-15',
        title: "Schindler's List",
        video: false,
        vote_average: 8.6,
        vote_count: 14523,
    });

    const { id } = useParams()

    // https://api.themoviedb.org/3/movie/{movie_id}

    // useEffect(() => {
    //     async function fetchRandomMovie() {
    //         const request = await axios.get(
    //             `/movie/${id}?api_key=12a48185f23cfe8a470b5f90ce5ac93b&language=en-us&genre`,
    //             {
    //                 total_results: 10,
    //             }
    //         );
    //         setMovieDetailData(request.data.results);
    //         return request;
    //     }

    //     fetchRandomMovie();
    // }, []);

    // console.log(movieData);

    return (
        <div className='MovieDetailsPage'>MovieDetailsPage</div>
    )
}

export default MovieDetailsPage