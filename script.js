function showAgeGroup(ageGroupId) {
  // Hide all age groups
  const ageGroups = document.querySelectorAll('.age-group');
  ageGroups.forEach(group => {
    group.style.display = 'none';
  });

  // Show the selected age group
  const selectedAgeGroup = document.getElementById(ageGroupId);
  if (selectedAgeGroup) {
    selectedAgeGroup.style.display = 'block';
  }

  // Optional: Update active state of buttons (for styling)
  const ageButtons = document.querySelectorAll('.age-buttons button');
  ageButtons.forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(ageGroupId).classList.add('active');

  // Scroll to the top of the content area (optional)
  document.querySelector('.content').scrollTo(0, 0);
}

// Show the 'home' section by default (or the first age group, or whatever you prefer)
showAgeGroup('home');
