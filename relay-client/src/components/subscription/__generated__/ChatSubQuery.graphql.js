/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChatSubQueryVariables = {||};
export type ChatSubQueryResponse = {|
  +chats: ?$ReadOnlyArray<?{|
    +id: string,
    +from: string,
    +message: string,
    +timestamp: number,
  |}>
|};
export type ChatSubQuery = {|
  variables: ChatSubQueryVariables,
  response: ChatSubQueryResponse,
|};
*/


/*
query ChatSubQuery {
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
    "name": "ChatSubQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ChatSubQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dbff792e1236d34af84aebd35ee6eeb2",
    "id": null,
    "metadata": {},
    "name": "ChatSubQuery",
    "operationKind": "query",
    "text": "query ChatSubQuery {\n  chats {\n    id\n    from\n    message\n    timestamp\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '86013b413c183980944ebdced12c835d';

module.exports = node;
