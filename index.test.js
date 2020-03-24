/* globals test, expect */
const index = require('.')

const av = 98840762
const bv = 'BV1Z741117bf'

test('AVtoBV', () => expect(index.AVtoBV(av)).toBe(bv))

test('BVtoAV', () => expect(index.BVtoAV(bv)).toBe(av))
