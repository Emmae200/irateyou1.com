let userHeightPreference, userSkinPreference;

function startRanking() {
  userHeightPreference = document.getElementById("heightPreference").value;
  userSkinPreference = document.getElementById("skinPreference").value;

  document.getElementById("userPreferences").style.display = "none";
  document.getElementById("questions").style.display = "block";
} 

function calculateScore() {
  let score = 1;

  // Question 1
  score += document.getElementById("smoothSkin").value === "yes" ? 1.5 : 0;

  // Question 2
  score += document.getElementById("premiumSkin").value === "yes" ? 1.5 : 0;

  // Question 3
  const smile = document.getElementById("smile").value;
  score += smile === "yes" ? 1.5 : smile === "mid" ? 0.75 : 0;

  // Question 4
  const bodyShape = document.getElementById("bodyShape").value;
  score += bodyShape === "yes" ? 2 : bodyShape === "mid" ? 1 : 0;

  // Question 5: Skin Tone Preference
  const skinTone = document.getElementById("skinTone").value;
  if (userSkinPreference === "both" || skinTone === userSkinPreference) {
    score += 1;
  } else {
    score += 0;
  }

  // Question 6: Height Preference
  const height = document.getElementById("height").value;
  if (userHeightPreference === "both" || height === userHeightPreference) {
    score += 1;
  } else {
    score += 0;
  }

  document.getElementById("questions").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("rating").innerText = `This girl has a rating of ${score} out of 10.`;
}
