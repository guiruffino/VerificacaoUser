const Verificar = () => { 
    if (document.visibilityState === 'visible'){
        console.log('Usuario está na pagin');
    } else { console.log (
        'Usuario não está na pagina');
    }
}
document.addEventListener(
    'visibilitychange', Verificar
);