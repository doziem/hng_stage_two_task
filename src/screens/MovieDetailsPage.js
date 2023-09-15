import React, { useEffect, useState } from 'react';
import axios from '../api/request';
import logo from '../assets/tv.jpg';
import { SlHome } from 'react-icons/sl'
import { FaTv } from 'react-icons/fa'
import { CgCalendarDates } from 'react-icons/cg'
import { TbLogout } from 'react-icons/tb'
import { BsCameraReels } from 'react-icons/bs'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'



import bottomImg from '../assets/bottomImg.png'

import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {

    const [movieDetailInfo, setMovieDetailInfo] = useState({});

    const { id } = useParams();

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    // https://api.themoviedb.org/3/movie/{movie_id}

    useEffect(() => {
        async function fetchTopRatedMovies() {
            const request = await axios.get(`/movie/${id}?api_key=12a48185f23cfe8a470b5f90ce5ac93b&language=en-us`);
            setMovieDetailInfo(request.data);

        }
        fetchTopRatedMovies();
    }, []);

    console.log(movieDetailInfo);

    // or create a new repository on the command line
    // echo "# hng_stage_two_task" >> README.md
    // git init
    // git add README.md
    // git commit -m "first commit"
    // git branch -M main
    // git remote add origin git@github.com:doziem/hng_stage_two_task.git
    // git push -u origin main

    // function padToTwoDigits(totalMinutes) {
    //     const hours = Math.floor(totalMinutes / 60);
    //     const minutes = totalMinutes % 60;

    //     return `${hours}h: ${minutes > 0 ? ` ${minutes}m` : ''}`;
    // }



    return (
        <div className="movieDetailsPage">
            <div className="movieDetailsPage__sideBar">
                <div className='movieDetailsPage__sideBar__info top'>
                    <img src={logo} alt={movieDetailInfo?.title} />
                    <h6 >MovieBox</h6>

                </div>
                <div className='movieDetailsPage__sideBar__info'>
                    <SlHome style={{ height: '25px', width: '25px', marginRight: '18px' }} />
                    <h6 >Home</h6>

                </div>

                <div className='movieDetailsPage__sideBar__info movie'>
                    <BsCameraReels style={{ height: '25px', width: '25px', marginRight: '18px', color: '#000', background: '#fff !imporant' }} />
                    <h6 >Movies</h6>

                </div>
                <div className='movieDetailsPage__sideBar__info'>
                    <FaTv style={{ height: '25px', width: '25px', marginRight: '18px' }} />
                    <h6 >TV Series</h6>

                </div>
                <div className='movieDetailsPage__sideBar__info'>
                    <CgCalendarDates style={{ height: '25px', width: '25px', marginRight: '18px' }} />
                    <h6 >Upcoming</h6>

                </div>

                <div className='movieDetailsPage__sideBar__play'>
                    <h6 >Play movie quizes
                        and earn
                        free tickets</h6>
                    <p>50k people are playing
                        now</p>
                    <button>Start playing</button>

                </div>
                <div className='movieDetailsPage__sideBar__info'>
                    <TbLogout style={{ height: '25px', width: '25px', marginRight: '18px' }} />
                    <h6 >Log Out</h6>

                </div>
            </div>

            <div className="movieDetailsPage__main">
                {<img
                    src={`${imageBaseUrl}${movieDetailInfo?.poster_path}`}
                    alt={movieDetailInfo?.title}
                />
                }


                <div className='movieDetailsPage__main_details'>
                    <div className='movieDetailsPage__main_details__left'>
                        <div className='movieDetailsPage__main_details__name'>
                            <p className='movieName' data-testid='movie-title'>{`${movieDetailInfo?.title} :  `} </p>

                            <p data-testid='movie-release-date'> {new Date(movieDetailInfo?.release_date).getFullYear()} </p>
                            <p> • PG-13 • </p>
                            <p data-testid='movie-runtime'>{movieDetailInfo?.runtime} </p>
                            {movieDetailInfo?.genres?.map(item => (
                                <button className='movieGenre'>{item?.name}  </button>
                            ))}
                        </div>
                        <p className='movieDetailsPage__main_details_overview'>{movieDetailInfo?.overview} </p>

                        <div className='movieDetailsPage__main_details__cast'>
                            <p>Director : <p className='movieDetailsPage__cast_name'>Joseph Kosinski </p> </p>
                            <p className='middle'>Writers :  <p className='movieDetailsPage__cast_name'>Jim Cash, Jack Epps Jr,  Peter Craig</p>  </p>
                            <p>Stars : <p className='movieDetailsPage__cast_name'>Tom Cruise, Jennifer Connelly, Miles Teller </p></p>
                            <div className='movieDetailsPage__cast_topRated'>
                                <button className='topRated'>Top rated movie #65</button>
                                <div className='movieDetailsPage__form'>

                                    <select name="cars" id="cars" form="carform">
                                        <option value="volvo">Awards
                                            9 nominations</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='movieDetailsPage__main_details__right'>
                        <div className='movieDetailsPage__right_raing'>

                            <AiFillStar style={{ color: '#FFDF00', }} /><p style={{ color: 'rgba(232, 232, 232, 1)', marginLeft: '10px' }}>{movieDetailInfo?.vote_average}</p> | <p style={{ marginLeft: '10px', marginRight: '10px' }}>{movieDetailInfo?.vote_count} </p>
                        </div>
                        <button className='showTime'><IoTicketOutline color='#fff' style={{ background: '#be123c', marginRight: '10px' }} /> See Showtimes</button>
                        <button className='watchOption'><AiOutlineUnorderedList color='#000' style={{ marginRight: '10px' }} />More watch options</button>
                        <div className='best_sellingMovies'>
                            <img src={bottomImg} alt='bottom' />

                            <button className='best_sellingMovies__button'><AiOutlineUnorderedList color='#fff' style={{ marginRight: '10px' }} />
                                The Best Movies and Shows in September</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
