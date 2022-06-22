export type FunctionMoveNext = () => void;

export type FunctionPreviousNext = () => void;

export interface FormCardInterface {
   moveNext: FunctionMoveNext;
   movePrevious: FunctionPreviousNext;
}
