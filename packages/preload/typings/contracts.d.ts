/* eslint-disable @typescript-eslint/consistent-type-imports */

interface Exposed {
	readonly nodeCrypto: Readonly<typeof import('../src/node-crypto').nodeCrypto>;
	readonly versions: Readonly<typeof import('../src/versions').versions>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window extends Exposed {}
