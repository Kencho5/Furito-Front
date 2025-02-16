import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompressImageService {
  constructor() {}

  compressImage(
    file: File,
    quality: number,
    maxWidth: number = 1200,
    maxHeight: number = 1200,
  ): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }
        let width = img.naturalWidth;
        let height = img.naturalHeight;
        if (width > maxWidth || height > maxHeight) {
          const scaleRatio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * scaleRatio);
          height = Math.round(height * scaleRatio);
        }
        canvas.width = width;
        canvas.height = height;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Image compression failed: blob is null'));
            }
          },
          'image/jpeg',
          quality,
        );
      };

      img.onerror = (error) => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Image loading failed: ' + error));
      };

      img.src = objectUrl;
    });
  }
}
