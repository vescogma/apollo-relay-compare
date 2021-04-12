/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InputBoxSubMutationVariables = {|
  message: string
|};
export type InputBoxSubMutationResponse = {|
  +sendMessage: ?{|
    +id: string,
    +from: string,
    +message: string,
    +timestamp: number,
  |}
|};
export type InputBoxSubMutation = {|
  variables: InputBoxSubMutationVariables,
  response: InputBoxSubMutationResponse,
|};
*/


/*
mutation InputBoxSubMutation(
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
    "name": "InputBoxSubMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InputBoxSubMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3c643ae3f9c9c7473c52531d3470c76f",
    "id": null,
    "metadata": {},
    "name": "InputBoxSubMutation",
    "operationKind": "mutation",
    "text": "mutation InputBoxSubMutation(\n  $message: String!\n) {\n  sendMessage(from: \"relay-client\", message: $message) {\n    id\n    from\n    message\n    timestamp\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '47bb496afa7ae68958108b2dc968f1f3';

module.exports = node;
