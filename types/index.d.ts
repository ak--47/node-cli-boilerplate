interface Params {
  foo: string;
  bar: number;
  baz: boolean;
}


interface AnyProps {
    [key: string]: any;
}

type Config = Params & AnyProps