import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../component/form/main.js';
import { mount } from 'enzyme';
it('renders main', () => {
    const { getByText } = render(<Counter />);
    const linkElement = getByText('URL :');
    expect(linkElement).toBeInTheDocument();
  });
//   it('submit main', () => {
//         const onSubmitFn = jest.fn();
//         const wrapper = mount(<Counter onSubmit={this.handleSubmit}/>);
//         const form = wrapper.find('form');
//         form.simulate('submit');
//         expect(onSubmitFn).toHaveBeenCalledTimes(1);
//       });