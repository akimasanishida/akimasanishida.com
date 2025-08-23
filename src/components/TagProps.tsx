import { ReactNode } from 'react';

export default interface TagProps {
  children: ReactNode;
  id?: string;
  className?: string;
  key?: string;
}
