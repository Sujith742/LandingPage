let navbarSections = document.querySelectorAll('section');

/** defining the function scrollBar */
function scrollBar(){
    for (i of navbarSections){ /** iterating over section */
        let segmentName = i.getAttribute('data-nav') /** getting the value of data-nav */
        let segmentID = i.getAttribute('id') /** getting the id value */
        let a = document.createElement('a'); /**creating anchor element */
        let li = document.createElement('li'); /** creating list item */
        li.id=segmentID  /**adding id attribute */
        a.textContent=segmentName; /** adding text to anchor element */
      //  a.setAttribute('href', '#' + segmentID); /**setting href attribute value with segmentID */
        li.classList.add("header-items") /** adding class attribute */
        a.classList.add("header-items") /** adding class attribute */

        li.appendChild(a); /**append anchor element to list */
        document.getElementById('navbar__list').appendChild(li); /**append list item to the unordered list */
        scroll(li,i) /** calling scroll function with section and list item passing as arguments */
    }
}
/* defining scroll functionality for smooth behaviour */
function scroll(a, section){
	a.addEventListener("click", function(event){
		event.preventDefault();
		section.scrollIntoView({behavior: "smooth"}) /**adds smooth behaviour while scrolling */

	})
}



scrollBar()



let a=document.querySelectorAll("li")
/* iterating over each list item and section and passing them as arguments to the scroll function */
let liLen=a.length
for (let i=0;i<liLen; i++){
    scroll(a[i],navbarSections[i])
}

/*
*@ defining a function to show the active status of the section while scrolling */
function activeMenu(){
    let len=navbarSections.length;
    while(--len && window.scrollY+100 <navbarSections[len].offsetTop){}
    a.forEach(i=>i.classList.remove("active"));
    a[len].classList.add("active");

};

activeMenu();
window.addEventListener("scroll",activeMenu);
