const videoIds = 

  ["mpbdzB28ZBY","r-0IfVQyIEs", "0VVkfkBlTRI", "zWxYKkLlF6E", "mKhk10QJNKk", "i8MTHqo5mU4", "KlKeKQgeHX8", "Z42SIvyWzhM"]; 
const videoTitles = 
  ["Movements", "Harmonic Space", "Call Meter","Spine Saver", "BeatFighter","Universallis",  
  "Teradiddle", "Terpstra"]; 

const videoDescription = [
  "In this project, specific hand gestures were used to trigger different sound samples. There were six different libraries of samples each consisting of five samples. Each sample library has a different sonic feel (movement). Certain gestural commands were used with specific samples to amplify the targeted expression. This program was designed to create a specific feeling and meaning through arm and hand gestures without the need for language.",
  "Our goal in this project was to help people understand the concept of tonal tension and release (consonance and dissonance) through the relationship of space and tonality. A person is placed in a defined area. The program identifies the top five locations the user frequents most as key points. Once five key points have been made, the user can trigger a chord by standing in that spot. Key points trigger specific chords that relate to tonal harmony. Once the points are activated the user can trigger different chords depending on the specific location in real time.", 
  "CallMeter automates the tedious task of tracking billable time on the phone by creating invoices for clients by automatically tracking minutes spent and programmatically generating invoices unique to each of your clients.",
  "Having trouble with your posture?! Try Spine Saver. Track your slouching metrics.",
  "A game where players craft beats that come to life for competition", 
  "A three dimensional seuquencer",
  "A musical physics simulation", 
  "A symetrical keyboard that is designed to help musicians learn music through geometrical association", 
]

export function videoDescriptionRotateLeft() { 
  return shiftListLeft(videoDescription); 
}

export function videoDescriptionRotateRight() { 
  return shiftListRight(videoDescription);
}
export function videoTitleRotateLeft() { 
  return shiftListLeft(videoTitles); 
}

export function videoTitleRotateRight() { 
  return shiftListRight(videoTitles); 
}

export function videoIdRotateLeft(){ 
  return shiftListLeft(videoIds); 
}

export function videoIdRotateRight(){ 
  return shiftListRight(videoIds); 
}

function shiftListLeft(list){ 
  let element = list.shift(); 
  list.push(element); 
  return list[0]; 
}

function shiftListRight(list){ 
  let element = list.pop(); 
  list.unshift(element); 
  return list[0]; 
}
