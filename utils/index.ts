import { DependencyList, EffectCallback, useRef, useEffect } from 'react';

export const useEffectAfterFirstRender = (cb: EffectCallback, dependencies: DependencyList ) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return cb();
  }, dependencies);
};

