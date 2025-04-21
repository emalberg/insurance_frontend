import {
  getBackgroundValue,
  BackgroundStyle,
} from '@/app/utils/getBackgroundStyle';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  backgroundStyle?: BackgroundStyle;
  children: React.ReactNode;
};

export default function TopBanner({ backgroundStyle, children }: Props) {
  return (
    <>
      {/* Skip link placed before everything else */}
      <Button
        className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:py-2 focus:px-4 focus-visible:ring-amber-600'
        asChild>
        <Link href='#main-content'>Skip to main content</Link>
      </Button>
      <div
        className='dynamic-background w-full h-12 hidden md:flex justify-end items-center'
        style={
          {
            '--bg-style': getBackgroundValue(backgroundStyle),
          } as React.CSSProperties
        }>
        <p className='px-4'>{children}</p>
      </div>
    </>
  );
}
