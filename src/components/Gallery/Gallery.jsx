import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './gallery.scss';
import { useSelector } from 'react-redux';
import Button from '../button/Button';

import img1 from '../../assets/dummyImage.png';
import img2 from '../../assets/event1.jpg';
import img3 from '../../assets/git1.png';
import img4 from '../../assets/git2.png';

function Gallery() {
    const authStatus = useSelector(state => state.auth.status);

    const images = [
        {
            name: 'dummy img',
            img: img1,
        },
        {
            name: 'event1 img',
            img: img2,
        },
        {
            name: 'git1 img',
            img: img3,
        },
        {
            name: 'git2 img',
            img: img4,
        },
    ];

    const handleDelete = (image) => {

    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='hello'>
            <div className='gallery'>
                <div className="carousel">
                    <Slider {...settings}>
                        {images.map(image => (
                            <div className="image" style={{ display: 'flex' }}>
                                <img src={image.img} alt={image.name} key={image.name} />
                                {authStatus && <button onClick={handleDelete} >Delete</button>}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {authStatus && <Button link={`/upload-image`} name={'Upload new image'}>Upload</Button>}
        </div>
    )
}

export default Gallery;