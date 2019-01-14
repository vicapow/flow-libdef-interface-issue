// @flow

export  interface Projection2 {
  rotation(): [number, number, number];
  rotation([number, number, number]): Projection2;
}
export  interface ConicProjection2 extends Projection2 {
  rotation(): [number, number, number];
  rotation([number, number, number]): ConicProjection2;
}