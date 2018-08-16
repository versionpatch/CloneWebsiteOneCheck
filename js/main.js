AOS.init();


var SpawnedGallery = false;



var GalleryDiv = $("#GalleryDisplay");
GalleryDiv.css("display","none");
var GalleryImage = $(".Gallery");

for (var i = 0;i < 6;i++)
{
    $("#gal" + i).click(function()
    {
        if (!SpawnedGallery)
        {
            GalleryDiv.css("display","block");
            setTimeout(function(){
                GalleryDiv.removeClass("HideGallery");
                GalleryDiv.addClass("ShowGallery");
            }, 100);
            SpawnedGallery = true;
        }
        //GalleryDiv.css("display","block");
        var imgSrc = $(this).attr("src");
        for (var j = 0;j < 6;j++)
        {
            if(("gal" + j) != $(this).attr("id"))
            {
                $("#gal" + j).css("filter","brightness(20%)");
                $("#gal" + j).hover(function()
                {
                    $(this).css("filter","brightness(100%)");
                }, function()
                {
                    $(this).css("filter","brightness(20%)");
                    $(this).css("transition","filter 0.4s ease");
                });
            }
            else
            {
                $("#gal" + j).hover(function()
                {
                    $(this).css("filter","brightness(100%)");
                }, function()
                {
                    $(this).css("filter","brightness(100%)");
                    $(this).css("transition","filter 0.4s ease");
                });
            }
        }
        GalleryDiv.find("img").attr("src",imgSrc);
        GalleryDiv.find("#project").text($(this).attr("project"));
        GalleryDiv.find("#details").text($(this).attr("details"));
        GalleryDiv.find("#client").text($(this).attr("client"));
    });
}

$("#HideButton").click(function()
{
    if (SpawnedGallery)
    {
        GalleryDiv.removeClass("ShowGallery");
        GalleryDiv.addClass("HideGallery");
        setTimeout(function(){
            GalleryDiv.css("display","none");
        }, 500);
        SpawnedGallery = false;
    }

    for (var j = 0;j < 6;j++)
    {
        $("#gal" + j).css("filter","brightness(20%)");
        $("#gal" + j).hover(function()
        {
            $(this).css("filter","brightness(100%)");
        }, function()
        {
            $(this).css("filter","brightness(20%)");
            $(this).css("transition","filter 0.4s ease");
        });
    }
});

function initMap() 
{
    var zimbabwe = {lat: -17.6925285, lng: 30.9266056};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: zimbabwe});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: zimbabwe, map: map});
}

initMap();

