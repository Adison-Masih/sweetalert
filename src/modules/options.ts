import {
  SwalParams,
} from '../core';

export interface SwalOptions {
  title: string,
  text: string,
  type: string,
  buttons: object,
};

const defaultOpts: SwalOptions = {
  title: "Oops!",
  text: "",
  type: null,
  buttons: {
    cancel: false,
    confirm: true,
  },
};

/*
 * No matter if the user calls swal with
 * - swal("Oops!", "An error occured!", "error") or
 * - swal({ title: "Oops!", text: "An error occured!", type: "error" })
 * ... we always want to transform the params into the second version
 */
export const getOpts = (...args: SwalParams): SwalOptions => {
  const firstParam = args[0];
  const isString = (typeof firstParam === "string");

  let opts = <any>{};

  if (isString) {
    opts.title = firstParam;
    opts.text  = args[1];
    opts.type  = args[2];
  } else {
    opts = firstParam;
  }

  return Object.assign({}, defaultOpts, opts);
};
