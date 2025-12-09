const users = [
    {
        id: 1,
        name: "Marcos Ferreira",
        avatar: "https://i.pravatar.cc/60?img=7",
        bio: "Apaixonado por jogos competitivos e animes de ação. Sempre compartilhando análises, teorias e novidades do mundo gamer e otaku."
    },
    {
        id: 2,
        name: "Luiza Moreira",
        avatar: "https://i.pravatar.cc/60?img=5",
        bio: "Designer criativa que ama RPGs, jogos de história imersiva e animes com visual marcante. Produzo conteúdos sobre narrativas e estética."
    },
    {
        id: 3,
        name: "Pedro Almeida",
        avatar: "https://i.pravatar.cc/60?img=8",
        bio: `
        <img src="imgs/dbz.jpg"
                 style="width:100%; border-radius:10px; margin-bottom:10px;" />
        
        Entusiasta de jogos online, animes shonen e tudo relacionado ao mundo geek. Compartilho recomendações e dicas para iniciantes.`
    },
    {
        id: 4,
        name: "Felipe Andrade",
        avatar: "https://i.pravatar.cc/60?img=11",
        bio: `
            <img src="imgs/demonslayer.jpg"
                 style="width:100%; border-radius:10px; margin-bottom:10px;" />

            Criador de conteúdo sobre jogos e animes. Falo sobre lançamentos,
            episódios marcantes, gameplays, curiosidades e tudo que move a cultura geek. 
        `
    }
];



const loadBtn = document.querySelector('.load-btn')
const cardsContainer = document.querySelector('.cards-container')


function createUser(user){
    return `
        <div class="card">
            <img class="avatar" src="${user.avatar}" alt="usuario">
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
                </div>
            </div>    
    `

}

function createSkeleton(){
    return `
        <div class="card">
            <div class="skeleton skeleton-card"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text short"></div>
            </div>
        </div>    
    
    `
}



function loadData(){
    loadBtn.disabled = true
    loadBtn.textContent = 'Carregando...'

    cardsContainer.innerHTML = users.map(createSkeleton).join('')




    setTimeout(() => {

        cardsContainer.innerHTML = users.map(createUser).join('')

        

        loadBtn.disabled = false
        loadBtn.textContent = 'Recarregar'



    }, 2000);
}



loadBtn.addEventListener('click', loadData)