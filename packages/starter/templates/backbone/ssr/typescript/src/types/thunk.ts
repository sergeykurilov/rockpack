// eslint-disable-next-line import/no-extraneous-dependencies
import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { History } from 'history';
import { ServicesInterface } from '../services';
import { RootState } from './store';

export type ThunkResult<R = void> = ThunkAction<Promise<R>, RootState, {
  history: History,
  services: ServicesInterface
}, Action>;
