// Extend type definitions.
declare namespace pc {
  interface ScriptComponent {
    pcScript?: game.PcScript;
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
  pc.registerScript(PcScript, "pcScript");

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
