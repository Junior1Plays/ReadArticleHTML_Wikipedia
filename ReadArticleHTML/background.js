document.getElementById('viewhtml').addEventListener("click", function(event) {
    
    if(!document.getElementById('articlename').value) {
        window.alert('Por favor, insira o nome de um artigo.')
    } else {
        chrome.tabs.create({
            url: 'https://pt.wikipedia.org/api/rest_v1/page/html/' + document.getElementById('articlename').value,
            selected: true,
        })
    }
});    