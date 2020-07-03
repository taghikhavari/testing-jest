import React from 'react';
import { shallow } from "enzyme";
import Header from "./Header";

describe('rendering Header Component', () => {
  let mountedHeader ;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  }) 

  it('renders logo inside header', ()=> {
    const logo = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]');
    expect(logo.length).toBe(1);
  })
})