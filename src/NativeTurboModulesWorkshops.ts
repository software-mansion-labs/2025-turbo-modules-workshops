import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type {
  Double,
  EventEmitter,
} from 'react-native/Libraries/Types/CodegenTypes';

export type CustomObject = {
  index: number;
  data: string;
};

export enum Orientation {
  LANDSCAPE = 'LANDSCAPE',
  PORTRAIT = 'PORTRAIT',
  UNKNOWN = 'UNKNOWN',
}

export interface Spec extends TurboModule {
  multiply(a: Double, b: Double): Double;
  passString(str: string): string;
  passArray(arr: Array<number>): Array<number>;
  passObject(obj: CustomObject): CustomObject;
  passFunction(cb: (value: number) => void): void;
  getPromise(data: string): Promise<string>;

  getScreenOrientation(): Orientation;
  readonly onScreenOrientationChange: EventEmitter<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('TurboModulesWorkshops');
