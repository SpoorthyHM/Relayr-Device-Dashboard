import React from 'react';
import DeviceDetails from './DeviceDetails';
import DeviceDetail from './DeviceDetail';
import { shallow, mount } from 'enzyme';

describe('DeviceDetails', () => {
    let data = {
        "data": [
            {
                "name": "acceleration_x",
                "unit": "m/s2",
                "value": 25.993848858558,
                "timestamp": 1556550441396,
                "active": true
            },
            {
                "name": "acceleration_y",
                "unit": "m/s2",
                "value": -128.993848858558,
                "timestamp": 1556550446366,
                "active": false
            }]
    }

    let noData = {"data" : []};
    it('should render correctly with props', () => {
        const component = shallow(<DeviceDetails {...data}/>);
        expect(component).toMatchSnapshot();
      });

    it('should render correctly with empty props', () => {
        const component = shallow(<DeviceDetails {...noData}/>);
        expect(component).toMatchSnapshot();
    });

});
