import React from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Deals = () => {
    const packages = [
        {id:1, price:0.00, name:'free',benefits:[
            'everithing is fair',
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely'
        ]},
        {id:2, price:40.00, name:'Standard',benefits:[
            'everithing is fair and ',
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely'
        ]},
        {id:3, price:99.00, name:'Primium',benefits:[
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely',
            'everithing is fair and lovely'
        ]}
    ]
    return (
        <div className='bg-indigo-500 py-10'>
            <h2 className='text-center text-6xl font-bold text-white'>Best Deals Forever</h2>
            <div className='grid md:grid-cols-3 gap-4 mx-8 mt-4'>
                {
                    packages.map(pack=><PriceCard key={pack.id} pack={pack}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default Deals;