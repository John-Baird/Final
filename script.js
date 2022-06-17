
$('#Send').on('click',function(){
    let sendName = $('[placeholder="Display Name"]').val();
    let sendComment = $('[placeholder="Comment"]').val();
    if( sendName.length !== 0 && sendComment.length !== 0)  {
        $('.comments').prepend('<div class="SentComment"><div class="pos"><span class="tools"><div class="delete">delete</div><div class="edit">edit</div><p class="NAM">'+sendName+'</p></span>'+'<p class="COM">'+sendComment+'</p></div> </div>');
        $('.bottom p').addClass('hide')
    }
    else {
        if($('.bottom p').hasClass('hide') === true)
        $('.bottom p').toggleClass('hide')
    }
    
    
});




$('div').on('click','.edit',function(){
    let change = $(this).parent();
    console.log("clicked")
    if (change.children().hasClass('once') === false){
        change.append('<div class="once"> <input id="Editing" placeholder="Edit"> <div class="e">Submit</div> </div>')
    }
    
});



$('div').on('click','.e',function(){
    let a = $(this).parent();
    let b = a.parent();
    let c = b.next();
    let d = c.text();
    console.log(d);
    $(c).replaceWith('<p class="COM">'+$('[placeholder="Edit"]').val()+'</p>');
    $(a).remove();
})
$('div').on('click','.delete',function(){
    let a = $(this).parent();
    let b = a.parent();
    $(b).remove();
})