import TurboModulesWorkshops, {
  Orientation,
  type CustomObject,
} from './NativeTurboModulesWorkshops';
export { useScreenOrientation } from './useScreenOrientation';

export function multiply(a: number, b: number) {
  return TurboModulesWorkshops.multiply(a, b);
}

export function passString(str: string) {
  return TurboModulesWorkshops.passString(str);
}

export function passArray(arr: Array<number>) {
  return TurboModulesWorkshops.passArray(arr);
}

export function passObject(obj: CustomObject): CustomObject {
  return TurboModulesWorkshops.passObject(obj);
}

export function passFunction(cb: (value: number) => void) {
  TurboModulesWorkshops.passFunction(cb);
}

export function getPromise(data: string) {
  return TurboModulesWorkshops.getPromise(data);
}

export function getScreenOrientation(): Orientation {
  return TurboModulesWorkshops.getScreenOrientation();
}

export function onScreenOrientationChange(
  callback: (orientation: Orientation) => void
) {
  return TurboModulesWorkshops.onScreenOrientationChange(
    callback as (data: any) => void
  );
}

export type { Orientation, CustomObject };
