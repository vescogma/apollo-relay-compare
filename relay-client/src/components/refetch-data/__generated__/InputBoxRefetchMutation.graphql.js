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
  sendMessage(from: "relay-client", message: $message) {
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
        "value": "relay-client"
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
    "cacheID": "3d31c4b1f457c114a327929cfbbb0023",
    "id": null,
    "metadata": {},
    "name": "InputBoxRefetchMutation",
    "operationKind": "mutation",
    "text": "mutation InputBoxRefetchMutation(\n  $message: String!\n) {\n  sendMessage(from: \"relay-client\", message: $message) {\n    id\n    from\n    message\n    timestamp\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '09698cae1a399b164b190753a3a7c2f3';

module.exports = node;
