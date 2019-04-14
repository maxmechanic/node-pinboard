import fetch from 'node-fetch';
import { stringify as buildQS } from 'querystring';

import { Callback, RequestParams } from './types';

const API_URL = 'https://api.pinboard.in/v1';

interface Props {
  endpoint: keyof RequestParams;
  qs: { [propName: string]: any };
}
type Get = (props: Props, cb: Callback) => Promise<void>;

const get: Get = ({ endpoint, qs }, cb) =>
  fetch(`${API_URL}/${endpoint}?${buildQS(qs)}`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(json => cb(null, json))
    .catch(err => cb(err, null));

export default get;
