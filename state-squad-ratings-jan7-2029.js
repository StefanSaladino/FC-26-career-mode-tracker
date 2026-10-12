/* Manager-confirmed 7 January 2029 squad census; 35 players, incl. 13 on loan.
 * Live ratings supersede older August 2028 snapshots. Historical articles/transfers are untouched.
 * No lineup changes are asserted by this roster-only update.
 */
(() => {
  const D = window.NAPOLI_DATA; if (!D) return;
  const rows = [
  [
    "Alex Meret",
    31,
    86,
    "GK"
  ],
  [
    "Lawton",
    18,
    73,
    "GK",
    "loan"
  ],
  [
    "Peacock",
    20,
    74,
    "GK"
  ],
  [
    "O. Burnett",
    19,
    71,
    "GK",
    "loan"
  ],
  [
    "Alphonso Davies",
    28,
    89,
    "LM / LB"
  ],
  [
    "Marc Cucurella",
    30,
    88,
    "LB"
  ],
  [
    "Riccardo Calafiori",
    26,
    87,
    "LB / CB"
  ],
  [
    "Alessandro Bastoni",
    29,
    91,
    "CB"
  ],
  [
    "Lutsharel Geertruida",
    28,
    82,
    "RB / CB / CDM"
  ],
  [
    "Alessandro Buongiorno",
    29,
    88,
    "CB"
  ],
  [
    "Sam Beukema",
    30,
    81,
    "CB"
  ],
  [
    "Rafa Marín",
    26,
    81,
    "CB"
  ],
  [
    "Marianucci",
    24,
    75,
    "CB",
    "loan"
  ],
  [
    "Valentini",
    19,
    69,
    "CB",
    "loan"
  ],
  [
    "G. Ricci",
    19,
    68,
    "CB",
    "loan"
  ],
  [
    "Reyna",
    20,
    69,
    "CB",
    "loan"
  ],
  [
    "Giovanni Di Lorenzo",
    35,
    77,
    "RB"
  ],
  [
    "Michael Kayode",
    24,
    87,
    "RB"
  ],
  [
    "Sanchez",
    19,
    66,
    "CDM",
    "loan"
  ],
  [
    "Hasa",
    25,
    78,
    "CM / CAM"
  ],
  [
    "Kevin De Bruyne",
    37,
    81,
    "CAM / CM"
  ],
  [
    "Scott McTominay",
    32,
    88,
    "CM / CDM"
  ],
  [
    "Anton Stach",
    30,
    81,
    "CDM / CM"
  ],
  [
    "João Neves",
    24,
    93,
    "CM / CDM"
  ],
  [
    "Nico Paz",
    24,
    88,
    "CAM / RM"
  ],
  [
    "L. Resende",
    17,
    68,
    "CAM",
    "loan"
  ],
  [
    "Michael Olise",
    27,
    91,
    "RW / RM"
  ],
  [
    "C. Brun",
    19,
    71,
    "RM",
    "loan"
  ],
  [
    "Mancini",
    20,
    75,
    "RM",
    "loan"
  ],
  [
    "Mikey Moore",
    21,
    84,
    "W / AM"
  ],
  [
    "Rao",
    22,
    73,
    "LW",
    "loan"
  ],
  [
    "Vergara",
    25,
    73,
    "RW",
    "loan"
  ],
  [
    "Giovane",
    25,
    76,
    "ST",
    "loan"
  ],
  [
    "Maximilian Beier",
    26,
    89,
    "ST"
  ],
  [
    "Pio Esposito",
    23,
    87,
    "ST"
  ]
];
  const info = Object.fromEntries(rows.map(([name,age,overall,position,status]) => [name,{age,overall,position,onLoan:status==='loan'}]));
  D.playerAges = {...(D.playerAges||{}), ...Object.fromEntries(rows.map(([name,age])=>[name,age]))};
  const groups = {
  "Goalkeepers": [
    "Alex Meret",
    "Peacock"
  ],
  "Defenders": [
    "Marc Cucurella",
    "Riccardo Calafiori",
    "Alessandro Bastoni",
    "Lutsharel Geertruida",
    "Alessandro Buongiorno",
    "Sam Beukema",
    "Rafa Marín",
    "Giovanni Di Lorenzo",
    "Michael Kayode"
  ],
  "Midfielders": [
    "Hasa",
    "Kevin De Bruyne",
    "Scott McTominay",
    "Anton Stach",
    "João Neves",
    "Nico Paz"
  ],
  "Attackers": [
    "Alphonso Davies",
    "Michael Olise",
    "Mikey Moore",
    "Maximilian Beier",
    "Pio Esposito"
  ]
};
  const older = Object.values(D.squadPublic||{}).flat();
  const previous = new Map(older.map(p=>[p[0],p]));
  const statuses = {
    'Alex Meret':'First-team goalkeeper',
    'Peacock':'Development goalkeeper · clean sheet vs Parma Jan 4',
    'Giovanni Di Lorenzo':'Captain · renewal talks broken down · Everton interest, no transfer confirmed',
    'Hasa':'Returned from loan · squad role under review'
  };
  D.squadPublic = Object.fromEntries(Object.entries(groups).map(([group,names])=>[
    group, names.map(name=>{
      const p=info[name], prior=previous.get(name);
      return [name, prior?.[1]||p.position, p.overall, statuses[name]||prior?.[3]||'First team'];
    })
  ]));
  D.loanedPlayers=rows.filter(r=>r[4]==='loan').map(([name,age,overall,pos])=>[name,pos,age,overall]);
  D.loanDetails={...(D.loanDetails||{})};
  delete D.loanDetails.Hasa; // Confirmed back at Napoli, not on loan.
  if (Array.isArray(D.promotedProspects)) D.promotedProspects=D.promotedProspects.map(
    p=>p[0]==='L. Resende'?[p[0],p[1],17,68,p[4], 'Loaned out']:p);
  const getOverall=name=>info[name]?.overall??(name==='Francesco Pio Esposito'?info['Pio Esposito'].overall:null);
  for (const key of ['firstXI','eliteXI']) if (Array.isArray(D[key]))
    D[key]=D[key].map(r=>[r[0],r[1],getOverall(r[1])??r[2],...r.slice(3)]);
  D.squadSnapshot={updated:'7 January 2029 · before Palermo · manager-confirmed squad census',verified:true,
    players:Object.fromEntries(rows.map(([name,age,overall,position,status])=>[name,{age,overall,position,onLoan:status==='loan'}])),
    playerCount:rows.length,loanCount:D.loanedPlayers.length,
    notes:'Hasa returned from loan, presently a senior player. Di Lorenzo remains at Napoli; contract talks broken down and Everton approach unconfirmed as a move.'};
  D.developmentNote='Loan ages and overalls manager-confirmed 7 Jan 2029 (13 players). Hasa has returned from loan. Resende remains loaned out. Academy potentials are from an earlier youth-squad report, not newly reconfirmed.';
})();
