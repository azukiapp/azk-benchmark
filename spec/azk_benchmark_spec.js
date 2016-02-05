import h from './spec_helper';
import AzkBenchmark from '../src/benchmark/azk_benchmark';

describe('AzkBenchmark:', () => {
  it('should azkBinPath have a value', () => {
    let instantiate = () => {
      new AzkBenchmark({ azkBinPath: 'something not null' });
    };
    return h.expect(instantiate).to.not.throw(Error);
  });

  it('should azkBinPath throw if undefined/null', () => {
    let instantiate = () => {
      new AzkBenchmark({ azkBinPath: null });
    };
    return h.expect(instantiate).to
      .throw(Error, /azkBinPath \(.*?\) cannot be null\/undefined/);
  });

  describe('_summariseData', function() {
    it('should calculate all averages', () => {
      const azkBenchmark = new AzkBenchmark({ azkBinPath: 'something not null' });
      const resultData = require('./fixtures/final_results_list.js');
      const resultSummary = azkBenchmark._summariseData(resultData);
      h.expect(resultSummary).to.not.be.undefined;
    });
  });

});
