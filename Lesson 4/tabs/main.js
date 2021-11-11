const tabs = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

const changeContentClass = dt => {
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content == dt) {
            if (content[i].dataset.parent != undefined) {
                changeContentClass(content[i].dataset.parent);
            }
            content[i].classList.add('active');
        }
    }
};

const changeTabClass = el => {
    for (let i = 0; i < tabs.length; i++) {   //(1)
        tabs[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabs.forEach((tab) => {
    tab.addEventListener('click', e => {
        const dataAtribute = e.target.dataset.btn;
        changeContentClass(dataAtribute);
        changeTabClass(tab);
    });
});