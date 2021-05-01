console.log("AJAX Totorial in 1 Video");

// XML Http Request How This works
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonclickHandler)

function buttonclickHandler() {
    console.log("you have clicked the fetchBtn");



    // 1)instantiate a xhr object
    const xhr = new XMLHttpRequest(); // 1st create this object 

    //2) Open the obejct
    // xhr.open('GET', 'scor.txt', true);  // Jo maien hr object banaya hai mai GET request marna chata hu, kaha se data aayeiga, async -> kya aap blocking request marna chate ho syn.. ya asyn..

    //2) Post Request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true); //In this we require a data
    xhr.getResponseHeader('content-type', 'applictaion/json');  // [/x-www-form-urlencoded] mai url me hi bhj raha hu apne form ka data



    //What to do While Progress (options {used to track the progress})
    xhr.onprogress = function () {
        console.log("On Progress Function:");
    }

    //Similar to onload onreadystatechage
    xhr.onreadystatechange = function () {
        console.log("ready state is : ", xhr.readyState);  // this are 0=unsend, 1= opened, 2=HEADERS_RECEAVED, 3=Loading, 4=Done
    }




    //3What to do when response is redy
    xhr.onload = function () {
        //aagr error aayie toh
        if (this.status === 200) {

            console.log(this.responseText)
        }
        else {
            console.error("Some Error!");
        }
    }

    // //4) send the request GET
    // xhr.send();


    //4) send the request POST
    params = {"name":"testwqe","salary":"121233","age":"22133"} //Kyu ki hum url hi bhj rahe hai
    xhr.send(params);

    console.log("We are done!");// In this case yeh xhr.onprogress isse pahel print hoga kyu ki async on hai 
    /*
        AJAX Totorial in 1 Video
    you have clicked the fetchBtn
     We are done!
    On Progress Function:
    Hello Welcome to the Random Text
    This is simply Anything
    For the sake of something to get 
    */


    // Detailed 1) ek xhr object banana hai 2) usse open karna hai 


    //summery:
    /*
    sabse pahel consoel log mara jab uss button pe click karta hai toh ek event listner trigger kar do jab bhi
    koi click karega toh buttonClickHandler run ho jayie 
    2) ek naya xhr object banaya is xhr ka open method call kiya mujeh get request marni hai scor.txt ko marni hai or mujhe non
    blocking  marni hai ki iske aage ki chiz continue rahe background me yrh request chalti rahe isliyie true
    xhr.progress means aagr progress me hai toh concole.log run ho jayeiga 
    xhr.onreadystatechange jaise hi aapki state change hogi tab yeh call hoga
    3) Onlaod menas request puri ho chuki hai menas xhr ke readystate 4 pe aa chuke ho 
    ab tak humne request bhji nahi hai humne sirf boli hai 
    4)toh sab bhjne ke liyie .send karna padta hai 
    */

}