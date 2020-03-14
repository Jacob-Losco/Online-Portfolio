const viewButtons = document.getElementsByClassName("viewButton");
const exitButtons = document.getElementsByClassName("bioInfoHeaderExit");
const bios = document.getElementsByClassName("bio");

function enableTargetView(targetI){
    for(const bio of bios){
        if(bio.id == targetI){
            bio.parentElement.style.display = "flex";
            bio.style.opacity = "1";
        }
    }
}

for(const button of viewButtons){
    if(button.innerHTML == "View")
        button.addEventListener('click', () => {
            let targetIndex = button.parentElement.id;
            enableTargetView(targetIndex);
        });
}
for(const button of exitButtons){
    button.addEventListener('click', () => {
        //makes no display for bio box
        button.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        //makes bio invisible
        button.parentElement.parentElement.parentElement.style.opacity = "0";
    });
}