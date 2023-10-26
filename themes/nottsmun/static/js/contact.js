function submitContactForm(event) {
    var subject = document.getElementById("subject").value
    var content = document.getElementById("body").value

    event.preventDefault()

    window.setTimeout(() => {
        var url = new URL("mailto:model-united-nations@uonsu.com")
        url.searchParams.set("subject", subject)
        url.searchParams.set("body", content)
        window.location.href = url.href.replaceAll("+", "%20")
    }, 50)
}