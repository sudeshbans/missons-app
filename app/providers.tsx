'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react'

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    <NextUIProvider >
      {children}
    </NextUIProvider>
  );
}
