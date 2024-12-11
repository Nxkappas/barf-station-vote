// Voting function
function vote(picture) {
    const pictureRef = database.ref('votes/' + picture);
  
    pictureRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        const currentVotes = snapshot.val();
        pictureRef.set(currentVotes + 1);  // Increment vote count by 1
        alert("Vote successfully cast for " + picture);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
// Function to display votes
function displayVotes() {
    const votesRef = database.ref('votes');
  
    votesRef.on('value', (snapshot) => {
      const votes = snapshot.val();
      const voteDisplay = document.getElementById('vote-display');
      
      let voteHTML = '';
      for (const picture in votes) {
        voteHTML += `<div>${picture}: ${votes[picture]} votes</div>`;
      }
      
      voteDisplay.innerHTML = voteHTML;
    });
  }
  
  // Call displayVotes on page load
  window.onload = function() {
    displayVotes();
  };
    