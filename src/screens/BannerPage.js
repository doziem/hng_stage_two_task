import React, { useEffect, useState } from 'react';
import { LiaGripLinesSolid } from 'react-icons/lia';

import { BsSearch } from 'react-icons/bs';
import axios from '../api/request';
import logo from '../assets/tv.jpg';
import tomatoes from '../assets/tomatoes.png';
import imdbLogo from '../assets/imdbLogo.png';


import { AiFillCaretRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Spinner from '../components/Spinner';

const BannerPage = () => {
    const [searchMovie, setSearchMovie] = useState('')
    const [searchMovieResult, setSearchMovieResult] = useState([])
    const [bannerImage, setBannerImage] = useState({});
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState('')


    const API_KEY = process.env.REACT_APP_API_KEYS


    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        async function fetchSingleMovie() {
            const request = await axios.get(`/movie/top_rated?api_key=${API_KEY}&page=1&language=en-us&with_genres=35`)
            setBannerImage(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request

        }


        fetchSingleMovie()
    }, [API_KEY])



    async function handleSearchMovie() {
        try {
            setIsLoading(true)
            const request = await axios.get(`/search/movie?query=${searchMovie}&api_key=${API_KEY}&sort_by=release_date.asc`)
            if (request) {
                setIsLoading(false)
            }
            setSearchMovieResult(request.data.results)
            // return request

        } catch (error) {
            setError(error)
        }
    }


    const truncWord = (str, n) => {
        return str?.length > n ? str.slice(0, n - 1) + ' ' : str
    }
    console.log('Errorrr::', error);
    if (error !== '') {
        return <ErrorPage />
    }
    return (
        <header
            className="bannerPage"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
        '${imageBaseUrl}${bannerImage?.backdrop_path}'
        )`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="bannerPage__header">
                <div className="bannerPage__header__right">
                    <img
                        src={logo}
                        alt="movieLogo"
                        className="bannerPage__header__logo"
                    />
                    <h6 className="banner__header__movieLogo">MovieBox</h6>
                </div>
                <div className="bannerPage__header__middle">
                    <input
                        placeholder="What do you want to watch?"
                        className="bannerPage__input"
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                    />
                    <BsSearch
                        style={{
                            color: '#fff',
                            fontSize: '30px',
                            marginRight: '14px',
                            height: '16px',
                            width: '16px',
                        }}
                        onClick={() => handleSearchMovie()}
                    />
                    { }
                    <ul style={{ background: '#000', position: 'absolute', marginTop: '7rem', width: '40%', textDecoration: 'none', overflow: 'hidden', overflowY: 'scroll', cursor: 'pointer' }}>
                        {isLoading ? <Spinner /> : searchMovieResult.map(movie => (
                            <li key={movie?.id} onClick={() => navigate(`/movie/${movie?.id}`)} style={{ display: 'flex', width: '80%', height: '10%', alignItems: 'center', marginTop: '10px' }}>
                                <img src={`${imageBaseUrl}${movie?.poster_path}`} alt={movie?.original_title} style={{ width: '40%', height: '5rem' }} />
                                <div style={{ padding: '8px', fontSize: '18px' }}>
                                    <p>{movie?.title} </p>
                                    <p>{movie?.release_date} </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bannerPage__header__left">
                    <button className="bannerPage__signInBtn">Sign In</button>
                    <LiaGripLinesSolid
                        className='bannerPage__header__left__icons'
                    />
                </div>
            </div>
            <div className='bannerPage__info'>
                <h2>{bannerImage?.original_title} </h2>
                <div className='bannerPage__info__rating'>
                    <div className='bannerPage__info__imdb'>
                        <img src={imdbLogo} alt='imdb logo' />
                        <p>860/100</p>
                    </div>
                    <div className='bannerPage__info__rating__perc'>
                        <img src={tomatoes} alt='tomatoes' />
                        <p>{bannerImage?.popularity}% </p>
                    </div>
                </div>
                <p className='bannerPage__info__description'>{truncWord(bannerImage?.overview, 140)}</p>

                <button className='bannerPage__info__button'>
                    <AiFillCaretRight
                        style={{ color: '#BE123C', height: '12px', width: '12px', borderRadius: '50%', background: '#fff', marginRight: '0.5rem', padding: '0.3rem' }}
                    /> Watch trailer</button>

            </div>
        </header>

    );
};

export default BannerPage;
