var userContainer = document.getElementById('user-container');
var userDetail = document.getElementById('user-detail');
var shareContainer = document.getElementById('share-container');
//desktop variables
const iconContainer = document.getElementById('icon-container');
const iconPath = document.getElementById('icon-path');

function shareButtonHandler() {
    if (userDetail.classList.contains('hidden')) {
        userDetail.classList.remove('hidden');
        userDetail.classList.add('flex');
        shareContainer.classList.remove('flex');
        shareContainer.classList.add('hidden');
        userContainer.classList.remove('bg-[#48556a]');
    } else {
        userDetail.classList.remove('flex');
        userDetail.classList.add('hidden');
        shareContainer.classList.remove('hidden');
        shareContainer.classList.add('flex');
        userContainer.classList.add('bg-[#48556a]');
    }
}

// iconContainer.addEventListener("click", () => {
//     const currentFill = iconPath.getAttribute("fill");
//     iconPath.setAttribute("fill", currentFill === '#6E8098' ? 'white' : '#6E8098');
// });

iconContainer.addEventListener("focus", () => {
    iconPath.setAttribute('fill', 'white');
});

iconContainer.addEventListener("blur", () => {
    iconPath.setAttribute('fill', '#6E8098')
})


// document.addEventListener('click', function(event) {
//     if (!userDetail.contains(event.target) && !shareContainer.contains(event.target)) {
//         userDetail.classList.remove('hidden');
//         userDetail.classList.add('flex');
//         shareContainer.classList.remove('flex');
//         shareContainer.classList.add('hidden')
//         userContainer.classList.remove('user-bg')
//     }
// })