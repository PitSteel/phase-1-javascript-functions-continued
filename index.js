function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(star = "*") {
    return function(value2 = "special") {
    return `You are ${star}${value2}${star}!`
    }
}

wrapAdjective("||")("a dedicated programmer")