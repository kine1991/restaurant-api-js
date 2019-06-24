export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__input'),
    searchButton: document.querySelector('.search__icon'),
    profile: document.querySelector('.profile'),
    mainHeading: document.querySelector('.main-heading'),
    alert: document.querySelector('.alert'),
    main: document.querySelector('.main-view')
};


export const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <div class="spinner-border"></div>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) loader.parentElement.removeChild(loader);
}


