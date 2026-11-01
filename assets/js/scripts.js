const SITE_ROOT = new URL('../../', document.currentScript.src);

document.addEventListener('DOMContentLoaded', () => {
    applySiteInfo();
    loadPosts();
});

// Fills every element tagged with data-site, data-site-href or data-site-content from content/site.json
function applySiteInfo() {
    fetch(new URL('content/site.json', SITE_ROOT))
        .then(response => response.json())
        .then(site => {
            site.year = String(new Date().getFullYear());
            const value = key => (site[key] || '').replace(/\{(\w+)\}/g, (match, name) => site[name] ?? match);
            const display = text => text.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

            document.querySelectorAll('[data-site]').forEach(el => {
                if (site[el.dataset.site]) el.textContent = display(value(el.dataset.site));
            });
            document.querySelectorAll('[data-site-href]').forEach(el => {
                const key = el.dataset.siteHref;
                if (site[key]) el.href = key === 'email' ? `mailto:${value(key)}` : value(key);
            });
            document.querySelectorAll('[data-site-content]').forEach(el => {
                if (site[el.dataset.siteContent]) el.content = value(el.dataset.siteContent);
            });
            if (site.title && document.body.dataset.page === 'home') document.title = value('title');
        })
        .catch(() => {});
}

// Lists published posts from writing/posts.json; the Writing section stays hidden when there are none
function loadPosts() {
    const list = document.getElementById('posts-list');
    if (!list) return;

    fetch(new URL('writing/posts.json', SITE_ROOT))
        .then(response => response.json())
        .then(posts => {
            if (!posts.length) return;
            list.innerHTML = posts.map(buildPostCard).join('');
            document.querySelectorAll('[data-posts-section]').forEach(el => { el.hidden = false; });
        })
        .catch(() => {});
}

function buildPostCard(post) {
    const href = new URL(`writing/${encodeURIComponent(post.slug)}/`, SITE_ROOT);
    return `
        <a class="post-card" href="${href}">
            <p class="post-date">${formatDate(post.date)}</p>
            <h3>${escapeHtml(post.title)}</h3>
            <p class="post-excerpt">${escapeHtml(post.summary)}</p>
        </a>
    `;
}

function formatDate(dateStr) {
    const d = new Date(`${dateStr}T00:00:00`);
    if (isNaN(d)) return escapeHtml(dateStr);
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
