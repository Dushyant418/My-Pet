let tabs = document.querySelectorAll(".tabs .tab-head");
let tabContents = document.querySelectorAll(".tab-content .tabs-para");
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});

const dropdown = document.querySelector('.dropdown');
const input = document.querySelector('input');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;

const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('opened');
};

const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
};

const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains('opened')) {
        dropdown.classList.remove('opened');
    }
};

body.addEventListener('click', closeDropdownFromOutside);

listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
});

dropdown.addEventListener('click', toggleDropdown);