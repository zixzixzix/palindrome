module.experts = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

// Define a Phrase object.
function Phrase(content){
  this.content = content;
  // Retruns cotent processed for palindrome testing.
  this.processedContent = function (){
    return this.content.toLowerCase();
  }
  // Retruns ture if the phrase is a palindrome, false otherwise.
  this.palindrome = function (){
    return this.processedContent() === this.processedContent().reverse();
  }
}
