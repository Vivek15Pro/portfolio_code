// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controlls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content')

 
// function PageTransitions(){
//     for(let i=0; i< sectBtn.length;i++){
//         sectBtn[i].addEventListener('click',function(){
//             let currentBtn = document.querySelector('.active-btn');
//             currentBtn.classList.remove('active-btn');
//             this.classList.add('active-btn');
//         })
        
//     }

//     allSections.addEventListener('click',(e)=>{
//         const id = e.target.dataset.id;
//         if(id){
//             sectBtns.forEach((btn)=>{
//                 btn.classList.remove('active');
//                 });
//                 e.target.classList.add('active');
//                 sections.forEach((section)=>{
//                     section.classList.remove('active');
//                     });
//                     const sectionToShow = document.getElementById(id);
//                     sectionToShow.classList.add('active');
//                     }

//     })
// }

// PageTransitions();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();