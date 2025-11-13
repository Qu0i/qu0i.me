const menu = document.getElementById('menu');
const detail = document.getElementById('detail');

function makeMenuItem(p) {
  const li = document.createElement('li');
  li.className = 'menu-item';
  li.dataset.id = p.id;

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = p.title;

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = p.short;

  const left = document.createElement('div');
  left.style.display = 'flex';
  left.style.flexDirection = 'column';
  left.appendChild(title);
  left.appendChild(meta);

  li.appendChild(left);
  li.addEventListener('click', () => selectProject(p.id, li));
  return li;
}

function selectProject(id, el) {
  document.querySelectorAll('.menu-item').forEach(x => x.classList.remove('active'));
  if (el) el.classList.add('active');

  fetch("../assets/data/projects.json")
    .then(res => res.json())
    .then(projects => {
      const p = projects.find(x => x.id === id);
      if (!p) {
        detail.innerHTML = '<p class="empty">Project not found.</p>';
        return;
      }
      detail.innerHTML = `
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <div style="margin-top:10px;color:var(--muted);">Tech: ${p.tech.join(' · ')}</div>
        <div class="project-links">
          ${p.repo ? `<a class="btn" href="${p.repo}" target="_blank">Repository</a>` : ''}
          ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank">Demo</a>` : ''}
        </div>
      `;
    });
}

fetch("../assets/data/projects.json")
  .then(res => res.json())
  .then(projects => {
    projects.forEach(p => menu.appendChild(makeMenuItem(p)));
    if (projects.length) {
      const first = menu.querySelector('.menu-item');
      if (first) first.click();
    }
  });
