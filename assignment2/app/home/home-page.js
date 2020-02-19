const HomeViewModel = require("./home-view-model");
let num =0, num1=0;
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
function onButtonTap(args){
    const button = args.object;
    
    let parent = button;
    
    //console.log(num);
    if(num%3 ==0){
    parent.backgroundColor ="green";
    }
    else if(num%3==1)
       parent.backgroundColor ="blue";
    else
    parent.backgroundColor ="yellowgreen";
    num++;

}
function onImageTap(args){
    const img = args.object;
    let myImg= img;
    //console.log(img.src);
    if (num1%2 ==0){
        myImg.src = "https://pictures.topspeed.com/IMG/jpg/201709/mercedes-amg-g-65-br-8.jpg";

    }
    else
        myImg.src ="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/a4_allroad_2249a.jpg?itok=Y3vr7E-v";
    num1++;

}
function navigateToHelp(args){
    //const action = args.object;
    //console.log("Hi!");
    let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
    const frame = getFrameById("my_frame");
    // Navigate to page called “my-page” (e.g., app/my-page.xml)
    frame.navigate("home/help-page");
    //const page = action.page;
    //page.frame.navigate("help-page");
}
//exports.onHelpTap=onHelpTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onButtonTap = onButtonTap;
exports.onImageTap = onImageTap;
exports.navigateToHelp=navigateToHelp;
