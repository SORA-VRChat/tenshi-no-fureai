document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('imageDialog');
  const dialogImg = document.getElementById('dialogImg');
  const galleryImages = document.querySelectorAll('.gallery img');

  if (dialog && dialogImg) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        dialogImg.src = img.src;
        dialog.showModal();
      });
    });

    // 背景クリックで閉じる
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }
});