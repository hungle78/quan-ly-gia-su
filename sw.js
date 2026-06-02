self.addEventListener('install', (e) => {
  console.log('[Service Worker] Đã cài đặt thành công');
});

self.addEventListener('fetch', (e) => {
  // Cho phép app tải dữ liệu bình thường qua mạng
});
