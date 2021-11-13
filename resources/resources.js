const resources = [
    {
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        tags: [],
        title: 'A Complete Guide to Flexbox'
    },
    {
        url: 'https://css-tricks.com/snippets/css/media-queries-for-standard-devices/',
        tags: [],
        title: 'Media Queries for Standard Devices'
    },
    {
        url: 'https://css-tricks.com/complete-guide-table-element/',
        tags: [],
        title: 'A Complete Guide to the Table Element'
    },
    {
        url: 'https://css-tricks.com/a-complete-guide-to-data-attributes/',
        tags: [],
        title: 'A Complete Guide to Data Attributes'
    },
    {
        url: 'https://codepen.io/carolineartz/pen/ogVXZj',
        tags: [],
        title: 'Box Model Generator'
    },
    {
        url: 'https://css-tricks.com/complete-guide-to-css-functions/',
        tags: [],
        title: 'A Complete Guide to CSS Functions'
    },
    {
        url: ' https://sass-lang.com/',
        tags: [],
        title: 'SASS Documentation'
    },
    {
        url: 'https://en.bem.info/',
        tags: [],
        title: 'Documentação de BEM - Metodologia'
    },
    {
        url: 'https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/',
        tags: [],
        title: 'Atomic Approach - CSS Best Practices'
    }, ,
    {
        title: 'CSS animations - step by step',
        tags: ['css', 'learning'],
        link: 'https://www.notion.so/CSS-animations-step-by-step-fae467504b704565b1ed0bb0b85d95f0'
    },
    {
        title: 'CSS - Easings',
        tags: ['animation', 'css'],
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function'
    },
    {
        title: 'A complete guide to calc()',
        tags: ['css', 'functions'],
        url: 'https://css-tricks.com/a-complete-guide-to-calc-in-css/'
    },
    {
        title: 'A complete guide to Buttons',
        tags: ['css', 'semantics'],
        url: 'https://css-tricks.com/a-complete-guide-to-links-and-buttons/'
    },
    {
        title: 'A complete guide to Custom Properties',
        tags: ['css', 'functions'],
        url: 'https://css-tricks.com/a-complete-guide-to-custom-properties/'
    },
    {
        title: 'Skeleton',
        tags: ['css', 'functions', 'html'],
        url: 'https://www.joshwcomeau.com/snippets/html/html-skeleton/'
    },
    {
        title: 'Mainttainable CSS',
        tags: ['css', 'theory'],
        url: 'https://maintainablecss.com/chapters/javascript/'
    },
    {
        title: 'Magic of CSS',
        tags: ['css', 'learning', 'theory'],
        url: 'https://adamschwartz.co/magic-of-css/'
    },
    {
        title: 'Airbnb Styleguide',
        tags: ['javascript'],
        url: 'https://airbnb.io/javascript/'
    },
    {
        title: 'Advanced CSS and HTML',
        tags: ['css', 'html', 'learning'],
        url: 'https://learn.shayhowe.com/'
    },
    {
        title: 'Ebooks Programming Repo',
        tags: ['css', 'html', 'javascript', 'repository'],
        url: 'https://github.com/EbookFoundation/free-programming-books/blob/master/books/free-programming-books-langs.md#javascript'
    },
    {
        title: 'Resilient Web Design',
        tags: ['css', 'html', 'learning'],
        url: 'https://resilientwebdesign.com/chapter2/'
    },
    {
        title: 'General Repo - Awesome',
        tags: ['everything'],
        url: 'https://github.com/sindresorhus/awesome'
    },
    {
        title: 'Neural Implementation in JS	javascript',
        tags: ['advanced', 'artificial inteligence'],
        url: 'https://franpapers.com/en/machine-learning-ai-en/2017-neural-network-implementation-in-javascript-by-an-example/'
    },
    {
        title: 'styleguide mailchimp',
        tags: ['styleguide'],
        url: 'https://ux.mailchimp.com/patterns/color'
    },
    {
        title: 'uilibrary',
        tags: ['styleguide'],
        url: 'https://uilibrary.github.io/done-design-system/'
    }
]



let resourcesContainer =  document.querySelector('.resources_container');
let searchInput = document.querySelector('#search_input');
let filteredResources = resources;

setResources = () => {
    resourcesContainer.insertHTML = '';
    resources.forEach(resource => {
        let link = document.createElement('a');
        link.setAttribute('href', resource.url);
        link.setAttribute('target', '_blank');
        link.classList.add('resource');
        link.textContent = resource.title;
        link.dataset.tags = resource.tags;
        
        resourcesContainer.appendChild(link)
    }) 
}

setResources()

searchInput.addEventListener('keyup', () => {   
        let allResourcesElements = document.querySelectorAll('.resource');
        allResourcesElements.forEach(element => {
            !element.dataset.tags.includes(searchInput.value) ?
                element.style.display = 'none' : element.style.display = 'flex'      
        })   
})
