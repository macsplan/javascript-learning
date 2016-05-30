function Journal() {
  this.entries = [];
  this.addEntry = function(entry) {
    this.entries.push(entry)
  }
  this.searchByTag = function(search) {
    var numberOfEntries = this.entries.length;
    for (var i = 0; i < numberOfEntries; i++) {
      var currentEntry = this.entries[i];
      for (var x = 0; x < currentEntry.tags.length; x++) {
        var currentTag = currentEntry.tags[x];
        if (currentTag === search) {
          console.log("The tag " + search + " is present in the entries");
          return currentEntry.join();
        } else {
          console.log("The tag " + search + " has not been used in the entries");
        }
      }
    }
  }
};


function Entry(title, content, author) {
  this.title = title;
  this.content = content;
  this.author = author;
  this.create = new Date();
  this.tags = [];

  this.addTags = function(tag) {
    this.tags.push(tag);
  }
}


var firstEntry = new Entry("Captain's Log, Stardarte 25364", "we meet the borg", "James T Kirk");

firstEntry.addTags("Borg")

var captainKirksJournal = new Journal();


captainKirksJournal.addEntry(firstEntry);


captainKirksJournal.addEntry(new Entry("Captain's Log, Stardarte 25367", "teleported to planet", "James T Kirk"));

console.log(captainKirksJournal.entries)


console.log(captainKirksJournal.searchByTag("Borg"));