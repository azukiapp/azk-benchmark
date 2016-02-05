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

});
