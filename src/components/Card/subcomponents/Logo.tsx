import Image from 'next/image';
import React from 'react';
// This URL is registered in the next.config.js file
const LOGO_URL = 'https://d126ytvel6227q.cloudfront.net/logos/';

// The slug is the name of the logo file without the extension
// Pass down any props that the Image component accepts
type LogoProps = Omit<React.ComponentProps<typeof Image>, 'src'> & {
  slug: string;
};

export default function Logo({ slug, alt, ...props }: LogoProps) {
  console.log(props);

  return <Image {...props} src={`${LOGO_URL}${slug}.jpg`} alt={alt} />;
}
