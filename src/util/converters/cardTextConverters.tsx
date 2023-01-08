import { Symbol } from '../../components/Symbol';
import { v4 as uuid } from 'uuid';

export const convertSymbols = (text: string) => {
  const symbolRegex = new RegExp(/({(?:\w+|½|∞)(?:\/\w)*})/);
  return text
    .split(symbolRegex)
    .map((textSlice) =>
      symbolRegex.test(textSlice) ? (
        <Symbol key={uuid()} symbolString={textSlice} />
      ) : (
        textSlice
      ),
    );
};
