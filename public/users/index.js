const $ = (selector) => {
  return document.querySelector(selector)
}

// load users from /api/users and puts 10 in the table of index.html
fetch('/api/user')
  .then(response => {
    return response.json()
  }).then(data => {
    console.table(data)
    const table = $('.js-users')
    for (let index = 0; index < 10; index++) {
      const user = data[index];

      const row = document.createElement('tr')
      
      const nameCell = document.createElement('td')
      nameCell.innerHTML = user.name
      const emailCell = document.createElement('td')
      emailCell.innerHTML = user.email

      row.appendChild(nameCell)
      row.appendChild(emailCell)
      table.appendChild(row)
    }
  })