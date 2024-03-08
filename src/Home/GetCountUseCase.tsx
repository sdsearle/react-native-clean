import {HomeCounter} from './HomeCounter';
import {HomeRepo} from './HomeRepo';

export class GetCountUseCase {
  repo: HomeRepo;
  getCount: HomeCounter;

  constructor(repo: HomeRepo) {
    this.repo = repo;
    this.getCount = this.repo.counter;
  }
}
