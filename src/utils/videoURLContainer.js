
const videoIds = 
  ["mpbdzB28ZBY","r-0IfVQyIEs",  "zWxYKkLlF6E", "mKhk10QJNKk", "i8MTHqo5mU4", "KlKeKQgeHX8", "Z42SIvyWzhM", 
  "9NBnheuPhkE"]; 

  const videoTitles = 
  ["Movements", "Harmonic Space" ,"Spine Saver", "BeatFighter","Universallis",  
  "Teradiddle", "Terpstra", "NOTED"]; 

  const techStack = [ 
    'Max-Msp kinect-v1 samplers', 'max-msp kinect-v2 midi', 
    'TensorFlow Webcam Mongo Express React Node', 'Unity-3d C#', 'Unity-3d C#',  'Unity C# Max-Msp Midi', 'Unity-3d C#', 
    'Mongo Express React Node', 
  ]; 

  const liveLink = [{link: false}, {link:false}, 
  {link: true, url:'https://spine-saver-client-side.herokuapp.com/', github: 'https://github.com/signalflowsean/spineSaver'}, {link: false}, {link: false }, 
  {link: false }, {link: false }, {link: true, url:'https://noted-client.herokuapp.com/', github:'https://github.com/thinkful-ei25/noted-client-sean-alex'}, 
  ]; 

const videoDescription = [
  "In this project, specific hand gestures were used to trigger different sound samples. There were six different libraries of samples each consisting of five samples. Each sample library has a different sonic feel (movement). Certain gestural commands were used with specific samples to amplify the targeted expression. This program was designed to create a specific feeling and meaning through arm and hand gestures without the need for language.",
  "Our goal in this project was to help people understand the concept of tonal tension and release (consonance and dissonance) through the relationship of space and tonality. A person is placed in a defined area. The program identifies the top five locations the user frequents most as key points. Once five key points have been made, the user can trigger a chord by standing in that spot. Key points trigger specific chords that relate to tonal harmony. Once the points are activated the user can trigger different chords depending on the specific location in real time.", 
  "Having trouble with your posture?! Try Spine Saver. Tracks your slouching metrics and reports back to you your improvement overtime. All you need is a webcam!",
  "This project allows a user to easily craft a beat and have that beat come to life. The user interacts with the transubstantiated beat by moving it through two dimensional space to destroy their opponent. The player needs to listen to the music to be able to effectively anticipate the other player's moves.  It was made with Unity. ", 
  "A three dimensional seuquencer, based on the tersptra keyboard layout. There is a twist on this layout as this projects introduces the concept of time by rotating the keyboard continuously, thus a sequencer!",
  "A musical physics simulation. Bouncing spheres act as triggers to a beautiful harmonic sequencer. Users can control the playback and looping of spheres by interacting with them.", 
  "A symetrical keyboard that is designed to help musicians learn music through geometrical association.", 
  "Uses the spaced repition algorithm to help users master identifying the different musical notation symbols.", 
]

const collaborators = [ 
  'solo', 'Robert Bruce Johnson', 'solo', 'solo', 
  'solo', 'George Luther', 'solo', 'Alex Crowell'
]

const videoIdsInd = 
  ["mpbdzB28ZBY","r-0IfVQyIEs", "zWxYKkLlF6E", "mKhk10QJNKk", "i8MTHqo5mU4", 
  "KlKeKQgeHX8", "Z42SIvyWzhM", "9NBnheuPhkE"]; 

  const videoTitlesInd = 
  ["Movements", "Harmonic Space" ,"Spine Saver", "BeatFighter","Universallis",  
  "Teradiddle", "Terpstra", "NOTED"]; 

  const techStackInd = [ 
    'Max-Msp kinect-v1 samplers', 'max-msp kinect-v2 midi', 
    'TensorFlow Webcam Mongo Express React Node', 'Unity-3d C#', 'Unity-3d C#', 'Unity C# Max-Msp Midi', 'Unity-3d C#', 
    'Mongo Express React Node',
  ]; 

  const liveLinkInd = [{link: false}, {link:false},  
  {link: true, url:'https://spine-saver-client-side.herokuapp.com/', github: 'https://github.com/signalflowsean/spineSaver'}, {link: false}, {link: false }, 
  {link: false }, {link: false }, {link: true, url:'https://noted-client.herokuapp.com/', github:'https://github.com/thinkful-ei25/noted-client-sean-alex'}]; 

const videoDescriptionInd = [
  "In this project, specific hand gestures were used to trigger different sound samples. There were six different libraries of samples each consisting of five samples. Each sample library has a different sonic feel (movement). Certain gestural commands were used with specific samples to amplify the targeted expression. This program was designed to create a specific feeling and meaning through arm and hand gestures without the need for language.",
  "Our goal in this project was to help people understand the concept of tonal tension and release (consonance and dissonance) through the relationship of space and tonality. A person is placed in a defined area. The program identifies the top five locations the user frequents most as key points. Once five key points have been made, the user can trigger a chord by standing in that spot. Key points trigger specific chords that relate to tonal harmony. Once the points are activated the user can trigger different chords depending on the specific location in real time.", 
  "Having trouble with your posture?! Try Spine Saver. Tracks your slouching metrics and reports back to you your improvement overtime. All you need is a webcam!",
  "This project allows a user to easily craft a beat and have that beat come to life. The user interacts with the transubstantiated beat by moving it through two dimensional space to destroy their opponent. The player needs to listen to the music to be able to effectively anticipate the other player's moves.  It was made with Unity. ", 
  "A three dimensional seuquencer, based on the tersptra keyboard layout. There is a twist on this layout as this projects introduces the concept of time by rotating the keyboard continuously, thus a sequencer!",
  "A musical physics simulation. Bouncing spheres act as triggers to a beautiful harmonic sequencer. Users can control the playback and looping of spheres by interacting with them.", 
  "A symetrical keyboard that is designed to help musicians learn music through geometrical association.", 
  "Uses the spaced repition algorithm to help users master identifying the different musical notation symbols.", 
]

const collaboratorsInd = [ 
  'solo', 'Robert Bruce Johnson', 'solo', 'solo', 
  'solo', 'George Luther', 'solo', 'Alex Crowell', 
]

export function techStackIndexAt(i){ 
  return techStackInd[i]; 
}
export function techStackRotateLeft(){ 
  return shiftListLeft(techStack); 
}

export function techStackRotateRight(){ 
  return shiftListRight(techStack); 
}

export function liveLinkAtIndex(i){ 
  return liveLinkInd[i]; 
}

export function videoLinkRotateLeft(){ 
  return shiftListLeft(liveLink); 
}

export function videoLinkRotateRight(){ 
  return shiftListRight(liveLink); 
}

export function collaboratorsAtIndex(i){ 
  return collaboratorsInd[i]; 
}
export function videoCollobaratorsRotateLeft(){ 
  return shiftListLeft(collaborators); 
}

export function videoCollobaratorsRotateRight() { 
  return shiftListRight(collaborators); 
}

export function descriptionAtIndex(i){ 
  return videoDescriptionInd[i]; 
}
export function videoDescriptionRotateLeft() { 
  return shiftListLeft(videoDescription); 
}

export function videoDescriptionRotateRight() { 
  return shiftListRight(videoDescription);
}

export function titlesAtIndex(i){ 
  return videoTitlesInd[i]; 
}

export function videoTitleRotateLeft() { 
  return shiftListLeft(videoTitles); 
}

export function videoTitleRotateRight() { 
  return shiftListRight(videoTitles); 
}

export function videoIdsAtIndex(i){ 
  return videoIdsInd[i]; 
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
