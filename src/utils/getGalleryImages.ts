import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

type GalleryImage = {
  src: ImageMetadata;
  alt: string;
};

const getGalleryImage = (src: GalleryImage["src"], alt: GalleryImage["alt"]) =>
  getImage({
    src,
    alt,
    widths: [160, 500, 750, 1000, 1300, 1920],
  });

const getGalleryImages = async (images: Array<GalleryImage>) =>
  await Promise.all(
    images.map((image) => getGalleryImage(image.src, image.alt)),
  );

export default getGalleryImages;
