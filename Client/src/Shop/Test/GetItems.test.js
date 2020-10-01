import React from 'react';
const suma = require('./suma');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });


import GetItems from '../Services/GetItems';

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('asignacion de objeto', () => {
  const data = {uno: 1};
  data['dos'] = 2;
  expect(data).toEqual({uno: 1, dos: 2});
});


it('Funcion De componente Enzyme', () => {
  const sut = shallow(<GetItems />);
  expect(sut.instance().Prueba(1)).toBe(1);
});
/*
it('Funcion De componente Enzyme Fetch', () => {
  const sut = shallow(<GetItems />);
  expect(sut.instance().componentDidMount(1)).toBe(1);
});
*/
