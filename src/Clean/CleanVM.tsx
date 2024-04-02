import {useSyncExternalStore} from 'react';
import {countStoreRepo} from './CountStoreRepo';
import {getCountUseCase, incrementCountStoreUseCase} from './IncrementUseCase';
import {useCleanRepo} from './CleanRepo';
import {useNavigation} from '@react-navigation/native';

export const useCleanVM = () => {
  const repo = countStoreRepo;
  const cleanRepo = useCleanRepo();
  const nav = useNavigation();

  const counter = useSyncExternalStore(
    countStoreRepo.subscribe,
    countStoreRepo.getCounterSnapshot,
  );

  const todos = useSyncExternalStore(
    countStoreRepo.subscribe,
    countStoreRepo.getTodoSnapshot,
  );

  const goToPokemonClean = () => {
    nav.navigate('CleanPokemon');
  };

  const cleanCount = cleanRepo.c.count;

  const increment = () => {
    //incrementUseCase(repo);
    cleanRepo.increment();
  };

  const cleanTodos = cleanRepo.todos;

  const addTodo = () => {
    cleanRepo.addTodo();
  };

  return {
    counter,
    todos,
    increment,
    cleanCount,
    addTodo,
    cleanTodos,
    goToPokemonClean,
  };
};
