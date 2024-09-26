const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const role = document.getElementById('role').value
    const salary = document.getElementById('salary').value

    let appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || []
    appliedJobs.push({ name, email, role, salary })

    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs))

    alert('Application submitted successfully!')

    form.reset()
})