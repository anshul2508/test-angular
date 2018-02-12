import {User} from '../models/user';
import {Action} from '../actions/action';
import {
  USERLIST_UPDATE, SEARCH_QUERY_UPDATE, TAB_SELECTED_UPDATE, SELECTED_USER_UPDATE
} from '../actions/user';

export interface UserlistState {
  userlist: User[];
  selectedUser: User;
  searchQuery: string;
  tabSelected: string;
}

export const initialState: UserlistState = {
  userlist: [],
  selectedUser: null,
  searchQuery: '',
  tabSelected: 'all'
};

export function reducer (state = initialState, action: Action): UserlistState {
  switch (action.type) {
    case USERLIST_UPDATE: {
      return {...state, userlist: action.payload};
    }
    case SELECTED_USER_UPDATE: {
      return {...state, selectedUser: action.payload};
    }
    case SEARCH_QUERY_UPDATE: {
      return {...state, searchQuery: action.payload};
    }
    case TAB_SELECTED_UPDATE: {
      return {...state, tabSelected: action.payload};
    }
    default : {
      return state;
    }
  }
}

export const getUserlist = (state: UserlistState) => state.userlist;
export const getSelectedUser = (state: UserlistState) => state.selectedUser;
export const getSearchQuery = (state: UserlistState) => state.searchQuery;
export const getTabSelected = (state: UserlistState) => state.tabSelected;
