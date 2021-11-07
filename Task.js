var img = $("#img");

var zoomIn = $("#in");

var zoomOut = $("#out");

var info = $("#info")

var container = $(".container")

var zoomNumber = .25;

var zoomedNumber = 1


console.log(img.width())

zoomIn.on("click", function(){
    zoomedNumber = zoomedNumber + zoomNumber;
    $(".active img").css({
        "transform": `scale(${zoomedNumber})`
    })
    
})

zoomOut.on("click", function(){
    zoomedNumber = zoomedNumber - zoomNumber;
    $(".active img").css({
        "transform": `scale(${zoomedNumber})`
    })
})

info.on("click", function(){
    $(".container").css({
        "opacity": .5
    })
    
    $(".info-box").show();
})

$(".info-box span").on("click",()=>{
    $(".container").css({
        "opacity": 1
    })
    
    $(".info-box").hide();
    
})


$("#previw").on("click", function(){

    $(".preview-box").show();
    
    // $(".preview-box").append($(".active").children("img").clone());
    
    $(".preview-box img").attr("src", $(".active").children("img").attr("src"))
    
    
    
})


$(".preview-box span").on("click",()=>{
    
    $(".preview-box").hide();
    
})


function download(src){
    
}


$("#download").on("click", ()=>{
    
    // var sc = $(".active img").attr("src");
    
    // console.log(sc);
    
    // var link = $("<a>");
    
    // link.attr("href", sc);
    
    // link.attr("download", "1.png")
    
    // link.appendTo("body");

    // link[0].click();

    // link.remove();
    
    
    // e.preventDefault();
    // window.location.href = "1.jpg";
    
    // });
    
})


$("#print").on("click", ()=>{

    print();
    
})

$("#add").on("click",()=>{

    $(".add-box").show();
    
})

$(".add-box span").on("click",()=>{
    
    $(".add-box").hide();
    
})

$(".add-box .ok").on("click", ()=>{
    
    $(".add-box").hide();
    
    let activeInput = $(".active input");
    
    let addInput = $(".add-box input");
    
    activeInput.val(addInput.val());
    
    addInput.val("Write Your Text");    
})

$("#swap").on("click", ()=>{

    $(".swap-box").show();
    
})

$(".swap-box span").on("click",()=>{
    
    $(".swap-box").hide();
    
})

$(".swap-box div").click(function(){
        
        console.log($(this).children("img").attr("src"))
        
        $(".active img").attr("src", $(this).children("img").attr("src"))
})



$("#choose").on("click", ()=>{

    $(".choose-box").show();
    
})

$(".choose-box span").on("click",()=>{
    
    $(".choose-box").hide();
    
})

$(".choose-box div").click(function(){
        
        $(".added-box").show();
        
        $(".choose-box").css({
            "pointer-events": "none"
        })
        
        if($(this).children("img").attr("src") == "1.jpg"){
            
            $(".active img").attr("src","1.jpg");
            
            $(".swap-box div img:eq(0)").attr("src","1.jpg");
            $(".swap-box div img:eq(1)").attr("src","2.jpg");
            $(".swap-box div img:eq(2)").attr("src","3.jpg");
            
        }
        
        else if($(this).children("img").attr("src") == "4.jpg"){
            
            $(".active img").attr("src","4.jpg");
            
            $(".swap-box div img:eq(0)").attr("src","4.jpg");
            $(".swap-box div img:eq(1)").attr("src","5.jpg");
            $(".swap-box div img:eq(2)").attr("src","6.jpg");
            
        }
        
        else if($(this).children("img").attr("src") == "7.jpg"){
        
            $(".active img").attr("src","7.jpg");
            
            $(".swap-box div img:eq(0)").attr("src","7.jpg");
            $(".swap-box div img:eq(1)").attr("src","8.jpg");
            $(".swap-box div img:eq(2)").attr("src","9.jpg");
            
        }
})

$(".added-box span").on("click",()=>{
    
    $(".added-box").hide();
    
    $(".choose-box").css({
        "pointer-events": "auto"
    })
    
})

$(".added-box .ok").on("click", ()=>{
    
    $(".added-box").hide();
    
    $(".choose-box").css({
        "pointer-events": "auto"
    })
})

$("#reset").on("click", function(){
    $(".active img").attr("src","1.jpg");
    
    $(".swap-box div img:eq(0)").attr("src","1.jpg");
    $(".swap-box div img:eq(1)").attr("src","2.jpg");
    $(".swap-box div img:eq(2)").attr("src","3.jpg");
    
    $(".active input").val("Enter Your Text");
})


// var a = document.createElement('a');
// a.href = "./1.jpg";
// a.download = "1.jpg";
// document.body.appendChild(a);
// // a.click();
// document.body.removeChild(a);
