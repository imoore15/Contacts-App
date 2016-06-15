var contacts_display = [

]





$(document).ready(function() {




    $('form').submit(function(e) {
        e.preventDefault();
        var contacts = {
            name: $('#name').val(),
            tele: $('#tele').val(),
            email: $('#email').val(),
            address: $('#address').val()
        };

        
        $('input').val("");

        contacts_display.push(contacts)

       // $('#contact_list').empty()
        //$('#list').append(contacts_display)
        renderContacts();

    });



    function renderContacts(contacts) {
    	$('#contact_list').empty();

    	contacts_display.forEach(function (contacts, i) {
    		$('#contact_list').append("<li id='" + i +"'>" + contacts.name + "</li>")
    	});


    }



    $('#contact_list').on('click', 'li', function() {
    	var id = $(this).attr("id") ;
    	console.log(contacts_display[id])
    	$('#contact_detail').append("<li>name:" + contacts_display[id].name + "</li>");
    	$('#contact_detail').append("<li>tele:" + contacts_display[id].tele + "</li>");
    	$('#contact_detail').append("<li>email:" + contacts_display[id].email + "</li>");
    	$('#contact_detail').append("<li>address:" + contacts_display[id].address + "</li>");
    });

});