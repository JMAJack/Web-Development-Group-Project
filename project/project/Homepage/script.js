let PlayersData = [];


/* Validates Email */
function ValidateEmail(inputText)
{
let mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[SomeEmail]+(?:.[com]+)*$/;

if(inputText.value.match(!mailformat))
{
alert("You have entered an invalid email address!,\t Example: Jonrawr@SomEmail.com");
document.information.email.focus();
return false;
}
else
{
    return true;
}
}
/* Validates Email */


/* Disable other buttons when REgister is Pressed */
$('#accept').click(function() 
{
	if ($('#submitbtn').is(':disabled')) 
    {
    	$('#submitbtn').removeAttr('disabled');
        $('#endbtn').attr('disabled', 'disabled');
        $('#playbtn').attr('disabled', 'disabled');
    } 

    
    else 
    {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});
/* Disable other buttons when REgister is Pressed */


        function Register() 
        {


            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let street = document.getElementById("street").value;
            let city = document.getElementById("city").value;
            let town = document.getElementById("town").value;
            let parish = document.getElementById("parish").value;
            let DoR = document.getElementById("DoR").value;
            let Age = document.getElementById("Age").value;
            let email = document.getElementById("email").value;
            let gender;
                if (document.getElementById("gender1").checked)
                {
                    gender =  "Male";
                }
                else if (document.getElementById("gender2").checked)
                {
                    gender =  "Female";
                }

            let EDlevel = document.getElementById("EDlevel").value;


            



            if (!fname || !lname || !street || !city || !town || !parish || !DoR || !Age || !email || !gender1 || !gender2 || !EDlevel)
            {
                alert("Fill out all Fields");
            }
            else
            {
                PlayersData.push({fname,lname,street,city,town,parish,DoR,Age,email,gender1,gender2,EDlevel});
            }

console.log(PlayersData);


            let today = Date();


            if (!Age)
            {
                Age <= 12;

            }

        }

		/*
		In PlayersData[]  include the amount of questions got correct, incorrect and total questions.
		Thats 3 entriess so far
		*/
            
		


     /*
	In termination of this game are
	1. Player press the exit button [Moves to an Thanks for playing screen]
	2. all options are used
	*/ 

	



 

            function CheckAnswer()
            {
				/* 
				if statement to be used here

				if the question is correct 
					{Remove the question from the board/ or change the name of the cell}
					{PLayer that gets the aomunt that the question is worth}
					{Player gets another try at choosing another question}

				If not
					{Player losses the amount the question is worthed for}
					Another if statement
						{If player wishes to know the answer, It will be revealed and taken off the board}
						if not
							{the question will remain}
				*/

				return showAll()
            }




            function findPercentageScore()
            {
            /*
				Correct Questions + INcorrect Questions = Total QUestions

				Correct Questions percentage
					(Correct Questions / Total QUestiosn) * 100

				Incorrect Questions percentage
					(Incorrect Questions / Total QUestiosn) * 100

				Display this information Like this

				//Player's Name, Correct Questions %, INcorrect Questions %, Total Questions overall, Town/Location, Date \n

			*/
            }


		<button onclick="findPercentageScore()">Quit</button>

        /*1. Clears the form
		2. Disables all buttons exept register
*/
		

            function showAll()
            {
                /*
				Display this information Like this

				//Player's Name,Age , Correct Questions , Incorrect Questions , Total Questions overall, Percentage scorez, Date \n
				
				*/
            }







        function showfreq()
        {
            
        }

