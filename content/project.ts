export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectGalleryImage extends ProjectImage {
  caption: string;
}

export interface ProjectDetails {
  year?: number;
  location: string;
  builtArea?: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  details?: ProjectDetails;
  url?: string;
  sample?: boolean;
  cover?: ProjectImage;
  gallery?: readonly ProjectGalleryImage[];
}
