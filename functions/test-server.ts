import { execSync } from 'child_process';
import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';

let worker: UnstableDevWorker;
export const startServer = async () => {
	execSync(`NO_D1_WARNING=true wrangler d1 migrations apply DB --local`);
	worker = await unstable_dev('index.ts', { experimental: { disableExperimentalWarning: true } });
};
export const stopServer = async () => {
	await worker?.stop();
};
export const getServerUrl = (): string => 'http://' + worker.address + ':' + worker.port;
