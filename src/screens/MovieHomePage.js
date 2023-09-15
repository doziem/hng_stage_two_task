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

    useEffect(() => {
        async function fetchRandomMovie() {
            const request = await axios.get(
                `/movie/top_rated?api_key=12a48185f23cfe8a470b5f90ce5ac93b&language=en-us&with_genres=35&sort_by=release_date.asc`,
                {
                    total_results: 10,
                }
            );
            setMovieData(request.data.results.slice(0, 10));
            return request;
        }

        fetchRandomMovie();
    }, []);

    // console.log(movieData);

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
                    {movieData?.map(item => (
                        <div className="movieHomePage__container" key={item?.id} >
                            <div className="movieHomePage__card" data-testid="movie-card"
                            >
                                <img src={`${imageBaseUrl}${item?.poster_path}`} alt={item?.title} className='movieHomePage__card__img' />
                                <div className='movieHomePage__card__heart' >

                                    <AiFillHeart style={{ color: isFavourite.includes(item?.id) ? '#BE123C' : '#D1D5DB', }} onClick={() => handleFavourite(item?.id)} />
                                </div>
                                <div onClick={() => navigate(`/movie/${item?.id}`)} className='movieHomePage__container__info'>
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
                                    <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '12px', marginTop: '10px' }}>Animation, Action, Adventure</p>
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
