$(document).ready(function(){

    //Create JSON objects to be used in saved list
    let lavender = {
        "name": "Lavender tree (Hyteropyxis natalensis)"
    };
    let wildPeach = {
        "name": "Wild peach (Kiggelaria africana)"
    };
    let falseOlive = {
        "name": "False olive (Buddleja saligna)"
    };
    let pompon = {
        "name": "Pompon tree (Dais cotinifolia)"
    };
    let whitePear = {
        "name": "White pear (Apodytes dimidiata)"
    };
    //console.log(lavender);

    //query the local store to see whick items are saved.
    let items = ["lavender", "wild-peach", "false-olive", "pompon", "white-pear"];
    let text;
    items.forEach(function(item) {
        if(localStorage.getItem(item) != null){
            //alert(`id"${item}" was found in local storage`);
            //If an item is found in local store, it must be added to the bullet point list
            switch (item){
                case "lavender":2
                    text = lavender.name;
                    break;
                case "wild-peach":
                    text = wildPeach.name;
                    break;
                case "false-olive":
                    text = falseOlive.name;
                    break;
                case "pompon":
                    text = pompon.name;
                    break;
                case "white-pear":
                    text = whitePear.name;
                    break;
            }
            $('.saved-list').append(`<li><a href="./blog.html#${item}">${text}</a></li>`);
        } else{
            //alert(`id"${item}" was not found in local storage`);
        }
    });
    


    
   






});




