declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.svg' {
  export = content;
}
declare module '*.png' {
  export = content;
}
