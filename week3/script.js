//THIS KEYWORD
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

video.stop = function(){
    console.log(this);
}

video.stop();
video.play();
console.log(this);


//CALLBACK FUNCTION

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}


//ASYNCHRONOUS EXAMPLE

const loadPokemon = (id, cb) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
}

loadPokemon(56, (pokemon) => {
	console.log(pokemon);
})


//CALLBACK HELL

function walkDog(callback){
	setTimeout(() => {
		console.log("You walk the dog");
		callback();
	}, 1500);
}

function cleanKitchen(callback){
	setTimeout(() => {
		console.log("You clean the kitchen");
		callback();
	}, 2500);
}

function takeOutTrash(callback){
	setTimeout(() => {
		console.log("You take out the trash");
		callback();
	}, 500);
}

function CookingDeliciousFood(callback){
	setTimeout(() => {
		console.log("You cook delicious food");
		callback();
	}, 2000);
}

walkDog( () => {
	cleanKitchen( () => { 
		takeOutTrash( () => {
            cookFood( () =>{
                console.log("You finished all the chores") });
            })
        })
    })





//PROMISES

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

function cookFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foodCooked = true;
            if(foodCooked){
                resolve("You cook delicious food");
            }
            else{
                reject("You DIDN'T cook delicious food");
            }
        }, 2000);
    });
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); return cookFood()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));




//ASYNC / AWAIT

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

function cookFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foodCooked = true;
            if(foodCooked){
                resolve("You cook delicious food");
            }
            else{
                reject("You DIDN'T cook delicious food");
            }
        }, 2000);
    });
}


async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        const cookFoodResult = await cookFood();
        console.log(cookFoodResult);

        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();