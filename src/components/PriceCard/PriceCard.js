import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PriceCard = ({pack}) => {
    const {name,price,benefits}= pack;
    return (
        <div className='bg-gray-200 text-center rounded-lg p-4'>
            <h2 className='bg-sky-400 p-2 rounded text-2xl font-bold'>{name}</h2>
            <p><span className='text-8xl font-bold'>{price}</span>
                <span className='text-2xl font-bold text-slate-400'>/mo</span>
            </p>
            <div>
                <h2 className='text-left text-xl'>Benefit:</h2>
                {
                    benefits.map((benefit,index)=><Benefit benefit={benefit} key={index}></Benefit>)
                }
            </div>
            <button className='flex items-center justify-center
             w-full bg-green-400 py-2 mt-3 rounded font-bold text-white hover:text-green-700'> Buy Now <ArrowRightIcon className='w-4 h-4'></ArrowRightIcon></button>
        </div>
    );
};

export default PriceCard;