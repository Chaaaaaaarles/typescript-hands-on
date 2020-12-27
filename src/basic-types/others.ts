/**
 * unknown
 */
let unk: unknown;
const assigned: number = unk; // Error. Type 'unknown' is not assignable to type 'number'.

/**
 * any
 */
let at: any;
const assignedAt: number = at; // Ok.

/**
 * void
 */
function func(): void {}

/**
 * never
 */
function fn(): never {
  throw new Error('')
}
