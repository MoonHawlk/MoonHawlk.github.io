document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');

    fetch('posts.md')
        .then(response => {
            if (!response.ok) throw new Error('Could not load posts.md');
            return response.text();
        })
        .then(markdown => {
            // Split on any heading level (## or ###), ignore # top-level title
            const sections = markdown.split(/^#{2,3}\s+/m).filter(s => s.trim());

            if (sections.length === 0) {
                postsList.innerHTML = '<p class="posts-empty">No posts yet.</p>';
                return;
            }

            const cards = sections.map(section => {
                const lines = section.trim().split('\n');
                const title = lines[0].trim();

                // Optional date on second line: _YYYY-MM-DD_ or *YYYY-MM-DD*
                let date = '';
                let bodyStart = 1;
                const dateLine = (lines[1] || '').trim();
                const dateMatch = dateLine.match(/^[_*](\d{4}[-\/]\d{2}[-\/]\d{2})[_*]$/);
                if (dateMatch) {
                    date = dateMatch[1];
                    bodyStart = 2;
                }

                // First non-empty body line becomes the excerpt
                const excerpt = lines.slice(bodyStart).find(l => l.trim()) || '';

                return buildPostCard(title, date, excerpt.trim());
            });

            postsList.innerHTML = cards.join('');
        })
        .catch(() => {
            postsList.innerHTML = '<p class="posts-empty">Posts unavailable.</p>';
        });
});

function buildPostCard(title, date, excerpt) {
    return `
        <div class="post-card">
            ${date ? `<p class="post-date">${formatDate(date)}</p>` : ''}
            <h3>${escapeHtml(title)}</h3>
            ${excerpt ? `<p class="post-excerpt">${escapeHtml(excerpt)}</p>` : ''}
        </div>
    `;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
