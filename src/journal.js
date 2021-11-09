function JournalEntry (title, body) {
  this.title = title;
  this.body = body;
}

JournalEntry.prototype.wordCount = function(){
  let wordLength = this.body.split(" ");
  return wordLength.length;
}

JournalEntry.prototype.getCount = function() {
  let myObject = {
    consonants: 0,
    vowels: 0
  };

  for(let i = 0, j = this.body.length; i < j; i++) {
    if('aeiou'.indexOf(this.body[i]) !== -1) myObject.vowels++;
    if('bcdfghjklmnpqrstvwxyz'.indexOf(this.body[i]) !== -1) myObject.consonants++;
  }

  return myObject;
};

JournalEntry.prototype.getTeaser = function() {
  let wordLength = this.body.split(" ");
  let wordEight = wordLength.splice(0, 8).join(" ");
  return wordEight;
}