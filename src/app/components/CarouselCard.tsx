"use client";

import Carousel from 'react-bootstrap/Carousel';
import type { CarouselProps } from 'react-bootstrap';
import Image from 'next/image';
export interface CarouselCardProps extends CarouselProps{
    images: string[];
}
export function CarouselCard({ images } : CarouselCardProps ) {
    return (
        <>
        <Carousel>
        {
            images.map((image, index) => (
                <Carousel.Item key = { index } >
                <Image src={ image }
                  alt = {`Slide ${index + 1}`} />
                </Carousel.Item>
                ))
             }
        </Carousel>
        </>
    );
}