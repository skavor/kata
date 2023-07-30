
// Calculate the amount rised by Effy
function SumAmountRisedByEffy(projectCost:any, revenue:  any, totalPerson:any) {
    const formula = projectCost * 0.75 - (revenue / totalPerson) *0.15
    return Math.round(formula*100)/100 
}

// Calculate cost of project
function  SumProjectCost(area:any) {
    return area * 80;
}

export {SumProjectCost, SumAmountRisedByEffy}