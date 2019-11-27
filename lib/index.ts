import get from './get';

import { Callback, RequestParams } from './types';

function pinboardMethod<T extends keyof RequestParams>(
  endpoint: T,
  token: string
) {
  return (options: RequestParams[T], callback: Callback) => {
    const qs = Object.assign(
      {},
      // eslint-disable-next-line @typescript-eslint/camelcase
      { auth_token: token, format: 'json' },
      options
    );
    const params = {
      endpoint,
      qs
    };

    return get(params, callback);
  };
}

export default class Pinboard {
  public constructor(readonly token: string) {}

  /**
   * Returns The most recent time a bookmark was added, updated or deleted.
   */
  public update = pinboardMethod('posts/update', this.token);

  /**
   * Add a bookmark.
   */
  public add = pinboardMethod('posts/add', this.token);

  /**
   * Delete a bookmark.
   */
  public delete(url: string, cb: Callback) {
    return pinboardMethod('posts/delete', this.token)({ url }, cb);
  }

  /**
   * Returns one or more posts on a single day matching the arguments.
   * If no date or url is given, date of most recent bookmark will be used.
   */
  public get = pinboardMethod('posts/get', this.token);

  /**
   * Returns a list of dates with the number of posts at each date.
   */
  public dates = pinboardMethod('posts/dates', this.token);

  /**
   * Returns a list of the user's most recent posts, filtered by tag.
   */
  public recent = pinboardMethod('posts/recent', this.token);

  /**
   * Returns all bookmarks in the user's account.
   */
  public all = pinboardMethod('posts/all', this.token);

  /**
   * Returns a list of popular tags and recommended tags for a given URL.
   * Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags.
   */
  public suggest(url: string, cb: Callback) {
    return pinboardMethod('posts/suggest', this.token)({ url }, cb);
  }

  /**
   * Returns a full list of the user's tags along with the number of times they were used.
   */
  public getTags = pinboardMethod('tags/get', this.token);

  /**
   * Delete an existing tag.
   */
  public delTag(tag: string, cb: Callback) {
    return pinboardMethod('tags/delete', this.token)({ tag }, cb);
  }

  /**
   * Rename an tag, or fold it in to an existing tag
   */
  public renameTag = pinboardMethod('tags/rename', this.token);

  /**
   * Returns the user's secret RSS key (for viewing private feeds)
   */
  public userSecret = pinboardMethod('user/secret', this.token);

  /**
   * Returns the user's API token (for making API calls without a password)
   */
  public api_token = pinboardMethod('user/api_token', this.token);

  /**
   * Returns a list of the user's notes
   */
  public listNotes(cb: Callback) {
    return pinboardMethod('notes/list', this.token)({}, cb);
  }

  /**
   * Returns an individual user note. The hash property is a 20 character long sha1 hash of the note text.
   */
  public getNote(id: string, cb: Callback) {
    const url = `notes/${id}`;

    return pinboardMethod(url, this.token)({}, cb);
  }
}
