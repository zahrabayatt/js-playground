// Equality Comparisons:
// Comparison operators are used in logical statements to determine equality or difference between variables or values. Comparison operators can be used in conditional statements to compare values and take action depending on the result.

// 1- Value Comparison Operator:
// In javascript, the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values and the data types of the operands. The Object.is() method determines whether two values are the same value: Object.is(value1, value2).
// Object.is() is not equivalent to the == operator. The == operator applies various coercions to both sides (if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is() doesn’t coerce either value.
// Object.is() is also not equivalent to the === operator. The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal but treats NaN as not equal to each other.

// Visit the following resources to learn more:
// https://www.scaler.com/topics/javascript/difference-between-double-equals-and-triple-equals-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is

// 2- Equality Algorithms:
// Equality algorithms are used to perform equality comparisons of values or variables in JavaScript. Each equality algorithm works slightly differently, and the one you use depends on the type of comparison you want to make.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// - isLooselyEqual
// isLooselyEqual checks whether its two operands are equal, returning a Boolean result. It attempts to convert and compare operands that are of different types.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
// https://javascript.info/comparison

// - isStrictlyEqual
// isStrictlyEqual checks whether its two operands are equal, returning a Boolean result. It always considers operands of different types to be different.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// https://javascript.info/comparison

// - Same value zero
// SameValueZero equality determines whether two values are functionally identical in all contexts with +0 and -0 are also considered equal.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality

// - Same value
// SameValue equality determines whether two values are functionally identical in all contexts.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is
