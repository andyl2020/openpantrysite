const assetBase = process.env.PUBLIC_URL || "";

const imagePath = (fileName) => `${assetBase}/images/${fileName}`;

export const siteImages = {
  logo: imagePath("logo.jpg"),
  heroWorkshop: imagePath("workshop-group-photo-with-patrice.jpg"),
  aboutPortrait: imagePath("hero-image-patrice.jpg"),
  galleryWorkshop: imagePath("workshop-photo.jpg"),
  galleryDecoratedCakes: imagePath("workshop-participants-decorated-cakes.jpg"),
  galleryHandsOn: imagePath("workshop-hands-on-session.jpg"),
  galleryCouples: imagePath("couples-photo.jpg"),
  galleryCreativeMoment01: imagePath("gallery-creative-moment-01.jpg"),
  galleryCreativeMoment02: imagePath("gallery-creative-moment-02.jpg"),
  galleryCreativeMoment03: imagePath("gallery-creative-moment-03.jpg"),
};
