export interface FeatureCard {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  canvasId: string;
}

export interface FloatLabel {
  text: string;
  type: 'accent' | 'surface' | 'red';
  style: React.CSSProperties;
}

export interface WsLayer {
  index: number;
  number: string;
  labels: string[];
  canvasId: string;
}

export interface WsContent {
  tag: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CanvasContext {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
}
