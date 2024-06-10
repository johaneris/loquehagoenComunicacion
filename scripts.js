document.addEventListener('DOMContentLoaded', function() {
    const reasons = document.querySelectorAll('.reason');
    const proposalButton = document.getElementById('yesBtn');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.innerHTML = `
        <div class="heart"></div>
        <p>ahora nos casamos, ni modo <br>mahe no se que puta ha dicho el señor, solo he estado aprendiendo a hacer esta paja JAJAJAJAJAJAJAJAJAJ</p>
    `;
    document.body.appendChild(messageContainer);

    reasons.forEach(reason => {
        reason.addEventListener('click', () => {
            alert('sos el mejor');
        });

        
        reason.style.opacity = 0;

        reason.style.transition = 'opacity 2s';
        setTimeout(() => {
            reason.style.opacity = 1;
        }, 100);
    });

    proposalButton.addEventListener('click', () => {
        messageContainer.style.display = 'block';
        messageContainer.style.animation = 'fadeIn 2s ease-in';
    });

    // Animaciones de conclusión al pasar el mouse
    const conclusion = document.querySelector('.conclusion');
    conclusion.addEventListener('mouseover', () => {
        conclusion.style.color = '#ff69b4';
        conclusion.style.transition = 'color 0.5s';
    });
    conclusion.addEventListener('mouseout', () => {
        conclusion.style.color = '#483d8b';
    });

    // Agregar animaciones al título principal
    const mainTitle = document.querySelector('h1');
    mainTitle.addEventListener('mouseover', () => {
        mainTitle.style.transform = 'scale(1.1)';
        mainTitle.style.transition = 'transform 0.3s';
    });
    mainTitle.addEventListener('mouseout', () => {
        mainTitle.style.transform = 'scale(1)';
    });
});
