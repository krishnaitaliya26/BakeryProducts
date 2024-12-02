var label = 0;
function Show_label1() {
  if(label == 0){
    label = 1;
  document.getElementById('label1').style.display = "block";
  document.getElementById('up_arrow1').style.display = "block";
  document.getElementById('down_arrow1').style.display = "none";
  }else{
    label = 0;
  document.getElementById('label1').style.display = "none";
  document.getElementById('up_arrow1').style.display = "none";
  document.getElementById('down_arrow1').style.display = "block";
  }
}

var y = 0;
function Show_label2(){
  if(y == 0){
    y = 1;
  document.getElementById('label2').style.display = "block";
  document.getElementById('up_arrow2').style.display = "block";
  document.getElementById('down_arrow2').style.display = "none";
  }else{
    y = 0;
  document.getElementById('label2').style.display = "none";
  document.getElementById('up_arrow2').style.display = "none";
  document.getElementById('down_arrow2').style.display = "block";
  }
}

var z = 0;
function Show_label3() {
  if(z == 0){
    z = 1;
  document.getElementById('label3').style.display = "block";
  document.getElementById('up_arrow3').style.display = "block";
  document.getElementById('down_arrow3').style.display = "none";
  }else{
    z = 0;
  document.getElementById('label3').style.display = "none";
  document.getElementById('up_arrow3').style.display = "none";
  document.getElementById('down_arrow3').style.display = "block";
  }
}

       var clo = 0;
       function close_img(){
        if(clo == 0){
          clo = 1;
          document.getElementById("close_div").style.display = "block";
          document.getElementsByClassName("mySlides")[0].style.display = "block";
         // document.getElementsByClassName("black_div")[0].style.display = "block";
        }
        else{
          clo = 0;
          document.getElementsByClassName("mySlides")[0].style.display = "none";
          document.getElementById("close_div").style.display = "none";
          //document.getElementsByClassName("black_div")[0].style.display = "none";

        }
       }

      var m = 0;
       function show_list(){
        if(m == 0){
          m = 1;
          document.getElementById("none").style.display = "block";
        }
        else{
          m = 0;
          document.getElementById("none").style.display = "none";
        }
       }

      // try{
//        let slideIndex = 1;
//        showSlides(slideIndex);
       
//        function plusSlides(n) {
//          showSlides(slideIndex += n);
//        }
       
//        function currentSlide(n) {
//          showSlides(slideIndex = n);
//        }
//       //}catch(err){console.log(err);}

// function showSlides(n) {
//   try{
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }

//   slides[slideIndex - 1].style.display = "block";
  
// }
// catch(err){console.log(err);}
// }

function go_to_home(){
  window.location="bakery.html";
}
function go_to_blog(){
  window.location="blog.html";
}

function go_to_bakery(){
  window.location="shop_now.html";
}

function go_to_turtle_cake(){
  window.location="turtle_cake.html";
}

function go_to_honey_cake(){
  window.location="honey_cake.html";
}

function go_to_chocolate_cake(){
  window.location="chocolate_cake.html";
}

function go_to_nute_cup_cake(){
  window.location="nute_cupcake.html";
}

function go_to_carrote_cake(){
  window.location="carrote_cake.html";
}

function go_to_sponge_cake(){
  window.location="sponge_cake.html";
}

function go_to_cup_cake(){
  window.location="cup_cake.html";
}

function go_to_basic_sponge_cake(){
  window.location="basic_sponge_cake.html";
}

function Show_shopping_cart(){
  window.location="shopping_cart_page.html";
}