// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import expect = require('expect.js');

import {
  // Add any needed widget imports here (or from controls)
} from '@jupyter-widgets/base';

import {
  createTestModel
} from './utils.spec';

import {
  OscillatorModel, OscillatorView
} from '../../src/'


describe('Example', () => {

  describe('OscillatorModel', () => {

    it('should be createable', () => {
      let model = createTestModel(OscillatorModel);
      expect(model).to.be.an(OscillatorModel);
      expect(model.get('value')).to.be('Hello World');
    });

    it('should be createable with a value', () => {
      let state = { value: 'Foo Bar!' }
      let model = createTestModel(OscillatorModel, state);
      expect(model).to.be.an(OscillatorModel);
      expect(model.get('value')).to.be('Foo Bar!');
    });

  });

});
