import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueCardProps {
  letter: string;
  word: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface CorePrincipleProps {
  title: string;
  subtitle: string;
  description: string;
  bgImage?: string;
}

export interface BrandProps {
  name: string;
  type: string;
  origin: string;
  logoPlaceholder: string;
}