// No Nut Army Soldier's Dashboard Functionality

// Load streak count from local storage
let streakCount = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;
const streakDisplay = document.getElementById("streakCount");
streakDisplay.textContent = streakCount;

// Load last login date
let lastLogin = localStorage.getItem("lastLogin");
const today = new Date().toLocaleDateString();

// If new day, increase streak automatically
if (lastLogin !== today) {
    streakCount++;
    localStorage.setItem("streak", streakCount);
    localStorage.setItem("lastLogin", today);
}
streakDisplay.textContent = streakCount;

// Rank system based on streak
const ranks = [
    "Private", "Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "General", "Supreme Commander"
];
const userRank = document.getElementById("userRank");
userRank.textContent = ranks[Math.min(Math.floor(streakCount / 5), ranks.length - 1)];

// Update rewards
const rewardMessage = document.getElementById("rewardMessage");
if (streakCount >= 30) {
    rewardMessage.textContent = "Elite Warrior! You have proven your strength.";
} else if (streakCount >= 15) {
    rewardMessage.textContent = "You've earned a cheat day (non-physical)! Keep it up!";
} else if (streakCount >= 5) {
    rewardMessage.textContent = "Your discipline is paying off. Stay the course!";
} else {
    rewardMessage.textContent = "Keep going to unlock rewards!";
}

// Reset streak button
document.getElementById("resetStreak").addEventListener("click", function() {
    if (confirm("Are you sure you want to reset your streak? Stay strong, soldier!")) {
        streakCount = 0;
        localStorage.setItem("streak", streakCount);
        localStorage.setItem("lastLogin", today);
        streakDisplay.textContent = streakCount;
        userRank.textContent = "Private";
        rewardMessage.textContent = "Keep going to unlock rewards!";
    }
});

// Daily mission system
const dailyMissions = [
    "Do 30 push-ups and feel the burn!",
    "Meditate for 10 minutes to sharpen your focus.",
    "Write down 3 reasons why you are doing this challenge.",
    "Take a cold shower and refresh your mind.",
    "Go for a run or a walk to clear your head.",
    "Read 10 pages of an inspiring book.",
    "Do 50 jumping jacks to shake off urges."
];
const dailyMission = document.getElementById("dailyMission");
let savedMission = localStorage.getItem("dailyMission");
if (!savedMission || lastLogin !== today) {
    savedMission = dailyMissions[Math.floor(Math.random() * dailyMissions.length)];
    localStorage.setItem("dailyMission", savedMission);
}
dailyMission.textContent = savedMission;

// Panic Mode button
document.getElementById("panicButton").addEventListener("click", function() {
    alert("Panic Mode Activated! You have 10 seconds to do 20 push-ups! GO!");
    setTimeout(() => alert("Mission Complete? If not, drop and do more!"), 10000);
});
