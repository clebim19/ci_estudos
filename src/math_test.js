import { test } from "node:test"
import assert from "node:assert"
import { soma } from "./math.js";

test('spies on a function', () => {
    const sum = soma(15, 15)

    assert.equal(sum, 30)
});