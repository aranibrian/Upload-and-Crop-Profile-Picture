// script.js
document.addEventListener("DOMContentLoaded", function () {
    let imageElement = document.getElementById('image');
    let inputElement = document.getElementById('imageInput');
    let cropBtn = document.getElementById('cropBtn');
    let previewElement = document.getElementById('preview');
    let cropper;

    inputElement.addEventListener('change', function (e) {
        let files = e.target.files;

        if (files && files.length > 0) {
            let file = files[0];

            if (URL) {
                imageElement.src = URL.createObjectURL(file);
            } else {
                imageElement.src = file;
            }

            imageElement.style.display = 'block';

            if (cropper) {
                cropper.destroy();
            }

            cropper = new Cropper(imageElement, {
                aspectRatio: 1
            });
        }
    });

    cropBtn.addEventListener('click', function () {
        let croppedCanvas = cropper.getCroppedCanvas();
        let croppedImage = croppedCanvas.toDataURL('image/png');
        previewElement.src = croppedImage;
    });
});
