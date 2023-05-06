function getBotResponse(input) {

    //rock joji and rick
    if (input == "hello bot") {
        return " tell me master";
    }else if (input == "hey") {
        return " hey bro! what you want?";
    }else if (input == "hi") {
        return " Hi bro! how are you?";
    }else if (input == "fine") {
        return "i'm also Fine ";
    }else if (input == "Hi") {
        return "Hey buddy";
    }else if (input == "good") {
        return "Thank You";
    }else if (input == "good morning") {
        return "Have a fantastic morning sir";
    }else if (input == "ok") {
        return "Nice";
    }else if (input == "yuve") {
        return "He's a Good Developer";
    }else if (input == "okay bye") {
        return "bye bye";
    } else if (input == "joji") {
        window.location.href = "https://youtu.be/uy4mdPZNBbY";
        return "we are redirecting you";
    } else if (input == "rick") {
        window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        return "we are redirecting you";
    }




    const hola = 'hello';
    const hola1 ='hola';
    const hola2 ='ola';
    if (input.includes(hola)||input.includes(hola1)||input.includes(hola2)) {
        return "Hai, how are you?";
    }


    const hello = 'game';
    const hello1 ='song';
    const hello2 ='shall we play a game';
    if (input.includes(hello)||input.includes(hello1)||input.includes(hello2)) {
        return " please go and do your work ";
    }







    const help = 'Ayuda';
    const help1 ='ayuda';
    const help2 ='AYUDA';
    if (input.includes(help)||input.includes(help1)||input.includes(help2)) {
        pft="This is the frequently asked questions section, if you do not find your question, you can write us your question by mail just saying Mail:\n";
        pf1="FAQ 1? write 1\n";
        pf2="FAQ 2? write 2\n";
        pf3="FAQ 3? write 3\n";
        pf4="FAQ 4? write 4\n";
        pf5="FAQ 5? write 5\n";
        return(pft+pf1+pf2+pf3+pf4+pf5);
        
    }

    // frequently asked questions answers
    // if(input == '1'||input.includes("FAQ 1")){
    //     return "Respuesta a la pregunta frecuente 1";
    // }
    // if(input == '2'||input.includes("pregunta frecuente 2")){
    //     return "Respuesta a la pregunta frecuente 2";
    // }
    // if(input == '3'||input.includes("pregunta frecuente 3")){
    //     return "Respuesta a la pregunta frecuente 3";
    // }
    // if(input == '4'||input.includes("pregunta frecuente 4")){
    //     return "Respuesta a la pregunta frecuente 4";
    // }
    // if(input == '5'||input.includes("pregunta frecuente 5")){
    //     return "Respuesta a la pregunta frecuente 5";
    // }
    // frequently asked questions answers



    if(input == 'Mail'){
        window.location.href = "mailto:example@gmail.com";
        return "We are redirecting you to the mail";
    }

    if(input == 'I have a question'){
        return "just type it in textbox";
    }

    if(input=="❤️"){
        return "❤️ "+"Thank you very much for your support";
    }


    // Simple responses
    if (input == "Hola" || input == "hola" || input == "ola" ) {
        return "Hello, I am a test bot (If you have doubts try saying help)";
    } else if (input == "bye bye" || input=="bye"||input=="tata"||input=="i'm going bye"||input=="poda dei") {
        a= "Goodbye, thank you very much for  visting my chatbot ";
        return a;
    } else {
        return "My apologies. I am unable to understand  your question. Could you please text me again.";
    }
}
