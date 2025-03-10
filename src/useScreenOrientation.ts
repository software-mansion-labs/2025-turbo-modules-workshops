import { useEffect, useState } from 'react';
import {
  getScreenOrientation,
  onScreenOrientationChange,
  type Orientation,
} from 'react-native-turbo-modules-workshops';

export function useScreenOrientation() {
  const [orientation, setOrientation] = useState<Orientation>(
    getScreenOrientation()
  );

  useEffect(() => {
    const subscription = onScreenOrientationChange((data) => {
      setOrientation(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
}
