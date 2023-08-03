function checkOrientation() {
    const orientation = window.screen.orientation.type;
    document.getElementById('output').textContent = orientation;
}

document.querySelector('button').addEventListener('click', checkOrientation);