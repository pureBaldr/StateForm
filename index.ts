import { deepSet, deepGet } from "./deep";
/* 
  TODO:
  form array type always is: ['string: field key', {form data state}, formDataSetState()] 
*/
export const fieldKey = (form: any[]) => form[0];

export const formSet = (form: any[], value: string | number | boolean) => {
  /* deep mode */
  const out = Object.assign({}, form[1]);
  deepSet(out, form[0], value);
  form[2](out);
  /* flat mode */
  /* form[2]({ ...form[1], ...{ [form[0]]: e.target.value } }); */
};

export const formGet = (form: any[]) => {
  return deepGet(form[1], form[0]);
};

export const sanitData = (pattern: any, data: any) => {
  /*  todo: walks through all the keys of a given object. */
  /* https://www.30secondsofcode.org/js/s/walk-through */
  const w: any = (x: any, prev = []) => {
    for (let k of Object.keys(x)) {
      if (typeof x[k] === "object") w(x[k], [...prev, k]);
      else
        deepSet(
          pattern,
          [...prev, k].join("."),
          deepGet(data, [...prev, k].join("."))
        );
    }
  };
  w(pattern);
};

/* 
  check is number
*/
// const isNumeric = (num: any) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num as number);
