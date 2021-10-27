export default function () {
    _openTrixLinksNewTab()
}

function _openTrixLinksNewTab () {
    const trixLinks = document.querySelectorAll('.trix-content a')
    trixLinks.forEach(link => {
        if (link.host !== window.location.host) {
            link.target = "_blank"
        }
    })
}