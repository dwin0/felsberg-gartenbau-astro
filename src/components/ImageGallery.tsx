import OriginalReactImageGallery, {
  type ReactImageGalleryItem,
} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useMemo, useState } from "react";
import type { GetImageResult } from "astro";

const ReactImageGallery =
  ((OriginalReactImageGallery as any)
    .default as typeof OriginalReactImageGallery) ?? OriginalReactImageGallery;

const translatedLabels: { [key: string]: string } = {
  "Previous Slide": "Gehe zu vorherigem Bild",
  "Next Slide": "Gehe zu nächstem Bild",
  "Open Fullscreen": "Öffne Bild im Fullscreen Modus",
  "Thumbnail Navigation": "Thumbnail Navigation",
};

const ImageGallery = ({ images }: { images: Array<GetImageResult> }) => {
  const galleryImages: Array<ReactImageGalleryItem> = useMemo(
    () =>
      images.map((image) => ({
        original: image.src,
        originalAlt: image.attributes.alt,
        thumbnailAlt: image.attributes.alt,
        thumbnail: image.srcSet.values.find(
          (entry) => entry.descriptor === "160w",
        )?.url,
        srcSet: image.srcSet.attribute,
        loading: "lazy",
        thumbnailLoading: "lazy",
        sizes: "100vw",
      })),
    [images],
  );

  const [activeImageAlt, setActiveImageAlt] = useState(
    galleryImages[0].originalAlt ?? "",
  );

  useEffect(() => {
    const labels = Array.from(
      document.querySelectorAll(".image-gallery [aria-label]"),
    );

    labels.forEach((label) => {
      const labelEN = label.getAttribute("aria-label");
      if (labelEN === null) {
        return;
      }

      // Use image alt instead of existing label
      if (labelEN.startsWith("Go to Slide")) {
        label.removeAttribute("aria-label");
        return;
      }

      const translatedLabel = translatedLabels[labelEN];
      if (translatedLabel) {
        label.setAttribute("aria-label", translatedLabel);
      }
    });
  }, []);

  useEffect(() => {
    const gallery = document.querySelector(".image-gallery") as HTMLElement;
    // Use custom aria-polite region
    gallery.removeAttribute("aria-live");
    gallery.setAttribute("aria-label", "Bildgallerie");
  }, []);

  return (
    <>
      <ReactImageGallery
        items={galleryImages}
        showPlayButton={false}
        showBullets={false}
        infinite={false}
        onSlide={(index) => {
          setActiveImageAlt(galleryImages[index].originalAlt ?? "");
        }}
      />
      <p className="visually-hidden" aria-live="polite">
        {activeImageAlt}
      </p>
    </>
  );
};

export default ImageGallery;
