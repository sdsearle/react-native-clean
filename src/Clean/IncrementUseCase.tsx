import {countStoreRepo} from './CountStoreRepo';

export const incrementCountStoreUseCase = (repo: typeof countStoreRepo) => {
  repo.increment();
};
