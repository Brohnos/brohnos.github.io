// You can replace the sample data with actual data you get from a reliable source.
const isGerryHutchAlive = true;
const gerryHutchStatusText = document.getElementById('statusText');

if (isGerryHutchAlive) {
    gerryHutchStatusText.textContent = 'Gerry "The Monk" Hutch is currently alive.';
    gerryHutchStatusText.style.color = 'green';
} else {
    gerryHutchStatusText.textContent = 'Gerry "The Monk" Hutch is no longer alive.';
    gerryHutchStatusText.style.color = 'red';
}
