const search = document.querySelector('#search');
const galleryBox = document.querySelectorAll('a[data-title]');

const handleSearch = event => {
    const search = event.target.value.toLowerCase();    

     galleryBox.forEach(galleryBox => {
        const getTitle = galleryBox.getAttribute('data-title');
        const titleSearch = getTitle.toLowerCase();
        const boxSearch = galleryBox.parentElement;

        if (titleSearch.indexOf(search) > -1) {
            boxSearch.style.display = "block";
        } else {
            boxSearch.style.display = "none";
        }    

    });         
};
search.addEventListener('keyup', handleSearch);