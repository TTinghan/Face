type A = {a: string}
type B = Partial<A>; // type myPartial<T> = { [P in keyof T]?: T[P] | undefined; }
type C = Required<A>; // type myRequired<T> = { [P in keyof T]-?: T[P]; }
type D = Record<'a' | 'b', string>; // type myRecord<K extends string | number | symbol, T> = { [P in K]: T; }
const obj: D = {
    a: '',
    b: '',
};

function a() {
    return 1;
}
type R = ReturnType<typeof a>; // type myReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
function F(): R {
    return 4;
}