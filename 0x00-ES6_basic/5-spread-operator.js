export const concatArrays = (...args) => [].concat(...args.map(item => typeof item === 'string' ? item.split('') : item));
