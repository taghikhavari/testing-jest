import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';

describe('test Map component', () => {
  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  })

  it('contains an image', () => {
    const img = mountedMap.find('img')
  })
  
  it('should display the image source from prop correctly', ()=> {
    const mapWrapper = shallow(<Map imageName='alabama.png' />);
    const img = mapWrapper.find('img[src="images/alabama.png"]');
    expect(img.length).toBe(1);
  })

  it('displays the none map when no params are given', () => {
    const defaultMap = mountedMap.find('img[src="images/none.png"]');
    expect(defaultMap.length).toBe(1);
  })
})