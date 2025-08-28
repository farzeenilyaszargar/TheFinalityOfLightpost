'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { NewsItem } from "@/types/news";





export default function LatestNews() {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        async function loadNews() {
            const res = await fetch('/api/news');
            const data = await res.json();
            setNews(data);
        }
        loadNews();


    }, []);



    const newsDa = news.map((item, index) => ({
        ...item,
        id: index // 0,1,2,...
    }));





    return (


        <div className=" mt-5 grid grid-cols-4  border">



            {

                newsDa.map(item => (
                    <React.Fragment key={item.id}>
                        {item.id === 1 && (
                            <div className="border p-4 text-center col-span-1  h-fit">
                                <h2>Word of the Day</h2>
                                <p>ai summary</p>
                            </div>
                        )}
                        {item.id === 0 && (
                            <div className="border p-4 text-center col-span-1 h-fit">
                                <h2>Summary of the Day</h2>
                                <p>ai summary of the day here lofkadsjdkdsjf lk sjdflk dj</p>
                            </div>
                        )}


                        <div key={item.id} className={`border p-3  h-fit ${item.id === 0 ? 'col-span-2' : 'col-span-1'} `}>
                            {
                                item.image_url ?
                                    (
                                        <Image src={item.image_url} alt={item.title} width={200} height={100} className='w-full' unoptimized/>

                                    ) :
                                    (
                                        <Image src={'/placeholder.png'} alt={"placeholder"} width={200} height={100} className='w-full' />

                                    )
                            }
                            <h2 className={`font-semibold text-xl mt-2 mb-2 font-title font-color ${item.id === 0 ? 'text-3xl' : 'text-xl'} `}>{item.title}</h2>
                            <p className="text-secondary font-para">{(item.description)}</p>
                            <p className="text-sm text-gray-400 mt-1">
                                {new Date(item.published_at).toLocaleString()}
                            </p>
                            <div className="relative w-1/3 h-4 bg-gray-200 rounded-full">
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: "linear-gradient(to right, #1b3a57 0%, #555555 50%, #5c2f1f 100%)"
                                    }}
                                />

                                <div
                                    className="absolute top-0 h-full w-1 bg-white "
                                    style={{ left: `${item.bias_score * 10}%` }}
                                />
                            </div>

                            <p>{item.bias_reason}</p>
                            <p className="border w-fit rounded ">{item.topic}</p>
                            <p>{item.rating}</p>
                        </div>







                    </React.Fragment>


                ))}




        </div>



        


    );
}
