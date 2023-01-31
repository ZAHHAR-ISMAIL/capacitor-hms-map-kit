import { WebPlugin } from '@capacitor/core';

import type { MapKitPlugin } from './definitions';

export class MapKitWeb extends WebPlugin implements MapKitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
