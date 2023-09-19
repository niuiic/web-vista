export const classes = (...args: any[]) => args.filter((x) => typeof x === 'string').join(' ')
