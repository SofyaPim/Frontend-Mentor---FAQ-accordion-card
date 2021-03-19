function ready() {
    let quest = document.querySelectorAll(".faq-quest");
    //   let arrow = document.querySelectorAll(".faq-arrow");





    quest.forEach((item) => {
        item.addEventListener("click", (e) => {

            // if (item.classList.contains("inactive-quest")) {

            //     item.classList.toggle("active-quest");

            //     item.nextElementSibling.classList.toggle("displayNone");
            //     item.lastChild.classList.toggle("transformRotate");
            // } else {
            //      item.classList.toggle("inactive-quest");
            //     item.nextElementSibling.classList.toggle("displayNone");
            //     item.lastChild.classList.toggle("transformRotate");

            // }
            

                item.classList.toggle("active-quest");

                item.nextElementSibling.classList.toggle("displayNone");
                item.lastChild.classList.toggle("transformRotate");
            

        })

    })
    return false;
}


if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', ready);
} else {

    ready();
}