import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromUsers from './users';


export interface State {
  userlistState: fromUsers.UserlistState;
}

export const reducers: ActionReducerMap<State> = {
  userlistState: fromUsers.reducer,
};

export const getUserlistState = (state: State) => state.userlistState;

export const getUserlist = createSelector(getUserlistState, fromUsers.getUserlist);
export const getSelectedUser = createSelector(getUserlistState, fromUsers.getSelectedUser);
export const getSearchQuery = createSelector(getUserlistState, fromUsers.getSearchQuery);
export const getTabSelected = createSelector(getUserlistState, fromUsers.getTabSelected);


