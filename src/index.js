module.exports = function toReadable (number) {


    let readNumber1;
    let dozens1;
    let hundred1;
    let ostatok;
    let chislo;
    let readNumber2;
    let dozens2;
    let hundred2;
    
    
    
    
      if((number>=1000)&&(number<=999999)) {
        ostatok=number%1000;
        chislo=(number-ostatok)/1000;
    
        readNumber2=chislo%10;   
        dozens2=((chislo-readNumber2)/10)%10*10; 
        hundred2=chislo-dozens2-readNumber2;   
    
    
        readNumber1=ostatok%10;   
        dozens1=((ostatok-readNumber1)/10)%10*10; 
        hundred1=ostatok-dozens1-readNumber1;   
    
      }
    
      
    
    
      if ((number>=100)&&(number<=999))  {
        readNumber1=number%10;   
        dozens1=((number-readNumber1)/10)%10*10; 
        hundred1=number-dozens1-readNumber1;     
    
    
      }
    
    
      if ((number>=20)&&(number<=99)) {
      readNumber1=number%10;             
      dozens1=number-readNumber1; 
    
    
    }
    
    
    
    
      let readNumber=(number==0)?"zero":
      (number==1)?"one":
      (number==2)?"two":
      (number==3)?"three":
      (number==4)?"four":
      (number==5)?"five":
      (number==6)?"six":
      (number==7)?"seven":
      (number==8)?"eight":
      (number==9)?"nine":
      (readNumber1==1)?"one":
      (readNumber1==2)?"two":
      (readNumber1==3)?"three":
      (readNumber1==4)?"four":
      (readNumber1==5)?"five":
      (readNumber1==6)?"six":
      (readNumber1==7)?"seven":
      (readNumber1==8)?"eight":
      (readNumber1==9)?"nine":
      (number==10)?"ten":
      (number==11)?"eleven":
      (number==12)?"twelve":
      (number==13)?"thirteen":
      (number==14)?"fourteen":
      (number==15)?"fifteen":
      (number==16)?"sixteen":
      (number==17)?"seventeen":
      (number==18)?"eighteen":
      (number==19)?"nineteen":"";
    
      let readNumberTwo=
      (readNumber2==1)?"one":
      (readNumber2==2)?"two":
      (readNumber2==3)?"three":
      (readNumber2==4)?"four":
      (readNumber2==5)?"five":
      (readNumber2==6)?"six":
      (readNumber2==7)?"seven":
      (readNumber2==8)?"eight":
      (readNumber2==9)?"nine":"";
    
     
    
    
    
    
    
      let dozens=
      (number==20)?"twenty":
      (number==30)?"thirty":
      (number==40)?"forty":
      (number==50)?"fifty":
      (number==60)?"sixty":
      (number==70)?"seventy":
      (number==80)?"eighty":
      (number==90)?"ninety":
      (dozens1==20)?"twenty":
      (dozens1==30)?"thirty":
      (dozens1==40)?"forty":
      (dozens1==50)?"fifty":
      (dozens1==60)?"sixty":
      (dozens1==70)?"seventy":
      (dozens1==80)?"eighty":
      (dozens1==90)?"ninety":"";
    
    
    
      let dozensTwo=
      (dozens2==20)?"twenty":
      (dozens2==30)?"thirty":
      (dozens2==40)?"forty":
      (dozens2==50)?"fifty":
      (dozens2==60)?"sixty":
      (dozens2==70)?"seventy":
      (dozens2==80)?"eighty":
      (dozens2==90)?"ninety":"";
    
       let hundred=
       (hundred1==100)?"one hundred":
       (hundred1==200)?"two hundred":
       (hundred1==300)?"three hundred":
       (hundred1==400)?"four hundred":
       (hundred1==500)?"five hundred":
       (hundred1==600)?"six hundred":
       (hundred1==700)?"seven hundred":
       (hundred1==800)?"eight hundred":
       (hundred1==900)?"nine hundred":"";
    
       let hundredTwo=
       (hundred2==100)?"one hundred":
       (hundred2==200)?"two hundred":
       (hundred2==300)?"three hundred":
       (hundred2==400)?"four hundred":
       (hundred2==500)?"five hundred":
       (hundred2==600)?"six hundred":
       (hundred2==700)?"seven hundred":
       (hundred2==800)?"eight hundred":
       (hundred2==900)?"nine hundred":"";
      
    
    
    
    
      if ((dozens1==10)&&(readNumber1==1)) {
          readNumber="eleven";
      } else
      if ((dozens1==10)&&(readNumber1==2)) {
        readNumber="twelve";
    } else
    if ((dozens1==10)&&(readNumber1==3)) {
        readNumber="thirteen";
    } else
    if ((dozens1==10)&&(readNumber1==4)) {
        readNumber="fourteen";
    } else
    if ((dozens1==10)&&(readNumber1==5)) {
        readNumber="fifteen";
    } else
    if ((dozens1==10)&&(readNumber1==6)) {
        readNumber="sixteen";
    } else
    if ((dozens1==10)&&(readNumber1==7)) {
        readNumber="seventeen";
    } else
    if ((dozens1==10)&&(readNumber1==8)) {
        readNumber="eighteen";
    } else
    if ((dozens1==10)&&(readNumber1==9)) {
        readNumber="nineteen";
    }
    
    
    
      
    
    
    
     if (number<20) {
     return readNumber||dozens; } 
    
     if ((number>=20)&&(number<=99)) {
         if (readNumber==0) {
             return (dozens);
         } else 
      return (dozens+" "+readNumber);
     }
    
  
     
  
  
     if ((number>=100)&&(number<=999)) { 
         if ((dozens1==0)&&(!(readNumber1==0))) {
             return (hundred+" "+readNumber); 
         } else if ((readNumber1==0)&&(!(dozens1==0))&&(!(dozens1==10))) {
             return (hundred+" "+dozens);
         } else if ((dozens1==0)&&(readNumber1==0)) {
             return (hundred);
         } else if ((dozens1==10)&&(!(readNumber1==0))) {
           return (hundred+" "+readNumber);
         } else if ((dozens1==10)&&(readNumber1==0)) {
             return (hundred+" ten");
         } else
         
    
      return (hundred+" "+dozens+" "+readNumber);
     } 
    
     if((number>=1000)&&(number<=999999)) {
       return (hundredTwo+" "+dozensTwo+" "+readNumberTwo+" thousand "+hundred+" "+dozens+" "+readNumber);
    }
  

}
