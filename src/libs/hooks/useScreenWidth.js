import { useEffect, useState } from 'react';

const useScreenWidth = (width) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth <= width);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return matches;
};

export default useScreenWidth;
