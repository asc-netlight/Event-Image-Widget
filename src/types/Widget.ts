export interface WidgetConfig {
  clientId: string;
  conf: WidgetAttributes;
  dataApi: string;
  height: number;
  width: number;
}
export interface WidgetAttributes {
  imageUrl: string;
}

export interface WidgetData {
  val: unknown;
}
