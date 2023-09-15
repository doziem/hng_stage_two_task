import React, { useEffect, useState } from 'react';
import { LiaGripLinesSolid } from 'react-icons/lia';

import { BsSearch } from 'react-icons/bs';
import axios from '../api/request';
import logo from '../assets/tv.jpg';
import tomatoes from '../assets/tomatoes.png';
import imdbLogo from '../assets/imdbLogo.png';


import { AiFillCaretRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const BannerPage = () => {
    const [searchMovie, setSearchMovie] = useState('')
    const [searchMovieResult, setSearchMovieResult] = useState([])
    const [bannerImage, setBannerImage] = useState({});
    const navigate = useNavigate()

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {

        async function fetchRandomMovie() {
            const request = await axios.get(`/movie/top_rated?api_key=12a48185f23cfe8a470b5f90ce5ac93b&page=1&language=en-us&with_genres=35`)
            setBannerImage(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }

        fetchRandomMovie()
    }, [])



    async function handleSearchMovie() {
        const request = await axios.get(`/search/movie?query=${searchMovie}&api_key=12a48185f23cfe8a470b5f90ce5ac93b&sort_by=release_date.asc`)
        setSearchMovieResult(request.data.results)
        return request
    }


    // curl --request GET \
    // --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=12a48185f23cfe8a470b5f90ce5ac93b'
    // /3/search/movie
    const truncWord = (str, n) => {
        return str?.length > n ? str.slice(0, n - 1) + ' ' : str
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
                    <ul style={{ background: '#000', position: 'absolute', marginTop: '7rem', width: '40%', textDecoration: 'none', overflow: 'hidden', overflowY: 'scroll', cursor: 'pointer' }}>
                        {searchMovieResult && searchMovieResult.map(movie => (
                            <li key={movie?.id} onClick={() => navigate(`/movie/${movie?.id}`)} style={{ display: 'flex', width: '80%', height: '10%', alignItems: 'center', }}>
                                <img src={`${imageBaseUrl}${movie?.poster_path}`} alt={movie?.original_title} style={{ width: '40%', height: '4rem' }} />
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
