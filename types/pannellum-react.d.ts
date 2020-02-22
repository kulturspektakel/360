declare module "pannellum-react" {
  interface HotspotProps {
    id: string;
    type: "info";
    pitch: number;
    yaw: number;
    text: string;
    URL: string;
  }

  let Pannellum: React.ComponentClass<{
    children?: React.ElementType<HotspotProps>;
    id?: string;
    width?: string;
    height?: string;
    image?: string;
    haov?: number;
    vaov?: number;
    vOffset?: number;
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
    mouseZoom?: boolean;
    draggable?: boolean;
    disableKeyboardCtrl?: boolean;
    showFullscreenCtrl?: boolean;
    showControls?: boolean;
    onLoad?: func;
    onScenechange?: func;
    onScenechangefadedone?: func;
    onError?: func;
    onErrorcleared?: func;
    onMousedown?: func;
    onMouseup?: func;
    onTouchstart?: func;
    onTouchend?: func;
    hotspotDebug?: boolean;
    tooltip?: func;
    tooltipArg?: object;
    handleClick?: func;
    handleClickArg?: object;
    cssClass?: string;
    onRender?: func;
  }> & {
    Hotspot: React.ComponentClass<HotspotProps>;
  };
}
