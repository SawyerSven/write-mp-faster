import * as api from './address';
import { get, post } from '../common/request/request.conf';

export const test = (data) => get(api.test, data);
