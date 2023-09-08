import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import { Routing } from '@/components/Routing';
import { useAppDispatch } from '@/store/hooks';
import { getUser } from '@/store/slices/userSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return <Routing />;
}

export { App };
