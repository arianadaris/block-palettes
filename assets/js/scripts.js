function saveClick(data)
{
    const id = data['_id'];
    data['saved'] = "True";
    console.log(data);
    console.log(typeof(data));
    
    const palette = data;
    console.log(palette);
    console.log(typeof(palette));

    console.log("URL: " + `http://localhost:3000/api/palettes/${id}`);

    var url = `http://localhost:3000/api/palettes/${id}`;

    $.ajax(
        {
            url: url,
            data: JSON.stringify(palette),
            type: "PUT",
            contentType: "application/json",
            success: function(data)
            {
                $('.show-hide').fadeIn();
                setTimeout(function()
                {
                    $('.show-hide').fadeOut();
                }, 3000)
                console.log("Hiding show-hide");
            }
        }
    );

    location.reload();
}

function removeClick(data)
{
    const id = data['_id'];
    data['saved'] = "False";
    console.log(data);
    console.log(typeof(data));
    
    const palette = data;
    console.log(palette);
    console.log(typeof(palette));

    console.log("URL: " + `http://localhost:3000/api/palettes/${id}`);

    var url = `http://localhost:3000/api/palettes/${id}`;

    $.ajax(
        {
            url: url,
            data: JSON.stringify(palette),
            type: "PUT",
            contentType: "application/json",
            success: function(data)
            {
                console.log("Showing hide-hide");
                $('.hide-hide').fadeIn();
                setTimeout(function()
                {
                    $('.hide-hide'.fadeOut());
                }, 3000)
                console.log("Hiding hide-hide");
            }
        }
    );
    
    location.reload();
}
