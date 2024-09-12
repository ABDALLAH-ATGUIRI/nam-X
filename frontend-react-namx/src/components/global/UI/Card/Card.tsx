import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import "./Card.css"

interface objinfo {
    subject: string,
    title: string,
    image: string

}

export default function RecipeReviewCard({ subject, title, image }: objinfo) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className=' lg:max-w-md w-11/12 bg-white my-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 '>
            <div
                className="overflow-hidden h-80 w-full aspect-video bg-gray-900 cursor-pointer rounded-xl relative group "
            >
                <div
                    className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                >
                    <div
                        className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">{title}</div>

                        <div className="opacity-60 text-sm ">
                            {subject}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-hidden dark:text-white"></span>
                            <div className='flex items-center justify-between text-lg gap-2 bold'>
                                <button className='button' id='button'>
                                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="3"></circle>
                                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                    </svg>
                                    <i></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="object-fill h-full w-full aspect-auto group-hover:scale-110 transition duration-300 ease-in-out rounded-t-lg"
                    src={image}
                    alt="product image"
                />
            </div>
        </div>

    );
}