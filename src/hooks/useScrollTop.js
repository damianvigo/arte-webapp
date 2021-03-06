import { useEffect, useState } from 'react';

const d = document,
  w = window;

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState('');

  useEffect(() => {
    w.addEventListener('scroll', (e) => {
      let scrollTop = w.pageYOffset || d.documentElementScrollTop;

      if (scrollTop > 300) {
        setScrollTop(null);
      } else {
        setScrollTop('hidden');
      }
    });
  }, [scrollTop, setScrollTop]);

  const toTop = (e) => {
    if (e.target.matches('#btn-scroll') || e.target.matches('#btn-scroll *')) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  };

  return { toTop, scrollTop, setScrollTop };
};

export default useScrollTop;
