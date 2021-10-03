let rangeInput = document.querySelector('#font-range');
let defaultFontSizeContainer = document.querySelector('.default-font-size')

let defaultValue = 12;
rangeInput.value = defaultValue;
defaultFontSizeContainer.innerHTML = defaultValue

rangeInput.addEventListener('change', function () {
    defaultFontSizeContainer.innerHTML = this.value;
    rangeInput.value = this.value;
    document.querySelector('.example-container').style.fontSize = this.value + 'px'
})