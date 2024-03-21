//+++++++++++++++ Immideatlly invoke function expression (iife)++++++++++++++


(function boat() {
    console.log(`Connected to the Boat`);
}) ();

( (name) => {
    console.log(`Connected to The Noise ${name}`);
}) ('pradeep')