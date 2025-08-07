import { describe, it, expect } from 'vitest';
import { Counter } from './Counter';

describe('Counter Component', () => {
    it('should increment the count', () => {
        const counter = new Counter();
        counter.increment();
        expect(counter.getCount()).toBe(1);
    });

    it('should decrement the count', () => {
        const counter = new Counter();
        counter.increment();
        counter.decrement();
        expect(counter.getCount()).toBe(0);
    });

    it('should reset the count', () => {
        const counter = new Counter();
        counter.increment();
        counter.reset();
        expect(counter.getCount()).toBe(0);
    });
});