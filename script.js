document.getElementById('colorPicker').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('hexValue').textContent = color;
});
