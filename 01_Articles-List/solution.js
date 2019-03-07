function solve() {
    let createTitleElement = document.getElementById("createTitle");
    let createContent = document.getElementById("createContent");

    let createTitleValue = createTitleElement.value;
    let createContentValue = createContent.value;

    console.log(createTitleValue);
    console.log(createContentValue);

    if (createTitleValue && createContentValue){
        let titleElement = document.createElement('h3');
        titleElement.textContent = createTitleValue;

        let contentText = document.createElement("p");
        contentText.textContent = createContentValue;

        let articleElement = document.createElement('article');
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentText);

        let createArticles = document.getElementById("articles");
        createArticles.appendChild(articleElement);

        createTitleElement.value = '';
        createContent.value = '';
    }


}