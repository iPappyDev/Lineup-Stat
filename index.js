class Club{
    constructor(playerName,jerseyNumber,position){
        this.playerName = playerName,
        this.jerseyNumber = jerseyNumber,
        this.position = position
    }
}

var keeper = new Club("Degea", "1", "GK-")
numberKeeper.innerHTML = `
    <div id="keeps">
        <h1> ${keeper.jerseyNumber}</h1>
       <div id="dispf">
            <h3> ${keeper.position}</h3>
            <h3> ${keeper.playerName}</h3>
       </div>
    </div>
`
var rightBack = new Club("Dalot", "2", "RB")
rightBackid.innerHTML = `
<div id="Back1">
    <h3> ${rightBack.position}</h3>
    <h1> ${rightBack.jerseyNumber}</h1>
    <h2> ${rightBack.playerName}</h2>
</div>
`
var centerBack2 = new Club("Varane", "6", "CB")
centerBack2Id.innerHTML = `
    <div id="Back1">
        <h3> ${centerBack2.position}</h3>
        <h1> ${centerBack2.jerseyNumber}</h1>
        <h2> ${centerBack2.playerName}</h2>
    </div>
`
var centerBack1 = new Club("Matinez", "5", "CB")
centerBack1Id.innerHTML = `
    <div id="Back1">
        <h3> ${centerBack1.position}</h3>
        <h1> ${centerBack1.jerseyNumber}</h1>
        <h2> ${centerBack1.playerName}</h2>
    </div>
`
var leftBack = new Club("Malacia", "3", "LB")
leftBackid.innerHTML = `
    <div id="Back1">
        <h3> ${leftBack.position}</h3>
        <h1> ${leftBack.jerseyNumber}</h1>
        <h2> ${leftBack.playerName}</h2>
    </div>
`
var defensiveMid = new Club("Fred", "4", "DM-")
defensiveMidf.innerHTML = `
<div id="keeps">
    <h1> ${defensiveMid.jerseyNumber}</h1>
   <div id="dispf">
        <h3> ${defensiveMid.position}</h3>
        <h3> ${defensiveMid.playerName}</h3>
   </div>
</div>
`
var attackingMid1 = new Club("Eriksen", "10", "AM")
attackingMidf1.innerHTML = `
    <div id="Back1">
        <h3> ${attackingMid1.position}</h3>
        <h1> ${attackingMid1.jerseyNumber}</h1>
        <h2> ${attackingMid1.playerName}</h2>
    </div>
`
var attackingMid2 = new Club("Bruno", "8", "AM")
attackingMidf2.innerHTML = `
    <div id="Back1">
        <h3> ${attackingMid2.position}</h3>
        <h1> ${attackingMid2.jerseyNumber}</h1>
        <h2> ${attackingMid2.playerName}</h2>
    </div>
`
var leftWinger = new Club("Anthony", "11", "LW")
leftWing.innerHTML = `
    <div id="Back1">
        <h3> ${leftWinger.position}</h3>
        <h1> ${leftWinger.jerseyNumber}</h1>
        <h2> ${leftWinger.playerName}</h2>
    </div>
`
var rightWinger = new Club("Sancho", "7", "RW")
rightWing.innerHTML = `
    <div id="Back1">
        <h3> ${rightWinger.position}</h3>
        <h1> ${rightWinger.jerseyNumber}</h1>
        <h2> ${rightWinger.playerName}</h2>
    </div>
`
var forward = new Club("Rashford", "10", "ST")
striker.innerHTML = `
<div id="Back1">
    <h3> ${forward.position}</h3>
    <h1> ${forward.jerseyNumber}</h1>
    <h2> ${forward.playerName}</h2>
</div>
`