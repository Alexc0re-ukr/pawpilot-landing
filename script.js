const offerLink = document.querySelector('#offerLink');
if (offerLink) {
  const token = new URLSearchParams(window.location.search).get('_token') || '';
  offerLink.href = `https://clickdist.dev30.leaddist.team/QUBuhDAi?lp=1&token=${encodeURIComponent(token)}`;
}

document.querySelector('#petForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  document.querySelector('#status').textContent = `${data.get('kind')} saved for ${data.get('pet')}.`;
  event.currentTarget.reset();
});
