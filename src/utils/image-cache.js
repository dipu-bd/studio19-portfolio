import axios from "axios";
import heros from "@/assets/heros";
import portfolios from "@/assets/portfolio";

const imageCache = {};

async function downloadImage(url, retry = 0) {
  if (imageCache[url]) return;
  while (retry >= 0) {
    try {
      const response = await axios.get(url, {
        responseType: "arraybuffer",
      });
      const base64 = Buffer.from(response.data, "binary").toString("base64");
      imageCache[url] = "data:image/jpeg;base64, " + base64;
      break;
    } catch (err) {
      retry--;
    }
  }
}

export async function downloadAssets(onProgress, isCancelled) {
  let totalImages = 0;
  const indexedImages = {};
  for (let i = 0; i < heros.length; ++i) {
    totalImages++;
    indexedImages[i] = indexedImages[i] || [];
    indexedImages[i].push({
      url: heros[i].image,
      updater: data => (heros[i].image = data),
    });
  }
  for (const portfolio of portfolios) {
    for (const project of portfolio.projects) {
      for (let i = 0; i < project.images.length; ++i) {
        totalImages++;
        indexedImages[i] = indexedImages[i] || [];
        indexedImages[i].push({
          url: project.images[i],
          updater: data => (project.images[i] = data),
        });
      }
    }
  }
  if (isCancelled && isCancelled()) return;

  let finish = 0;
  const batchSize = 10;
  // console.log(Object.keys(indexedImages));
  for (const images of Object.values(indexedImages)) {
    // console.log(images);
    for (let i = 0; i < images.length; i += batchSize) {
      if (isCancelled && isCancelled()) return;
      await Promise.all(
        images.slice(i, i + batchSize).map(async ({ url, updater }) => {
          if (isCancelled && isCancelled()) return;
          await downloadImage(url, 2);
          updater(imageCache[url]);
          finish++;
          onProgress((100 * (i + finish)) / totalImages);
        })
      );
    }
  }
}
