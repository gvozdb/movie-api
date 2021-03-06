/* @flow */

import R from 'ramda';
import type from 'type-detect'; // eslint-disable-line import/no-extraneous-dependencies

const childTypesForArray = R.memoize(R.pipe(R.map(type), R.uniq));

const modelFromObject = (obj: any) =>
  R.map(
    R.cond([
      [
        R.allPass([
          R.pipe(type, R.equals('Array')),
          R.pipe(childTypesForArray, R.head, R.equals('Object')),
        ]),
        (val: Array<any>) => [R.pipe(R.head, modelFromObject)(val)],
      ],
      [
        R.allPass([
          R.pipe(type, R.equals('Array')),
          R.pipe(childTypesForArray, R.length, R.equals(1)),
        ]),
        (val: Array<any>) =>
          // $FlowFixMe
          `Array<${R.pipe(childTypesForArray, R.head)(val)}>`,
      ],
      // $FlowFixMe
      [R.pipe(type, R.contains(R.__, ['Object', 'Array'])), modelFromObject],
      [R.T, type],
    ]),
    obj,
  );

export {modelFromObject};
