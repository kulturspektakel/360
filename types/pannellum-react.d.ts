declare module "pannellum-react" {
  interface HotspotInfoProps {
    id?: string;
    type: "info";
    pitch?: number;
    yaw?: number;
    text?: string;
    URL?: string;
  }

  interface HotspotCustomProps {
    id?: string;
    type: "custom";
    pitch?: number;
    yaw?: number;
    tooltip?: (args: object) => void;
    tooltipArg?: object;
    handleClick?: (event: MouseEvent, args?: object) => void;
    handleClickArg?: object;
    cssClass?: string;
  }

  interface PannellumCommonProps {
    children?:
      | React.ReactElement<typeof Pannellum.Hotspot>
      | React.ReactElement<typeof Pannellum.Hotspot>[];
    id?: string;
    width?: string;
    height?: string;
    yaw?: number;
    pitch?: number;
    hfov?: number;
    minHfov?: number;
    maxHfov?: number;
    minPitch?: number;
    maxPitch?: number;
    minYaw?: number;
    maxYaw?: number;
    autoRotate?: number;
    mouseZoom?: boolean;
    hotspotDebug?: boolean;
  }

  interface PannellumProps extends PannellumCommonProps {
    image?: string;
    haov?: number;
    vaov?: number;
    vOffset?: number;
    compass?: boolean;
    preview?: string;
    previewTitle?: string;
    previewAuthor?: string;
    title?: string;
    author?: string;
    autoLoad?: boolean;
    orientationOnByDefault?: boolean;
    showZoomCtrl?: boolean;
    keyboardZoom?: boolean;
    draggable?: boolean;
    disableKeyboardCtrl?: boolean;
    showFullscreenCtrl?: boolean;
    showControls?: boolean;
    onLoad?: () => void;
    onScenechange?: (id: string) => void;
    onScenechangefadedone?: () => void;
    onError?: (error: Error) => void;
    onErrorcleared?: () => void;
    onMousedown?: (event: MouseEvent) => void;
    onMouseup?: (event: MouseEvent) => void;
    onTouchstart?: (event: TouchEvent) => void;
    onTouchend?: (event: TouchEvent) => void;
    cssClass?: string;
    onRender?: () => void;
  }

  interface PannellumVideoProps extends PannellumCommonProps {
    video: string;
    loop?: boolean;
    autoplay?: boolean;
    controls?: boolean;
    muted?: boolean;
  }

  interface Viewer {
    isLoaded: () => boolean;
    getPitch: () => number;
    setPitch: (
      pitch: number,
      animated: boolean | number,
      callback?: (args: object) => void,
      callbackArgs?: object
    ) => this;
    getPitchBounds: () => number[];
    setPitchBounds: (bounds: number[]) => this;
    getYaw: () => number;
    setYaw: (
      yaw: number,
      animated: boolean | number,
      callback?: (args: object) => void,
      callbackArgs?: object
    ) => this;
    getYawBounds: () => number[];
    setYawBounds: (bounds: number[]) => this;
    getHfov: () => number;
    setHfov: (
      hfov: number,
      animated: boolean | number,
      callback?: (args: object) => void,
      callbackArgs?: object
    ) => this;
    getHfovBounds: () => number;
    setHfovBounds: (bounds) => this;
    lookAt: (
      pitch: number,
      yaw: number,
      hfov: number,
      animated: boolean | number,
      callback?: (args: object) => void,
      callbackArgs?: object
    ) => this;
    getNorthOffset: () => number;
    setNorthOffset: (heading: number) => this;
    getHorizonRoll: () => number;
    setHorizonRoll: (roll: number) => this;
    getHorizonPitch: () => number;
    setHorizonPitch: (pitch: number) => this;
    startAutoRotate: (speed: number) => this;
    stopAutoRotate: () => this;
    getRenderer: () => any; // TODO;
    setUpdate: (bool: boolean) => this;
    mouseEventToCoords: (event: MouseEvent) => number[];
    loadScene: (
      sceneId: string,
      pitch?: number,
      yaw?: number,
      hfov?: number
    ) => this;
    getScene: () => string;
    addScene: (sceneId: string, config: string) => this;
    removeScene: (sceneId: string) => boolean;
    toggleFullscreen: () => this;
    getConfig: () => object; // TODO
    getContainer: () => object; // TODO
    addHotSpot: (hs: object /*TODO*/, sceneId?: string) => this;
    removeHotSpot: (hotSpotId: string, sceneId?: string) => this;
    resize: () => void;
    isOrientationSupported: () => boolean;
    stopOrientation: () => void;
    startOrientation: () => void;
    isOrientationActive: () => boolean;
    on: (type: string, listener: Function) => this;
    off: (type: string, listener: Functino) => this;
    destroy: () => void;
  }

  declare class Hotspot extends React.Component<
    HotspotInfoProps | HotspotCustomProps
  > {}

  export declare class Pannellum extends React.Component<PannellumProps> {
    static Hotspot: typeof Hotspot;
    panorama: Viewer;
  }

  export declare class PannellumVideo extends React.Component<
    PannellumVideoProps
  > {}
}
