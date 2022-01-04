import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

const { asFragment } = render(<About />);

expect(asFragment()).toMatchSnapshot();

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
    })        
})

