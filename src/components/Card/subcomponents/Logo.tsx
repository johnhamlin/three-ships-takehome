import Image from 'next/image';
import React from 'react';
// This URL is registered in the next.config.js file
const LOGO_URL = 'https://d126ytvel6227q.cloudfront.net/logos/';

// The slug is the name of the logo file without the extension
// Pass down any props that the Image component accepts
type LogoProps = { slug: string } & Omit<
  React.ComponentProps<typeof Image>,
  'src' | 'alt' | 'width' | 'height'
>;

const alt = `The company's logo`;
const width = 100;
const height = 100;

export default function Logo({ slug, ...props }: LogoProps) {
  return (
    <Image
      className="mb-4 self-center sm:self-start"
      {...props}
      src={`${LOGO_URL}${slug}.jpg`}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
