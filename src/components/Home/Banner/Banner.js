import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const Banner = () => {
    const data = [
        {
            image:
                "https://i.ibb.co/vv9pd40/s-2.png",
            caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
        },
        {
            image:
                "https://i.ibb.co/7bXypsB/s-1.png",
            caption: "<div>San Francisco</div>",
        },
        {
            image:
                "https://i.ibb.co/x8gwCby/s-3.png",
            caption: "<div>San Francisco</div>",
        },
        {
            image:
                "https://i.ibb.co/gm98qN2/s-4.png",
            caption: "<div>San Francisco</div>",
        },
        {
            image:
                "https://i.ibb.co/WDHS0VG/s-5.png",
            caption: "<div>San Francisco</div>",
        },
        {
            image:
                "https://i.ibb.co/Lgw6hjg/s-6.png",
            caption: "Darjeeling",
        },
        {
            image:
                "https://i.ibb.co/Bn4B6pV/s-7.png",
            caption: "<div>San Francisco</div>",
        },
        {
            image:
                "https://i.ibb.co/DRHJ11r/s-8.png",
            caption: "<div>San Francisco</div>",
        },
        {
            image:
                "https://i.ibb.co/DRHJ11r/s-8.png",
            caption: "<div>San Francisco</div>",
        },
    ];

    const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
    };
    const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    };
    return (
        <div>
            <div style={{ textAlign: "center", }}>
                <div
                    style={{
                        padding: "0 20px",
                    }}
                >
                    <Carousel
                        data={data}
                        time={2000}
                        width="100%"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideImageFit="cover"
                        showNavBtn={true}
                        style={{
                            textAlign: "center",
                            maxWidth: "1250px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;