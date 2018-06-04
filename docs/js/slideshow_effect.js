/**
 * Function to iterate trough the "verification images" and to display respective activation layer
 */

jQuery(function($){
    $( "#next_image" ).click(function(){
        next();
    });
    $( "#prev_image" ).click(function(){
        next();
    });
    $( "#act_image" ).click(function(){
        activation();
    });
});

// Write all the names of images in slideshow
var images = ["image0" , "image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"];

function next()
{
    $( '#slideshow_image' ).fadeOut(300,function()
    {
        var next_val = document.getElementById( "img_no" ).value;
        var next_val = Number(next_val)+1;
        if(next_val >= images.length)
        {
            next_val = 0;
        }
        $( '#slideshow_image' ).attr( 'src' , 'img/Verification/'+images[next_val]+'.png' );
        document.getElementById( "img_no" ).value = next_val;
        document.getElementById( "activ" ).value = "false";
    });
    $( '#slideshow_image' ).fadeIn(1000);
    /*
    $( '#slideshow_image2' ).fadeOut(300,function()
    {
        var next_val = document.getElementById( "img_no" ).value;
        var next_val = Number(next_val);
        if(next_val >= images.length)
        {
            next_val = 0;
        }
        $( '#slideshow_image2' ).attr( 'src' , 'img/slideShowImg/'+images[next_val]+'.jpg' );
        document.getElementById( "img_no" ).value = next_val;
    });
    $( '#slideshow_image2' ).fadeIn(1000);
    */
}

function activation(){

    $( '#slideshow_image' ).fadeOut(0,function()
    {
        var next_val = document.getElementById( "img_no" ).value;
        var next_val = Number(next_val);
        var activ = document.getElementById( "activ" ).value;
        if(next_val >= images.length)
        {
            next_val = 0;
        }
        if(activ == "false"){
            $( '#slideshow_image' ).attr( 'src' , 'img/verificationWA/'+images[next_val]+'.png' );
            console.log("activation false",images[next_val])
            document.getElementById( "img_no" ).value = next_val;
            document.getElementById( "activ" ).value = "true";
        } else {
            $( '#slideshow_image' ).attr( 'src' , 'img/Verification/'+images[next_val]+'.png' );
            console.log("activation true",images[next_val])
            document.getElementById( "img_no" ).value = next_val;
            document.getElementById( "activ" ).value = "false";
        }

    });
    $( '#slideshow_image' ).fadeIn(0);

}

