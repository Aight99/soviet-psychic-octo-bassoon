
function addImage(art) {
    let grid = document.getElementById("gallery-grid");
    let img = document.createElement('img');
    img.src = art;
    grid.append(img);
}

fetch("../imgs/pics.json").then(response => {
    response.json().then(result => {
        console.log(result);
        addImage(result.art1);
        addImage(result.art2);
        addImage(result.art3);
        addImage(result.art4);
        addImage(result.art5);
    });
});

