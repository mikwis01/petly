import { nameRegex, weightRegex } from './inputRegex'
import { describe, expect, it } from 'vitest'

describe('Name input', () => {
	it('First letter is upper case and the rest of the letters are lowercase', () => {
		expect(nameRegex('Aaafff')).toBe(true)
	})

	it("Doesn't accept special characters", () => {
		expect(nameRegex('-!@ ')).toBe(false)
	})

	it('Length between 1 and 10', () => {
		expect(nameRegex('')).toBe(false)
	})
})

describe('Weight input', () => {
	it('Accepts float numbers', () => {
		expect(weightRegex('9.4')).toBe(true)
	})

	it('Accepts integer numbers', () => {
		expect(weightRegex('5')).toBe(true)
	})

	it("Doesn't accept special characters", () => {
		expect(weightRegex('-+!@ ')).toBe(false)
	})
})
