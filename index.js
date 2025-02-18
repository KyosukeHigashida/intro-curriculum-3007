'use strict';

/**
 * 17の倍数であればtrueを返す
 * @param {number} num
 * @returns {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num%17 === 0;
}

module.exports = {
    isMultipleOfSeventeen,
}
