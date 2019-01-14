
# Demostrates a bug in flows libdef mechanism related to interfaces

We would expect `flow-typed/npm/d3.js` to not error if the respective example without `declare` works as expected (see `projection.js`).

````
$ /node_modules/.bin/flow
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ flow-typed/npm/d3.js:9:17

Property rotation is missing in tuple type [1] but exists in Projection [2] in the return value.

 [2]  6│     rotation([number, number, number]): Projection;
      7│   }
      8│   declare export  interface ConicProjection extends Projection {
 [1]  9│     rotation(): [number, number, number];
     10│     rotation([number, number, number]): ConicProjection;
     11│   }
     12│ }

Found 1 error
error Command failed with exit code 2.
````

There is also another bug where the libdef is not type checked if there is no source. You can verify this by running removing the index.js file and running `yarn flow stop && yarn flow` (index.js)

