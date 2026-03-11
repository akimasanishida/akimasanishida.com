import { ReactNode } from 'react'
import { LinkProps } from '@/types/link'

export interface SoftProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: ReactNode;
  links: LinkProps[];
}
