export const camelize = (str: string): string =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
