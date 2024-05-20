"use client";
import { useEffect } from 'react';

const HeadManager = () => {
  useEffect(() => {
    const link = document.querySelector('link[rel="preload"][as="style"]');
    if (link) {
      link.addEventListener('load', () => {
        link.setAttribute('rel', 'stylesheet');
      });
    }
  }, []);

  return (
    <>
      <link
        rel="preload"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
        as="style"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
        />
      </noscript>
    </>
  );
};

export default HeadManager;
