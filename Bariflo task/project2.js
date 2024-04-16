fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const userContainer = document.getElementById('user-container');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.username}</p>
        <p>${user.email}</p>
        <p>${user.address.geo.lat}, ${user.address.geo.lng}</p>
        <p>${user.phone}</p>
        <p>${user.company.name}</p>
      `;
      userCard.addEventListener('click', () => {
        // Fetch user's posts and albums here
      });
      userContainer.appendChild(userCard);
    });
  });