import {useCleanRepo} from './CleanRepo';

export const incrementCountFromCleanRepoUseCase = repo => {
  repo.increment();
};
