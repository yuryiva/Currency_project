import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


class Chart1 extends Component {

  state = {
    data: [
      { name: 'Page A', uv: 4000 },
      { name: 'Page B', uv: 3000 },
      { name: 'Page C', uv: 6000},
      { name: 'Page D', uv: 2780},
      { name: 'Page E', uv: 1890},
      { name: 'Page F', uv: 2390},
      { name: 'Page G', uv: 5490},
      { name: 'Page U', uv: 5490},
      { name: 'Page B', uv: 5490},
    ]
  }

  render() {
    return (
      <div className = 'chart1'>

        <AreaChart
          width={800}
          height={600}
          data={this.state.data}
          //margin={{top: 10, right: 0, left: 0}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    );
  }
}


export default Chart1