export interface MapKitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
