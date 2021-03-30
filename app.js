const portfolioItems = document.querySelectorAll('.portfolioItem');
const portfolioImgBackground = document.querySelector('.portfolioImgBackground');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        // console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.add('imgDarken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        // console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.remove('imgDarken');
    })
})
