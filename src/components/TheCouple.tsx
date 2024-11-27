import { Carousel, Image, Menu } from 'antd';
import React from 'react';

const TheCouple: React.FC = () => {

    interface CarouselImageProps {
        src: string;
        alt: string;
    }

    const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
        return (
            <div>
                <Image
                    src={src}
                    alt={alt}
                    height="100vh"
                    width="100%"
                    preview={false}
                />
            </div>
        );
    };

    const images = [
        { src: "images/photo2.jpg", alt: "Slide 2" },
        { src: "images/photo3.jpg", alt: "Slide 3" },
        { src: "images/photo4.jpg", alt: "Slide 4" },
        { src: "images/photo5.jpg", alt: "Slide 5" },
        { src: "images/photo6.jpg", alt: "Slide 6" },
    ];
    return (
        <section id="the-couple" style={{
            height: "100vh",
            transition: "opacity 1s ease",
        }}>
            <Carousel autoplay id='home'>
                {images.map((image, index) => (
                    <CarouselImage key={index} src={image.src} alt={image.alt} />
                ))}
            </Carousel></section>);
}

export default TheCouple;