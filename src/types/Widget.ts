export interface WidgetConfig {
  "client-id": string;
  conf: WidgetAttributes;
  "data-api": string;
  height: number;
  width: number;
}
export interface WidgetAttributes {
  imageUrl: string;
}

export interface WidgetData {
  val: unknown;
}
