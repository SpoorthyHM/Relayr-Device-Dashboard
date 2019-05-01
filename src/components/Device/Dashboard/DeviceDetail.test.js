import React from 'react';
import DeviceDetail from './DeviceDetail';
import { shallow } from 'enzyme';

describe('DeviceDetails', () => {
    let data = {
        "device": 
            {
                "name": "acceleration_x",
                "unit": "m/s2",
                "value": 25.993848858558,
                "timestamp": 1556550441396,
                "active": true
            }
        }

    let noData = {"device" : {}};
    it('should render correctly with data', () => {
        const component = shallow(<DeviceDetail {...data}/>);
        component.setProps(data);
        expect(component).toMatchSnapshot();
      });

    it('should render correctly with empty props', () => {
        const component = shallow(<DeviceDetail {...noData}/>);
        component.setProps(noData);
        expect(component).toMatchSnapshot();
    });
});
