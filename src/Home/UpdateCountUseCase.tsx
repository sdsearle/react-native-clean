import {HomeRepo} from './HomeRepo';

export class UpdateCountUseCase {
  repo: HomeRepo;

  constructor(repo: HomeRepo) {
    this.repo = repo;
  }

  updateCount(callback) {
    this.repo.updateCount(callback);
  }
}
