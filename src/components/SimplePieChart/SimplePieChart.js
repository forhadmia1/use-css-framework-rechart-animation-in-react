import React from 'react';
import { Pie, PieChart } from 'recharts';

const SimplePieChart = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
    return (
        <PieChart width={600} height={600} data={data} className='mx-auto'>
            <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
            ></Pie>
            

        </PieChart>
    );
};

export default SimplePieChart;