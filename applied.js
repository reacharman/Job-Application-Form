const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || []
const body = document.getElementById('body')

appliedJobs.forEach((job, index) => {
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${job.name}</td>
    <td>${job.email}</td>
    <td>${job.role}</td>
    <td>${job.salary}</td>
    <td><button class="bookmarkBtn" data-index="${index}">Add to Bookmark</button></td>
    `
    body.append(row)
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('bookmarkBtn')) {
        const jobIndex = event.target.getAttribute('data-index')
        const jobsToBookmark = appliedJobs[jobIndex]

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        bookmarks.push(jobsToBookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        alert('Bookmark Added!')
    }
})
