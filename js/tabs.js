(function(){

    const propTabs = {
        firstHeader: document.getElementById("head-menu").firstElementChild,
        firstContent: document.getElementById("content-menu").firstElementChild,
        headerLink: document.querySelectorAll("#head-menu li a"),
        headerList: document.querySelectorAll("#head-menu li"),
        contentDiv: document.querySelectorAll("#content-menu > div"),
        activeContent: null,
    }


    const metTabs = {
        start: function(){
            propTabs.firstHeader.className = "active";
            propTabs.firstContent.className = "active";
            for (let index = 0; index < propTabs.headerLink.length; index++) {
                propTabs.headerLink[index].addEventListener('click', metTabs.event);
                
            }
        },

        event: function(e) {
            e.preventDefault();

            for (let index = 0; index < propTabs.headerList.length; index++) {
                propTabs.headerList[index].className = "";
            }

            for (let index = 0; index < propTabs.contentDiv.length; index++) {
                propTabs.contentDiv[index].className = "";
            }

            this.parentElement.className = "active";

            propTabs.activeContent = this.getAttribute('href');
            console.log(propTabs.activeContent);

            document.querySelector(`${propTabs.activeContent}`).className = `${propTabs.activeContent} active`;
            document.querySelector(`${propTabs.activeContent}`).style.opacity = 0;

            setTimeout(function(){
                document.querySelector(`${propTabs.activeContent}`).style.opacity = 1;
            }, 200)
        }
    }

    metTabs.start();

}())
