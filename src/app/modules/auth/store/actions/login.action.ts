import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types.enum';
import { UserDto } from '../../models/user-dto';

export const loginAction = createAction(ActionTypes.LOGIN, props<UserDto>());
