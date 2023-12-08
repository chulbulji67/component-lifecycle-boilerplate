import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import LifeCycleMount from '../Components/LifeCycleMount';

configure({adapter: new Adapter()});

test('LifeCycle renders Charlie after DidMount Lifecycle', () => {
    const LifeCycleWrapper = shallow(<LifeCycleMount />)
    
    setTimeout(() => {
        expect(LifeCycleWrapper.state('name')).toEqual('Charlie')
    }, 3000)
});