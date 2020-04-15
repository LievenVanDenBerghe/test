const myPetRock = {
    username: "",
    image: 'images/rock.png',
    resetImage: function(){
        this.image = 'images/rock.png';
    }
}

const greetUser = ()=>{
    alert('Hello I am your pet rock');
}

const showRock = ()=>{
    document.getElementById('rockImg').src = myPetRock.image;
}


const touchRock = () =>{
    if(myPetRock.username){
        alert(`I like the attention, ${myPetRock.username}. Thank you.`);
    }else{
        const username = window.prompt('geef de naam van de gebruiker');
        myPetRock.username = username;
    }
    myPetRock.image = 'images/rock_happy.png';
    showRock();
    myPetRock.resetImage();
    setTimeout(showRock,2 * 1000);
    
}









function init(){
    greetUser();
    touchRock();
    
}

window.onload = init();