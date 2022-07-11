import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('has 5 childs', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(5);
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});