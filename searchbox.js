const searchBox = document.getElementById('search-box');
const searchIcon = document.querySelector('.fa-search');

searchBox.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    const searchText = searchBox.value;
    if (searchText.includes('Copywriting services')) {
      window.location.href = 'services.html';
    } else if (searchText.includes('Social Media Services')) {
      window.location.href = 'services2.html';
    } else if (searchText.includes('English Writing Services')) {
      window.location.href = 'services3.html';
    } else if (searchText.includes('Translation Services')) {
      window.location.href = 'services4.html';
    }
  }
});

searchIcon.addEventListener('click', function() {
  const searchText = searchBox.value;
  if (searchText.includes('Copywriting services')) {
    window.location.href = 'services.html';
  } else if (searchText.includes('Social Media Services')) {
    window.location.href = 'services2.html';
  } else if (searchText.includes('English Writing Services')) {
    window.location.href = 'services3.html';
  } else if (searchText.includes('Translation Services')) {
    window.location.href = 'services4.html';
  }
});







