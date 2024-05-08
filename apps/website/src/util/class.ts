export const classes = (...args: unknown[]) => args.filter((x) => typeof x === 'string').join(' ')
