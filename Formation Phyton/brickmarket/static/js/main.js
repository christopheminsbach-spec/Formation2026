console.log("BrickMarket chargé");


window.addEventListener(
    "scroll",
    () => {

        const navbar =
        document.querySelector(".navbar");


        if(window.scrollY > 50){

            navbar.classList.add("active");

        }

        else{

            navbar.classList.remove("active");

        }

    }
);