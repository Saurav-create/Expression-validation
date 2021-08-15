var inputValue = prompt("Type the index number for validation\n 1. Phone Number\n 2.Email Id\n 3.Postal Code");

inputValue = parseInt(inputValue);



switch (inputValue) {
    case 1: {
      
        let re = /^(\+)?(88)?01[35789][0-9]{8}$/;   //35789 cause valid mobile operators in BD
        let str = prompt('Enter Your Phone Number!!');

        let result = re.test(str);

       
        if(result){
            alert('Your Phone Number is Valid!!');
        }
         else{
             alert('Your Phone Number is invalid');
         }

         break;
    }

    case 2: {
         
        let re =/^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
  

        let str = prompt('Enter Your Email Id!!');

        let result = re.test(str);

       
        if(result){
            alert('Your Email ID is Valid!!');
        }
         else{
             alert('Your Email Id is invalid');
         }

         break;


    }
    case 3: {
        let re = /^([0-9]{4})$/;

        let str = prompt('Enter Your Postal Code!!');

        let result = re.test(str);
        console.log(result);
        

       
        if(result){
            alert('Your Postal Code is Valid!!');
        }
         else{
             alert('Your Postal Code is invalid');
         }

         break;






    }



    default:
        break;
}