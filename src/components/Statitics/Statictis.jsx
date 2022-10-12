import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statitcs.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statictis = () => {
  const newdata = useLoaderData().data;
  console.log(newdata)
  return (
    <div class="card">

      <div class="card-body">

        <div className='d-flex justify-content-center mt-5'>
          <LineChart
          width={300}
          height={300}
            data={newdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </div>

      </div>
    </div>
















  );
};

export default Statictis;