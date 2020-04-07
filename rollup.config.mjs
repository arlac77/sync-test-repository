import pkg from "./package.json";

export default {
  input: pkg.module,
  output: {
    format: "cjs",
    file: pkg.main,
    interop: false
  },
  plugins: []
};
