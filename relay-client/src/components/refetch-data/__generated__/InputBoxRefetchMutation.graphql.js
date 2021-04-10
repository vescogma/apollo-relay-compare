/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InputBoxRefetchMutationVariables = {|
  message: string
|};
export type InputBoxRefetchMutationResponse = {|
  +sendMessage: ?{|
    +id: string,
    +from: string,
    +message: string,
    +timestamp: number,
  |}
|};
export type InputBoxRefetchMutation = {|
  variables: InputBoxRefetchMutationVariables,
  response: InputBoxRefetchMutationResponse,
|};
*/


/*
mutation InputBoxRefetchMutation(
  $message: String!
) {
  sendMessage(from: "apollo-client", message: $message) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "message"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "from",
        "value": "apollo-client"
      },
      {
        "kind": "Variable",
        "name": "message",
        "variableName": "message"
      }
    ],
    "concreteType": "Chat",
    "kind": "LinkedField",
    "name": "sendMessage",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InputBoxRefetchMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InputBoxRefetchMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "401b5622b7f3ac16d63f9fca42959bbc",
    "id": null,
    "metadata": {},
    "name": "InputBoxRefetchMutation",
    "operationKind": "mutation",
    "text": "mutation InputBoxRefetchMutation(\n  $message: String!\n) {\n  sendMessage(from: \"apollo-client\", message: $message) {\n    id\n    from\n    message\n    timestamp\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8e26960ee5844ca050d806ae8030404e';

module.exports = node;
