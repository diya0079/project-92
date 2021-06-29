player1_name = localstorage.getItem("player1_name";
player2_name = localstorage.getItem("player2_name";

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name".inenrHTML = player1_name +" ; ";
document.getElementById("player2_name".inenrHTML = player2_name +" ; ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTMML= player1_score;

document.getElementById("player_question").innerHTML ="Question Turn-"=player1_name;
document.getElementById("player_answer".innerHTML="Answer Turn -" + player2_name;

function send()
word =get_word.tolowercase();
console.log("word in lowercase + " = word);

charAt1 =word.charAt(1);
console.log(charAt2);

length_divide_2 = math.floor(word.length/2);
charAt2 = word.charAt(length_divide_2);
console.log(charAt2);

length_minus_1 = wordlength-1;
charAt3 =word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1 + word.replace(charAt1, "_";
remove_charAt2 = remove_charAt1.replace(charAt2, "_";
remove_charAt3 = remove_charAt2.replace(charAt3, "_";
console.log(remove_charAt3);

question_word = "<h4 id='word_display'>Q. "=remove_charaT3="</h4>";
input_box =<br>answer : <input type ='text'  id='input_check_box'>";
check_button =<br><br><button class='btn-btn-info' onclick='check()'>check</button>;
row = question_word +input_box + check_button ;
document.getElmentById("output").innerHTML = row;
document.getElementById("word".value = "";
}
question_turn = "player1";
 answer_turn = "player2";

 function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.tolowercase();
    console.log("answer in lower case-" = answer);
    if(answer==word)
{
    if(answer_turn=="player1")
    {
        player1_score=player1_score +1;
        document.getElementById("player1_score").innerhtml=player1_score;

    }
    else
    {
        player2_score=player2_score+1;
        ddocument.getElementById("player2_score").innerhtml=player2_score;
    }
}
if(question_turn=="player1")
{
    question_turn= "player2";
    document.getElementById("player_question").innerhtml = "question_turn-"+ player2_name;

}
else
{
    question_turn="player1"
    document.getElementById("player_question").innerhtml = "question_turn"+ player1_name;

}
if(answer_turn=="player1")
{
answer_turn="player2"
document.getElementById("player_answer").innerhtml = "answer_turn-"=player2_name;
}
else
{
    answer_turn="player1"
    document.getElementById("player_answer").innerhtml = "answer_turn-"=player1_name;
}

document.getElementById("output").innerhtml="";
}
