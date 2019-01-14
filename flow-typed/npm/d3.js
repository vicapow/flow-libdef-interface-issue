// @flow

declare module 'd3' {
  declare export  interface Projection {
    rotation(): [number, number, number];
    rotation([number, number, number]): Projection;
  }
  declare export  interface ConicProjection extends Projection {
    rotation(): [number, number, number];
    rotation([number, number, number]): ConicProjection;
  }
}