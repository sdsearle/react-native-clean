import {useSyncExternalStore} from 'react';
import {countStoreRepo} from './CountStoreRepo';
import {getCountUseCase, incrementCountStoreUseCase} from './IncrementUseCase';
import {useCleanRepo} from './CleanRepo';
import {useNavigation} from '@react-navigation/native';
import {useShowDialog} from '../Dialog/ShowDialogUseCase';
import {useHideDialogUseCase} from '../Dialog/HideDialogUseCase';

export const useCleanVM = () => {
  const repo = countStoreRepo;
  const cleanRepo = useCleanRepo();
  const nav = useNavigation();
  const createDialog = useShowDialog();
  const closeDialog = useHideDialogUseCase();

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

  const showDialog = () => {
    createDialog('title', 'description', 'positive', closeDialog);
    setTimeout(() => {
      console.log('Hello, World!');
      createDialog('NewTitle', 'New description', 'New positive', closeDialog);
    }, 2000);
  };

  return {
    counter,
    todos,
    increment,
    cleanCount,
    addTodo,
    cleanTodos,
    goToPokemonClean,
    showDialog,
  };
};
