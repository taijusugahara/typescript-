export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes,string|number>

type MyExclude<T, U> = T extends U ? never : T
type MyFunctionType = MyExclude<SomeTypes,string|number>

