import {join} from '@string-plumbing/join';

/**
 * Concatenate an Iterable of strings.
 *
 * @param {Iterable<string>} strings
 * @return string
 */
const concat = (strings) => join(strings, '');
export default concat;
