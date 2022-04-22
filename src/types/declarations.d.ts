declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const contents: string;
  export = contents;
}

declare module '*.html' {
  const contents: string;
  export = contents;
}
