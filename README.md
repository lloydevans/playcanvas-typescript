

<div align="center">


<img width="140" src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/platform/images/logo/playcanvas-logo-medium.png"/><img width="140" src="https://cdn.worldvectorlogo.com/logos/typescript.svg"/>

# playcanvas-typescript

#### Simple project for writing PlayCanvas editor scripts with TypeScript.

</div>

## Setup

`npm i`, then `npm run build` to compile once, or `npm run watch` to watch files.

## Script example

```ts
// Extend type definitions.
declare namespace pc {
	interface ScriptComponent {
		PcScript?: game.PcScript;
	}
}

namespace game {
	/**
	 * TODO: Add description.
	 */
	export class PcScript extends pc.ScriptType {
		/**
		 *
		 */
		public initialize(): void {}

		/**
		 *
		 * @param dt
		 */
		public update(dt: number): void {}
	}

	// Register class.
	pc.registerScript(PcScript);

	// Register component attributes.
	PcScript.attributes.add("scriptAttribute", {
		type: "boolean",
		default: false,
	});

	// Extend class type with registered attributes.
	export interface PcScript {
		scriptAttribute: boolean;
	}
}
```