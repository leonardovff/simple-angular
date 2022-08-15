# Toy Blocks

## Installation

1. `git clone repo`
2. `cd toy-blocks-client-angular`
3. `yarn install`
4. `yarn start`



## Instructions

The current application is displaying a list of nodes. Don’t worry about what Nodes or Blocks are, just know that a Node has many Blocks. Each node represents a server. Each server implements the same API but returns different data. The important endpoints you will need to know for each server are:
/api/v1/status
/api/v1/blocks

Each node has many blocks and the blocks for each node are returned from the blocks endpoint.

Currently the application is getting the status for each node and updating the state. We would like you to retrieve the blocks from the endpoint, place them in the state and render them into a list that matches the design.
