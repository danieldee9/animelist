import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

function select({ yearData, seasonData }) {

  return (
    <div className="selection">
        <Select
            placeholder="Select a year"
            allowClear
            onChange={value => yearData(value)}
        >
            <Option value="2020">2020</Option>
            <Option value="2019">2019</Option>
            <Option value="2018">2018</Option>
        </Select>
        <Select
            placeholder="Select a season"
            allowClear
            onChange={value => seasonData(value)}
        >
            <Option value="summer">Summer</Option>
            <Option value="spring">Spring</Option>
            <Option value="fall">Fall</Option>
            <Option value="winter">Winter</Option>
        </Select>
    </div>
  );
}

export default select;