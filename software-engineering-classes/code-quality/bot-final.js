// A list of rules. Each rule is defined by a pattern consisting of
// words or '*' and a reply which contains words or indices (starting
// from zero) that refer to matched '*' word lists in the pattern.
var rules = 
  [ 
    { "pattern": [ "*", "I", "am", "*" ],
      "reply": [ "Can you explain what made you ", 1, "?" ] },
    { "pattern": [ "*", "I", "remember", "*" ],
      "reply": [ "What made you think about ", 1, "?" ] },
    { "pattern": [ "*", "loves", "*" ],
      "reply": [ "How does that make you feel about ", 0, "?" ] },
    { "pattern": [ "*", "mother", "*" ],
      "reply": [ "Tell me more about your family." ] },
    { "pattern": [ "*", "father", "*" ],
      "reply": [ "Tell me more about your family." ] },
  ]

// Some words need to be replaced when recomposing the reply so that
// "I remember my dog" -> "What made you think about *your* dog?"
var replacements = 
  [ 
    [ "my", "your"],
    [ "My", "your"],
    [ "me", "you" ],
    [ "Me", "you" ],
    [ "I", "you" ] 
  ]  

function applyReplacements(word) {
  for(var j = 0; j < replacements.length; j++) {
    if (word == replacements[j][0]) return replacements[j][1];
  }
  return word;
}

// Checks whether given words match given pattern (pi and wi are
// indices of current position in pattern and word that we are 
// looking at). Returns 'null' if matching fails or an array of 
// matched word(s) that correspond to all '*' in the pattern.
function matchPattern(pattern, words, patternIndex, wordIndex) {
  if (patternIndex == pattern.length && wordIndex == words.length) {
    return [];
  }
  if (patternIndex == pattern.length) {
    return null;
  } 
  if (pattern[patternIndex] == "*") {
    // Try matching '*' with anything between zero or all remaining words
    for(var l = 0; l <= words.length-wordIndex; l++) {
      var res = matchPattern(pattern, words, patternIndex+1, wordIndex+l)
      if (res) {
        // If matching succeeded, apply replacements and add 
        // words matched against the current '*' to returned result
        var sub = words.slice(wordIndex, wordIndex+l);
        for(var i = 0; i < sub.length; i++) sub[i] = applyReplacements(sub[i]);
        return [sub.join(' ')].concat(res);      
      }
    }
    return null;
  }
  if (wordIndex == words.length) {
    return null;
  }
  if (pattern[patternIndex] == words[wordIndex]) {
    return matchPattern(pattern, words, patternIndex+1, wordIndex+1)
  }
}

function reply(message) {
    // Iterate over all rules and find the first one that matches
  var words = message.split(' ')
  for(var i = 0; i<rules.length; i++) 
  {
    var match = matchPattern(rules[i].pattern, words, 0, 0)
    if (match) {
      // Reconstruct a reply - if a token is a number, find the
      // matched word from 'match', otherwise just append the word
      var res = ""
      for(var token of rules[i].reply) {
        if (typeof(token) == "number") res += match[token]
          else res += token;
      }
      return res;
    }
  }
  return "Can you tell me more about that?";
}

function saySomething() {
  var message = document.getElementById('message').value;
  var conversation = document.getElementById('conversation');
  var answer = reply(message);
  conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p><strong>Eliza:</strong> " + answer + "</p>";
}