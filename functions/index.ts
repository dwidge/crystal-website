import { AutoRouter } from 'itty-router';

const router = AutoRouter();

router
	.get('/', () => ({
		a: 7,
	}))
	.all('/a/*', AutoRouter({ base: '/a' }).get('/b', () => 'kk').fetch);

export default router;
