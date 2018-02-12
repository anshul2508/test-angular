import {User} from '../models/user';
import {Action} from './action';

export const USERLIST_UPDATE = '[Userlist] Update Success';
export const SELECTED_USER_UPDATE = '[SelectedUser] Update Success';
export const SEARCH_QUERY_UPDATE = '[SearchQuery] Update Success';
export const TAB_SELECTED_UPDATE = '[TabSelected] Update Success';


export class UserlistUpdateAction implements Action {
  readonly type = USERLIST_UPDATE;
  constructor ( public payload: User[]) {}
}

export class SelectedUserUpdateAction implements Action {
  readonly type = SELECTED_USER_UPDATE;
  constructor ( public payload: User) {}
}


export class SearchQueryUpdateAction implements Action {
  readonly type = SEARCH_QUERY_UPDATE;
  constructor ( public payload: string) {}
}


export class TabSelectedUpdateAction implements Action {
  readonly type = TAB_SELECTED_UPDATE;
  constructor ( public payload: string) {}
}
