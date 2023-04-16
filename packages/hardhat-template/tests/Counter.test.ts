import { ethers } from 'hardhat';
import { expect } from 'chai';

import { Counter } from '../dist/types';

describe('Counter', () => {
  let instance: Counter;

  beforeEach(async () => {
    instance = (await (await ethers.getContractFactory('Counter')).deploy()) as Counter;
  });

  describe('#set', () => {
    it('set successfully', async () => {
      await expect(instance.set(33)).emit(instance, 'SetCounter').withArgs(0, 33);
      expect(await instance.get()).to.eq(33);
    });
  });

  describe('#inc', () => {
    it('inc successfully', async () => {
      await expect(instance.inc()).emit(instance, 'SetCounter').withArgs(0, 1);
      expect(await instance.get()).to.eq(1);
    });
  });
});
