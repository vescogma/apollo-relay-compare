/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MessagesSubscriptionVariables = {||};
export type MessagesSubscriptionResponse = {|
  +messageSent: ?{|
    +id: string,
    +from: string,
    +message: string,
    +timestamp: number,
  |}
|};
export type MessagesSubscription = {|
  variables: MessagesSubscriptionVariables,
  response: MessagesSubscriptionResponse,
|};
*/


/*
subscription MessagesSubscription {
  messageSent {
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
    "name": "messageSent",
    "plural": false,
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
    "name": "MessagesSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MessagesSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e8359c31db6531e3da0a93f67f6f02f8",
    "id": null,
    "metadata": {},
    "name": "MessagesSubscription",
    "operationKind": "subscription",
    "text": "subscription MessagesSubscription {\n  messageSent {\n    id\n    from\n    message\n    timestamp\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd8ca10719c8b6ad21525cdc1a5209cbd';

module.exports = node;
