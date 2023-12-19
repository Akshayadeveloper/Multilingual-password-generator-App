//Multilingual password generator Application 
//Here we used Four different languages like English, Korean, Japanese, Chinese combination to generate the strong password
//Remeber we onky used sample charsets from different language. Use full alphabets, consonants and vowels for full and more enhanced password combo.
    const charSets = {
      english: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      korean: '가갸거겨고교구규그기나냐너녀노뇨누뉴느니다댜더뎌도됴두듀드디라랴러려로료루류르리마먀머며모묘무뮤므미바뱌버벼보뵤부뷰브비사샤서셔소쇼수슈스시아야어여오요우유으이',
      japanese: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
      chinese: '的一是了我不在人们有他这个上们来到时大地为子中你说生国年着就那和要她出也得那里看只过天去年化好在后起天得过得',
    };
//Function to get the random character set.
    function getRandomChar(charSet) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      return charSet.charAt(randomIndex);
    }
//Function to generate the password
    function generatePassword() {
      const passwordLength = 12; // You can adjust the length as needed
      const selectedCharSets = Object.values(charSets);
      let password = '';
//For loop to repeat this block of code
      for (let i = 0; i < passwordLength; i++) {
        const randomCharSet = selectedCharSets[Math.floor(Math.random() * selectedCharSets.length)];
        password += getRandomChar(randomCharSet);
      }
        
 //Get document element by the element id 
        document.getElementById('password').textContent = password;
    }
  
 