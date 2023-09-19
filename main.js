var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function new_image(){
    fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        block_object=img;
        block_object.scaleToWidth(700);
        block_object.scaleToHeight(510);
        block_object.set({
             left:0,
             top:0
        });
        canvas.add(block_object);
    })
}

function playSound(){
	x.play()
}