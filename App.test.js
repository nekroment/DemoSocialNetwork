import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatusWithHooks from './src/components/Profile/ProfileInfo/ProfileStatusWithHooks';

describe('Button',()=>{
    test('it shows the expected text', ()=>{
        const component = create(<ProfileStatusWithHooks status='test' />);
        const instance = component.getInstance();
        expect (instance.state.status).toBe('test');
    })
})