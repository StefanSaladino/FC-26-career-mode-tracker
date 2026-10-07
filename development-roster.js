(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.loanedPlayers=[
 ['Lawton','GK',18,72],['O. Burnett','GK',18,70],['G. Ricci','CB',18,67],['C. Brun','RM',18,69],['Obaretin','CB',25,72],['Marianucci','CB',23,75],['Valentini','CB',19,69],['Reyna','CB',20,69],['Zanoli','RB',27,77],['Sanchez','CDM',19,65],['Hasa','CM',24,77],['Mancini','RM',19,74],['Rao','LW',22,73],['Vergara','RW',25,72],['Giovane','ST',24,76],['Ambrosino','ST',24,75]
 ];
 D.loanDetails={...(D.loanDetails||{}),'O. Burnett':'loan','G. Ricci':'Hull City — loan','C. Brun':'development','Mancini':'Fiorentina — loan'};
 D.promotedProspects=[['L. Resende','CAM',17,65,'80–86','Loan listed']];
 D.academyPlayers=[
 ['A. Benzekri','GK',16,59,'75–81'],
 ['D. Barone','LB',16,60,'73–79'],
 ['Y. Tran','LB',17,55,'86–92'],
 ['S. Vitale','LB',16,61,'86–92'],
 ['A. De Luca','RB',17,60,'73–79'],
 ['L. Caruso','RB',17,60,'82–88'],
 ['A. Benedetti','CDM',15,55,'75–81'],
 ['M. Allen','LM',16,55,'76–82'],
 ['E. Rossetti','RM',16,60,'89–94'],
 ['F. Freitas','ST',16,58,'85–91']
 ];
 D.developmentNote='Summer 2028 snapshot. Academy ratings and potential ranges updated from the latest in-game youth squad. Resende has been promoted to the senior squad and placed on the loan list; destination not yet confirmed. G. Ricci is officially on loan at Hull City. Mancini is officially on loan at Fiorentina.';
})();