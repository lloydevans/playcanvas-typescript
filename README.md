

<div align="center">


<img width="140" src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/platform/images/logo/playcanvas-logo-medium.png"/><img width="140" src="https://cdn.worldvectorlogo.com/logos/typescript.svg"/>

# playcanvas-typescript

#### Simple project for writing PlayCanvas scripts with TypeScript.

#### (ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧ 🐛🐛🐛 Bugs shall not pass!

#### 📜📜📜ԅ( ͒ ۝ ͒ ) Tasty docs in your IDE.

</div>

## Setup

`npm i`, then `npm run build` to compile once, or `npm run watch` to watch files.

## Script example

```ts
namespace game {
  /**
   * TODO: Add description.
   */
  export class PcScript extends pc.ScriptType {
    /**
     * Called when script is about to run for the first time.
     */
    public initialize(): void {}

    /**
     * Called for enabled (running state) scripts on each tick.
     *
     * @param dt - The delta time in seconds since the last frame.
     */
    public update(dt: number): void {}
  }

  // Register script copmonent.
  pc.registerScript(PcScript, "pcScript");

  // Register component attributes.
  PcScript.attributes.add("scriptAttribute", {
    type: "boolean",
    default: false,
  });

  // Class type mixins for registered attributes.
  export interface PcScript {
    scriptAttribute: boolean;
  }
}

// Component type mixin.
declare namespace pc {
  interface ScriptComponent {
    pcScript?: game.PcScript;
  }
}

```