import { registerPlugin } from '@capacitor/core';

import type { MapKitPlugin } from './definitions';

const MapKit = registerPlugin<MapKitPlugin>('MapKit', {
  web: () => import('./web').then(m => new m.MapKitWeb()),
});

export * from './definitions';
export { MapKit };
