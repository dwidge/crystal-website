import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { startServer, stopServer, getServerUrl } from './test-server';

describe('Worker', () => {
	beforeAll(startServer);

	afterAll(stopServer);

	it('should return Hello worker!', async () => {
		const resp = await fetch(getServerUrl());
		const text = await resp.json();

		expect(text).toStrictEqual({ a: 7 });
		expect(text).toMatchInlineSnapshot(`
			{
			  "a": 7,
			}
		`);
	});
});
