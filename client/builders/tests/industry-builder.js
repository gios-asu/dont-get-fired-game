import {describe, it,beforeEach} from 'mocha';
import {expect} from 'chai';

import IndustryBuilder from '../industry-builder';

describe('The industry builder', function () {
  let builder = null;

  beforeEach(function () {
    builder = new IndustryBuilder();
  });

  it('can make industries', function () {
    const industry = builder.build();

    expect(typeof industry).to.be.equal('object');
    expect(industry.constructor.name).to.be.equal('Industry');
  });

  it('can make industries from options', function () {
    builder.setComment('a');

    builder.setFromOptions({
      comments: 'b'
    });

    const industry = builder.build();

    expect(industry.comments).to.be.equal('b');
  });
});
