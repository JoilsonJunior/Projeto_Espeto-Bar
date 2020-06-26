// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('.nav-links a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click' , scrollToIdOnClick);
})

function scrollToIdOnClick() {
    console.log('clicou');
}


