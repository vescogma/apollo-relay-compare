/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChatRefetchQueryVariables = {||};
export type ChatRefetchQueryResponse = {|
  +chats: ?$ReadOnlyArray<?{|
    +id: string,
    +from: string,
    +message: string,
    +timestamp: number,
  |}>
|};
export type ChatRefetchQuery = {|
  variables: ChatRefetchQueryVariables,
  response: ChatRefetchQueryResponse,
|};
*/


/*
query ChatRefetchQuery {
  chats {
    id
    from
    message
    timestamp
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Chat",
    "kind": "LinkedField",
    "name": "chats",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "from",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "timestamp",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ChatRefetchQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ChatRefetchQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ffd1b1b1bd1da862f64dc3be1a9df166",
    "id": null,
    "metadata": {},
    "name": "ChatRefetchQuery",
    "operationKind": "query",
    "text": "query ChatRefetchQuery {\n  chats {\n    id\n    from\n    message\n    timestamp\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db00e04729b191a08460fc6f9b0a91e5';

module.exports = node;
