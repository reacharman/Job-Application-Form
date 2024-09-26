const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
const body = document.getElementById('body');

appliedJobs.forEach((job, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${job.name}</td>
    <td>${job.email}</td>
    <td>${job.role}</td>
    <td>${job.salary}</td>
    <td><button class="bookmarkBtn" data-index="${index}">Add to Bookmark</button></td>
    `;
    body.append(row);
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('bookmarkBtn')) {
        const jobIndex = event.target.getAttribute('data-index');
        const jobToBookmark = appliedJobs[jobIndex];

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

        bookmarks.push(jobToBookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        alert('Job added to bookmarks!');
    }
});