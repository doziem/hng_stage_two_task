import React, { useEffect, useState } from 'react';
import axios from '../api/request';
import { FiChevronRight } from "react-icons/fi";

import { AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import tomatoes from '../assets/tomatoes.png';
import imdbLogo from '../assets/imdbLogo.png';
import BannerPage from './BannerPage';

const MovieHomePage = () => {
    const [movieData, setMovieData] = useState([]);
    const [isFavourite, setIsFavourite] = useState([])

    const navigate = useNavigate()

    // useEffect(() => {
    //     async function fetchRandomMovie() {
    //         const request = await axios.get(
    //             `/movie/top_rated?api_key=12a48185f23cfe8a470b5f90ce5ac93b&language=en-us&with_genres=28`,
    //             {
    //                 total_results: 10,
    //             }
    //         );
    //         setMovieData(request.data.results.slice(0, 10));
    //         return request;
    //     }

    //     fetchRandomMovie();
    // }, []);

    // console.log(movieData);



    const data = [
        {
            adult: false,
            backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
            genre_ids: (2)[(18, 80)],
            id: 238,
            original_language: 'en',
            original_title: 'The Godfather',
            overview:
                'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
            popularity: 136.073,
            poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
            release_date: '1972-03-14',
            title: 'The Godfather',
            video: false,
            vote_average: 8.7,
            vote_count: 18606,
        },
        {
            adult: false,
            backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
            genre_ids: (2)[(18, 80)],
            id: 278,
            original_language: 'en',
            original_title: 'The Shawshank Redemption',
            overview:
                'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
            popularity: 100.438,
            poster_path: '/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg',
            release_date: '1994-09-23',
            title: 'The Shawshank Redemption',
            video: false,
            vote_average: 8.7,
            vote_count: 24566,
        },
        {
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
        },
        {
            adult: false,
            backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
            genre_ids: [18],
            id: 389,
            original_language: 'en',
            original_title: '12 Angry Men',
            overview:
                "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            popularity: 38.72,
            poster_path: '/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg',
            release_date: '1957-04-10',
            title: '12 Angry Men',
            video: false,
            vote_average: 8.5,
            vote_count: 7610,
        },
        {
            adult: false,
            backdrop_path: '/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg',
            genre_ids: (3)[(35, 18, 10749)],
            id: 19404,
            original_language: 'hi',
            original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
            overview:
                'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
            popularity: 25.954,
            poster_path: '/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg',
            release_date: '1995-10-20',
            title: 'Dilwale Dulhania Le Jayenge',
            video: false,
            vote_average: 8.6,
            vote_count: 4241,
        },

        {
            adult: false,
            backdrop_path: '/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg',
            genre_ids: (3)[(16, 10751, 14)],
            id: 129,
            original_language: 'ja',
            original_title: '千と千尋の神隠し',
            overview:
                'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
            popularity: 75.991,
            poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
            release_date: '2001-07-20',
            title: 'Spirited Away',
            video: false,
            vote_average: 8.5,
            vote_count: 14845,
        },
        {
            adult: false,
            backdrop_path: '/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg',
            genre_ids: (3)[(35, 53, 18)],
            id: 496243,
            original_language: 'ko',
            original_title: '기생충',
            overview:
                "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            popularity: 69.567,
            poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
            release_date: '2019-05-30',
            title: 'Parasite',
            video: false,
            vote_average: 8.5,
            vote_count: 16353,
        },
        {
            adult: false,
            backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
            genre_ids: (2)[(18, 80)],
            id: 240,
            original_language: 'en',
            original_title: 'The Godfather Part II',
            overview:
                'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
            popularity: 64.023,
            poster_path: '/bMadFzhjy9T7R8J48QGq1ngWNAK.jpg',
            release_date: '1974-12-20',
            title: 'The Godfather Part II',
            video: false,
            vote_average: 8.6,
            vote_count: 11237,
        },
    ];

    const handleFavourite = (movie) => {

        setIsFavourite([...isFavourite, movie])


    }
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <>
            <BannerPage />

            <div className="movieHomePage">
                <div className='movieHomePage__header'>
                    <h2>Featured Movie</h2>
                    <button className='movieHomePage__header__seeMore'>see more <FiChevronRight color='#B91C1C' style={{ marginLeft: '10px' }} /></button>
                </div>
                <div className='movieHomePage__contents' >
                    {data?.map(item => (
                        <div className="movieHomePage__container" key={item?.id} onClick={() => navigate(`/movie/${item?.id}`)}>
                            <div className="movieHomePage__card" data-testid="movie-card"
                            >
                                <img src={`${imageBaseUrl}${item?.poster_path}`} alt={item?.title} className='movieHomePage__card__img' />
                                <div className='movieHomePage__card__heart' >

                                    <AiFillHeart style={{ color: isFavourite.includes(item?.id) ? '#BE123C' : '#D1D5DB' }} onClick={() => handleFavourite(item?.id)} />
                                </div>
                                <div className='movieHomePage__container__info'>
                                    <p data-testid="movie-release-date">{`USA,` + new Date(item?.release_date).getFullYear()} </p>
                                    <h4 data-testid="movie-title">{item?.title} </h4>
                                    <div className='bannerPage__info__rating'>
                                        <div className='bannerPage__info__imdb'>
                                            <img src={imdbLogo} alt='imdb logo' />
                                            <p>860/100</p>
                                        </div>
                                        <div className='bannerPage__info__rating__perc'>
                                            <img src={tomatoes} alt='tomatoes' />
                                            <p>{item?.popularity}% </p>
                                        </div>
                                    </div>
                                    <p>Animation, Action, Adventure</p>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieHomePage;
