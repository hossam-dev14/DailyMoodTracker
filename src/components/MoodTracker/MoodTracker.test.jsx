import React from 'react';
import TestRender from "react-test-renderer";
import { describe, it, expect } from 'vitest';
// import { render, fireEvent } from '@testing-library/react';
import { test } from 'vitest';
import MoodTracker from './MoodTracker.jsx'; 


/**
 *    ---- Using "describe" ---- 
**/   

// ------------- Initial State
describe('MoodTracker', () => {
  it('should render initial message', () => {
    const getByText = TestRender.create(<MoodTracker />);  
    expect(getByText.toJSON());
  });
})

// ------------- Sad Mood
describe('MoodTracker', () => {
  it('should update mood on sad button click', () => {
    const getByText = TestRender.create(<MoodTracker />);  
    expect(getByText.toJSON('...'));
  });
})

// ------------- Happy Mood
describe('MoodTracker', () => {
  it('should update mood on happy button click', () => {
    const getByText = TestRender.create(<MoodTracker />);  
    expect(getByText.toJSON('I am very happy today!'));
  });
})

// ------------- Angry Mood
describe('MoodTracker', () => {
  it('should update mood on angry button click', () => {
    const getByText = TestRender.create(<MoodTracker />);  
    expect(getByText.toJSON('I am very angry today!'));
  });
})

//-------------------------------------------//

// describe('MoodTracker component', () => {

  // it('should render initial message', () => {
  //   const getByText = TestRender.create(<MoodTracker />);  
  //   expect(getByText.toJSON('r..rstarstas'));
  // });

  // it('should update mood on happy button click', () => {
  //   const { getByText } = render(<MoodTracker />);  
  //   const happyButton = getByText(/Happy/i); // Match "Happy" case-insensitively
  //   fireEvent.click(happyButton);
  //   expect(getByText('I am very happy today!'));
  // });

  // it('should update mood on sad button click', () => {
  //   const getByText = TestRender.create(<MoodTracker />); 
  //   // const sadButton = getByText(/Sad/i); // Match "Sad" case-insensitively
  //   fireEvent.click(sadButton);
  //   expect(getByText.toJSON('I am Sad today!!'));
  // });
  
// });


/**
 *    ---- Using "test" ----
**/ 

// test('updates mood state when clicking on mood buttons', () => {
//   const { getByText } = render(<MoodTracker />);
  
//   const happyButton = getByText('happy');
//   const sadButton = getByText('sad');
//   const angryButton = getByText('angry');

//   fireEvent.click(happyButton);
//   expect(getByText('I am very happy today!'));

//   fireEvent.click(sadButton);
//   expect(getByText('I am Sad today!!'));

//   fireEvent.click(angryButton);
//   expect(getByText('I am Angry today!!'));
// });

