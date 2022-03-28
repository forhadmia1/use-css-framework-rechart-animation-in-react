import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({benefit}) => {
    return (
        <p className='flex items-center'>
            <CheckCircleIcon className='w-4 h-4 text-green-400 mr-2'></CheckCircleIcon>
            {benefit}
        </p>
    );
};

export default Benefit;