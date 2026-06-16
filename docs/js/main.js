document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperiences();
});

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container || typeof projectsData === 'undefined') return;

    container.innerHTML = '';

    projectsData.forEach(project => {
        const projectElement = document.createElement('article');
        projectElement.className = 'card-project';
        
        const tagsHtml = project.tags.map(tag => `<span class="badge-content">${tag}</span>`).join('');
        const iconClass = project.icon === 'linkedin' ? 'bi-linkedin' : 'bi-github';
        const buttonText = project.icon === 'linkedin' ? 'Ver no LinkedIn' : 'Ver no GitHub';

        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="card-content">
                <span class="badge-content" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px; display: inline-block;">${project.type}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags-container">
                    ${tagsHtml}
                </div>
            </div>
            <a href="${project.link}" class="badge-contentGit" target="_blank" rel="noopener noreferrer">
                <i class="bi ${iconClass}"></i> ${buttonText}
            </a>
        `;
        
        container.appendChild(projectElement);
    });
}

function renderExperiences() {
    const container = document.getElementById('experience-container');
    if (!container || typeof experienceData === 'undefined') return;

    container.innerHTML = '';

    experienceData.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'exp-card-container';
        expElement.style.marginBottom = '30px';

        expElement.innerHTML = `
            <div class="exp-card-header">
                <div class="exp-card-leftinfo">
                    <h3><i class="bi bi-briefcase"></i> ${exp.role}</h3>
                    <h4>${exp.company}</h4>
                </div>
                <div class="exp-card-rightinfo">
                    <p><i class="bi bi-calendar"></i> ${exp.period}</p>
                    <p><i class="bi bi-geo-alt"></i> ${exp.location}</p>
                </div>
            </div>
            <div class="exp-card-body">
                <p>${exp.description}</p>
            </div>
        `;
        
        container.appendChild(expElement);
    });
}
