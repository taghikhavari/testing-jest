import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  })
  
  it('renders a button', () => {
    const btn = mountedButton.find('button');
    expect(btn.length).toBe(1);
  })

  it('call a function passed to it when clicked', () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallBack = shallow(<Button handleClick={mockCallBack} />);
    mountedButtonWithCallBack.find('button').simulate('click', {target: {location: 'test.png'}});
    expect(mockCallBack.mock.calls.length).toBe(1);
  })
})

describe('when a location is passed to button', () => {
  it('shows the location correctly', () => {
    const mountedBtn = shallow(<Button location='alabama' />);
    expect(mountedBtn.text()).toBe('alabama');
  })
})

describe('when a location is passed to button', () => {
  it('shows "Show All" when location does not exist', () => {
    const mountedBtn = shallow(<Button/>);
    expect(mountedBtn.text()).toBe('All Locations');
  })
})