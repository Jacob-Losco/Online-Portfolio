const buttons = document.getElementsByClassName("viewButton");
const bios = document.getElementsByClassName("bio");
//indicates the index of the project currently being viewed, -1 if none
let indexOfCurrentView = -1;

function disableCurrentView(){
    for(const bio of bios){
        if(bio.id == indexOfCurrentView.toString()){
            bio.style.display = "none";
            for(const button of buttons)
                if(button.parentElement.id == bio.id)
                    button.innerHTML = "View";
        }
    }
}

function enableTargetView(targetI){
    for(const bio of bios){
        if(bio.id == targetI){
            bio.style.display = "inline-block";
            indexOfCurrentView = bio.id;
        }
    }
}

for(const button of buttons){
    if(button.innerHTML == "View")
        button.addEventListener('click', () => {
            if(indexOfCurrentView != -1)
                disableCurrentView();
            let targetIndex = button.parentElement.id;
            enableTargetView(targetIndex);
            button.innerHTML = "Viewing Below";
        });
}