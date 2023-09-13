import React, { useEffect, useState } from 'react';
import { LiaGripLinesSolid } from 'react-icons/lia';

import { BsSearch } from 'react-icons/bs';
import axios from '../api/request';
import logo from '../assets/tv.jpg';
import tomatoes from '../assets/tomatoes.png';
import imdbLogo from '../assets/imdbLogo.png';

import { AiFillCaretRight } from "react-icons/ai";

const BannerPage = () => {
    const [bannerImage, setBannerImage] = useState({
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
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    // useEffect(() => {

    //     async function fetchRandomMovie() {
    //         const request = await axios.get(`/movie/top_rated?api_key=12a48185f23cfe8a470b5f90ce5ac93b&page=1&language=en-us&with_genres=35`)
    //         setBannerImage(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
    //         return request
    //     }

    //     fetchRandomMovie()
    // }, [])

    const truncWord = (str, n) => {
        return str?.length > n ? str.slice(0, n - 1) + '.' : str
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
                    />
                    <BsSearch
                        style={{
                            color: '#fff',
                            fontSize: '30px',
                            marginRight: '14px',
                            height: '16px',
                            width: '16px',
                        }}
                    />
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
