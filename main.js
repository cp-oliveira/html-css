

setFilters = () => {
    let filters = document.querySelectorAll('[data-filter]');
    filters.forEach( filter => {
        filter.addEventListener('click', () => { 
            filterClasses(filter)      
            filters.forEach( filter => {
                if (filter.classList.contains('filter_active')) {
                    filter.classList.remove('filter_active');
                }
            })
            filter.classList.add('filter_active')
        })
    })
}

filterClasses = (filterElement) => {
    let filterTag = filterElement.dataset.filter;
    let classes = document.querySelectorAll('.class_thumbnail');
     
    classes.forEach(classCard => {
        if (filterTag !== 'All') {
            if (classCard.dataset.tag !== filterTag) {
                classCard.style.display = 'none';
            } else {
                classCard.style.display = 'flex';
            }
         } else {
            classCard.style.display = 'flex';
        }
    });
}

setFilters()