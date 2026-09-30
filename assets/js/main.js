'use strict';
document.getElementById('year').textContent = new Date().getFullYear();

// The photo order follows the Airbnb tour. These are local files; no API is needed.
const photos = [
  ['Living room', 'Open-plan living room and kitchen with a generous olive-green sectional.'],
  ['Living room', 'An oversized couch for slow mornings and movie nights.'],
  ['Living room', 'Mid-century furniture, favorite records, and an art TV.'],
  ['Living room', 'A closer look at the art TV, record player, and collected artwork.'],
  ['Entryway', 'A welcoming foyer with a vintage dresser, round mirror, and bench.'],
  ['Kitchen', 'A wood breakfast bar and white stools in the open kitchen.'],
  ['Kitchen', 'Pull up a seat at the kitchen counter.'],
  ['Kitchen', 'The coffee corner, with a Keurig and a sunny window.'],
  ['Kitchen', 'A view through the bright kitchen toward the living room.'],
  ['Kitchen', 'A gas range, matching appliances, and space to cook.'],
  ['Kitchen', 'Vintage wood furniture and favorite pieces in the kitchen.'],
  ['Kitchen', 'A glimpse of the breakfast bar in the entryway mirror.'],
  ['Sunroom', 'The bonus room, with dining space, vintage seating, and a tiki bar.'],
  ['Sunroom', 'Vintage furnishings against the sunroom’s brick wall.'],
  ['Tiki bar', 'The tiki corner. The small fridge is reserved for our personal use.'],
  ['Second bedroom', 'A full-size bed, blue bedding, and retro wall stripes.'],
  ['Second bedroom', 'The colorful front bedroom with windows and a desk.'],
  ['Second bedroom', 'A bright corner bedroom with a full-size bed.'],
  ['Second bedroom', 'The bedroom workstation and colorful painted details.'],
  ['King bedroom', 'The main bedroom, with a king bed, windows, and skylights.'],
  ['King bedroom', 'A vintage dresser and mirror in the main bedroom.'],
  ['King bedroom', 'Green bedding and warm wood furniture in the main bedroom.'],
  ['King bedroom', 'A mid-century chest of drawers and a bright window.'],
  ['Bathroom', 'The full bathroom with a tub and shower combination.'],
  ['Bathroom', 'The bathroom vanity and toilet with bidet attachment.'],
  ['Bathroom', 'The tub and shower with a playful patterned curtain.'],
  ['Office', 'A dedicated office with a desk and space to hang clothes.'],
  ['Office', 'A bright workspace with a chair, desk, and two monitors.'],
  ['Office', 'Dual monitors and a USB-C hub, ready for your laptop.'],
  ['Backyard', 'Our private backyard. Please note that it is not fully fenced.'],
  ['Laundry', 'A full-size washer and dryer for your stay.'],
  ['Entrance', 'Our bright yellow front door. Two steps lead into the home.']
];

const viewer = document.getElementById('photo-viewer');
if (viewer && typeof viewer.showModal === 'function') {
  const image = document.getElementById('viewer-image');
  const caption = document.getElementById('viewer-caption');
  const closeButton = viewer.querySelector('.viewer-close');
  let currentPhoto = 0;
  let opener;
  let touchStart;

  function showPhoto(index) {
    currentPhoto = (index + photos.length) % photos.length;
    const [room, description] = photos[currentPhoto];
    image.alt = description;
    image.src = `assets/images/photo-${String(currentPhoto + 1).padStart(2, '0')}.webp?v=originals-20260930`;
    caption.textContent = `${currentPhoto + 1} / ${photos.length} · ${room} — ${description}`;
  }

  document.querySelectorAll('[data-photo]').forEach(link => {
    link.addEventListener('click', event => {
      // Preserve normal new-tab/window behavior and the no-JavaScript fallback.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      showPhoto(Number(link.dataset.photo));
      viewer.showModal();
      document.body.classList.add('viewer-open');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => viewer.close());
  viewer.querySelector('.viewer-prev').addEventListener('click', () => showPhoto(currentPhoto - 1));
  viewer.querySelector('.viewer-next').addEventListener('click', () => showPhoto(currentPhoto + 1));
  viewer.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    touchStart = undefined;
    opener?.focus({ preventScroll: true });
  });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(currentPhoto + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
  image.addEventListener('touchstart', event => {
    touchStart = event.touches.length === 1
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : undefined;
  }, { passive: true });
  image.addEventListener('touchend', event => {
    if (!touchStart || event.touches.length || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      showPhoto(currentPhoto + (dx < 0 ? 1 : -1));
    }
    touchStart = undefined;
  }, { passive: true });
  image.addEventListener('touchcancel', () => { touchStart = undefined; }, { passive: true });
}
