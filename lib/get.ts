import fetch from 'node-fetch';
import { stringify as buildQS } from 'querystring';

import { Callback, RequestParams } from './types';

const API_URL = 'https://api.pinboard.in/v1';

interface Props {
  endpoint: keyof RequestParams;
  qs: { [propName: string]: any };
}
type Get = (props: Props, cb: Callback) => Promise<object | void>;

const get: Get = ({ endpoint, qs }, cb) => {
  const promise = fetch(`${API_URL}/${endpoint}?${buildQS(qs)}`, {
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());

  return cb
    ? promise.then(json => cb(null, json)).catch(err => cb(err, null))
    : promise;
};

export default get;
