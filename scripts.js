document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.md')
        .then(response => response.text())
        .then(markdown => {
            const postsSection = document.getElementById('posts');
            
            const htmlContent = marked.parse(markdown);
            
            postsSection.innerHTML = htmlContent;
        })
        .catch(error => console.error('Erro ao carregar o arquivo Markdown:', error));
});
