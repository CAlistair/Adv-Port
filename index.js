

function contact() {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            "service_vnub4b9",
            "template_c9m66qm",
            event.target,
            "ayk-pGC6LuVij3L8V"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The Email service is temporarily unavailable. Please contact me directly on calistair@outlook.com"
            );
        })
}
let isModalOpen =false;
function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList +=" modal--open"
}

