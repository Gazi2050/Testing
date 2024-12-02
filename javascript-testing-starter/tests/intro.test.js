import { describe, expect, it } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe('max', () => {
    it('Should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2)
    })
    it('Should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })
    it('Should return the first argument if it is equal', () => {
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it('Should return FizzBuzz if arg is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('Should return Fizz if arg is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
    it('Should return Buzz if arg is divisible 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
    it('Should return arg as string if it is not  divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    })
})