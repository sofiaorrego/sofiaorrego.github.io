export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectGalleryImage extends ProjectImage {
  caption: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  url?: string;
  sample?: boolean;
  cover?: ProjectImage;
  gallery?: readonly ProjectGalleryImage[];
}
