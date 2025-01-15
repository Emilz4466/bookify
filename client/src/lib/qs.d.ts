declare module "qs" {
  const stringify: (
    obj: any,
    options?: { arrayFormat?: string; indices?: boolean },
  ) => string;
  const parse: (str: string) => any;

  export { stringify, parse };
  export default { stringify, parse };
}
