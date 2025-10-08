// Select all attendance status cells (3rd column in table body)
const statusCells = document.querySelectorAll('tbody tr td:nth-child(3)');

statusCells.forEach(cell => {
  cell.style.cursor = 'pointer'; // Show pointer cursor on hover

  cell.addEventListener('click', () => {
    if (cell.textContent === 'Present') {
      cell.textContent = 'Absent';
      cell.style.color = 'red';
      cell.style.fontWeight = '700';
    } else {
      cell.textContent = 'Present';
      cell.style.color = 'green';
      cell.style.fontWeight = '700';
    }
  });

  // Initialize colors based on current status
  if (cell.textContent === 'Present') {
    cell.style.color = 'green';
    cell.style.fontWeight = '700';
  } else {
    cell.style.color = 'red';
    cell.style.fontWeight = '700';
  }
});
