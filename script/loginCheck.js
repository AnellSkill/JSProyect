const loggedOutLinks = document.querySelectorAll('.logged-out') 
const loggedInLinks = document.querySelectorAll('.logged-in')

console.log(loggedInLinks);
console.log(loggedOutLinks);

export const loginCheck = user =>{
    if(user){
        loggedInLinks.forEach(links => links.style.display = 'block')
        loggedOutLinks.forEach(links => links.style.display = 'none')
    }else{
        loggedInLinks.forEach(links => links.style.display = 'none')
        loggedOutLinks.forEach(links => links.style.display = 'block')
    }
}
