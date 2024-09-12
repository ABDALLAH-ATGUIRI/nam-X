import React from 'react'
import HeroSlider, { Slide, SideNav, MenuNav, Nav } from "hero-slider";
import OverlayContainer from "hero-slider";
import Wrapper from "../../components/global/UI/Wrapper/Wrapper";
import Title from "../../components/global/UI/Title/Title";
import Subtitle from "../../components/global/UI/Subtitle/Subtitle";
// import video from "../assets/videoplayback.gif"
import "./container.intro.css"



function introContainer() {
    // Images
    const kyoto = "https://genesis-cdn.ff.com/faraday-future-ff-91/silver-faraday-future-ff-91-electric-car-exiting-driveway.jpg";
    const tenryuJiTemple = "https://genesis-cdn.ff.com/faraday-future-gallery/ff-91/ff-91-gallery5.jpg";
    const hakone = "https://genesis-cdn.ff.com/faraday-future-ff-91/silver-faraday-future-ff-91-electric-car-exiting-driveway.jpg";

    return (
        <>
            <div className='w-full h-auto z-0 relative'>
                <HeroSlider
                    slidingAnimation='left_to_right'
                    orientation='horizontal'
                    set
                    initialSlide={1}
                    style={{
                        backgroundColor: '#000'
                    }}
                    settings={{
                        slidingDuration: 500,
                        slidingDelay: 100,
                        shouldAutoplay: true,
                        shouldDisplayButtons: false,
                        autoplayDuration: 2000,
                        height: '100vh'
                    }}

                >

                    <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: kyoto
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: tenryuJiTemple
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: hakone
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    {/* <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: video
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide> */}

                </HeroSlider>
                <div className="scrolldown absolute bottom-10 z-40 right-0 left-50" >
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default introContainer;