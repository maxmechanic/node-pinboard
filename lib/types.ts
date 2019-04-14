export type Callback = (err: Error, body: unknown) => void;

type YesOrNo = 'yes' | 'no';

export interface RequestParams {
  'posts/update': {};

  'posts/add': {
    url: string;
    description: string;
    extended?: string;
    tags?: string[];
    dt?: string;
    replace?: YesOrNo;
    shared?: YesOrNo;
    toread?: boolean;
  };

  'posts/delete': {
    url: string;
  };

  'posts/dates': {
    tag?: string[];
  };

  'posts/recent': {
    tag?: string[];
  };

  'posts/get': {
    tag?: string;
    dt?: string;
    url?: string;
    meta?: string;
  };

  'posts/all': {
    tag?: string;
    start?: string;
    results?: string;
    fromdt?: string;
    meta?: string;
  };

  'posts/suggest': { url: string };

  'tags/get': {};

  'tags/delete': { tag: string };

  'tags/rename': {
    old: string;
    new: string;
  };

  'user/secret': {};

  'user/api_token': {};

  'notes/list': {};

  [propName: string]: {};
}
