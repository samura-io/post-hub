import { createStoreon } from 'storeon';
import { user } from './user';
import { persistState } from '@storeon/localstorage';

const store = createStoreon([user, persistState(['user'])]);

export default store;
