type A = {a: string}
// ts可选如何实现 ?:
type B = Partial<A>; // type myPartial<T> = { [P in keyof T]?: T[P] | undefined; }
// ts必选如何实现 -?:
type C = Required<A>; // type myRequired<T> = { [P in keyof T]-?: T[P]; }
// ts的Record类型是怎么实现的?
type D = Record<'a' | 'b', string>; // type myRecord<K extends string | number | symbol, T> = { [P in K]: T; }
const obj: D = {
    a: '',
    b: '',
};

function a() {
    return 1;
}
// 如何使用TS获取函数的返回类型
type R = ReturnType<typeof a>; // type myReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
function F(): R {
    return 4;
}