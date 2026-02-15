export default function blue(text) {
  const colorReset = "\x1b[0m";
  const colorBlue = "\x1b[34m";
  console.log(colorBlue + text + colorReset);
};
