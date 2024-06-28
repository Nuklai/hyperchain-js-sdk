import { Action } from '../actions/action';
import { Auth } from '../auth/auth';
import { TypeParser } from '../codec/typeParser';
export type ActionRegistry = TypeParser<Action, boolean>;
export type AuthRegistry = TypeParser<Auth, boolean>;
