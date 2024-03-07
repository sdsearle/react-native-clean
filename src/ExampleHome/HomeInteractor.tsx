import {HomeRepo} from './HomeRepo';

export class HomeInteractor {
  repo: HomeRepo;

  constructor(repo: HomeRepo) {
    this.repo = repo;
  }

  updateCount(callback) {
    this.repo.updateCount(callback);
  }
}
