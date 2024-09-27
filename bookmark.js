const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
const body = document.getElementById('body')

bookmarks.forEach((job) => {
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${job.name}</td>
    <td>${job.email}</td>
    <td>${job.role}</td>
    `
    body.append(row)
})
