$(document).ready(function(){

    //query the local store to see which items are saved.
    let items = ["lavender", "wild-peach", "false-olive", "pompon", "white-pear"];

    items.forEach(function(item) {
        if(localStorage.getItem(item) != null){
            //alert(`id"${item}" was found in local storage`);
            $("#"+item).addClass('clicked');
        } else{
            //alert(`id"${item}" was not found in local storage`);
        }
    });


    //Change colour of like button when clicked
    $(".fa-thumbs-up").click(function(){
        //alert('cliked');
        $(this).toggleClass("clicked");
    });

    //Change colour of save button when clicked
    $(".fa-star").click(function(){
        //alert('cliked');
        $(this).toggleClass("clicked");
        let id = $(this).attr('id');
        //alert(id)
        if($(this).hasClass("clicked")){
            localStorage.setItem(id, id);
            let count = countItemsInLocalStorage(items);
            //console.log(`count: ${count}`);
            alert(`${id}" was added to the list. There are ${count} item(s) stored`);
        } else {
            if(localStorage.getItem(id) != null){
                localStorage.removeItem(id);
                let count = countItemsInLocalStorage(items);
                //console.log(`count: ${count}`);
                alert(`"${id}" was removed from the list. There are ${count} item(s) stored`);
            }
        }

        
    });

    //Submit a comment
    $('#comment-button').click(function(){
        let comment = $('textarea').val();
        //alert(comment);
        $('#comments-list').append(`<li><p>${comment}</p><hr></li>`);
        $('textarea').val("");
    });

    
});



//Functions
function countItemsInLocalStorage(items){
    //returns the number of items that are stored in local storage
    //items is an array containing all the keys of possible items that could be stored in local storage
    let count = 0;
    //console.log(items);
    items.forEach(function(item) {
        if(localStorage.getItem(item) != null){
            //console.log(`id"${item}" was found in local storage`);
            count++;
            //console.log(`count: ${count}`);
        } else{
            //alert(`id"${item}" was not found in local storage`);
        }
    })
    //console.log(`count(in countItemsInLocalStorage): ${count}`);
    return count;
}



