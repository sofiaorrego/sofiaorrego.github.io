export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  url?: string;
  sample?: boolean;
  cover?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
